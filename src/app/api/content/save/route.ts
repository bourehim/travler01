import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function setDeep(obj: any, dotPath: string, value: any) {
  const keys = dotPath.split(".");
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    const nextKey = keys[i + 1];
    const nextIsIndex = /^\d+$/.test(nextKey);
    if (!current[key] || typeof current[key] !== "object") {
      current[key] = nextIsIndex ? [] : {};
    }
    current = current[key];
  }
  const lastKey = keys[keys.length - 1];
  current[lastKey] = value;
}

export async function POST(request: Request) {
  try {
    const { locale, updates } = await request.json();

    if (!locale || !updates || typeof updates !== "object") {
      return NextResponse.json(
        { success: false, error: "Missing locale or updates" },
        { status: 400 }
      );
    }

    const safeLocale = String(locale).replace(/[^a-z]/g, "");
    const relativeFilePath = `src/data/content/${safeLocale}.json`;
    const localFilePath = path.join(process.cwd(), relativeFilePath);

    // 1. Try reading the current content file locally
    let currentContent: any = {};
    let isLocalDisk = false;

    if (fs.existsSync(localFilePath)) {
      try {
        const raw = fs.readFileSync(localFilePath, "utf8");
        currentContent = JSON.parse(raw);
        isLocalDisk = true;
      } catch {
        // Fallback
      }
    }

    // 2. Apply all updates deeply
    for (const [keyPath, value] of Object.entries(updates)) {
      setDeep(currentContent, keyPath, value);
    }

    const updatedJsonString = JSON.stringify(currentContent, null, 2);

    // 3. If in local development, write directly to disk
    if (process.env.NODE_ENV === "development" || (isLocalDisk && !process.env.VERCEL)) {
      try {
        fs.writeFileSync(localFilePath, updatedJsonString, "utf8");
        return NextResponse.json({
          success: true,
          mode: "local",
          message: `Saved changes to ${safeLocale}.json on local disk!`,
        });
      } catch (err: any) {
        console.error("Local write error:", err);
      }
    }

    // 4. In Production (Vercel), commit to GitHub via REST API
    const githubToken = process.env.GITHUB_TOKEN;
    const githubRepo = process.env.GITHUB_REPO || "bourehim/travler01";
    const githubBranch = process.env.GITHUB_BRANCH || "main";

    if (!githubToken) {
      // In local development or standalone without token, if file write succeeded, return success
      if (isLocalDisk) {
        try {
          fs.writeFileSync(localFilePath, updatedJsonString, "utf8");
          return NextResponse.json({
            success: true,
            mode: "local",
            message: `Saved to ${safeLocale}.json`,
          });
        } catch {
          // Fall through
        }
      }

      return NextResponse.json(
        {
          success: false,
          error:
            "GITHUB_TOKEN is required in Vercel Environment Variables to commit live edits to GitHub.",
        },
        { status: 500 }
      );
    }

    // Fetch existing file SHA from GitHub
    const getUrl = `https://api.github.com/repos/${githubRepo}/contents/${relativeFilePath}?ref=${githubBranch}`;
    const getRes = await fetch(getUrl, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github+json",
        "User-Agent": "MujeresDeArena-Editor",
      },
    });

    let sha: string | undefined;
    if (getRes.ok) {
      const existingData = await getRes.json();
      sha = existingData.sha;
    }

    // Put updated content to GitHub
    const putUrl = `https://api.github.com/repos/${githubRepo}/contents/${relativeFilePath}`;
    const base64Content = Buffer.from(updatedJsonString, "utf8").toString("base64");

    const putRes = await fetch(putUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github+json",
        "User-Agent": "MujeresDeArena-Editor",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `chore(content): update ${safeLocale} via inline editor`,
        content: base64Content,
        sha,
        branch: githubBranch,
      }),
    });

    if (!putRes.ok) {
      const errData = await putRes.json();
      throw new Error(errData.message || "Failed to commit to GitHub");
    }

    return NextResponse.json({
      success: true,
      mode: "github",
      message: `Committed changes to GitHub! Vercel is redeploying now.`,
    });
  } catch (error: any) {
    console.error("Save content error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
