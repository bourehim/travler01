import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const correctPassword = process.env.ADMIN_PASSWORD || "arena2026";

    if (password && password === correctPassword) {
      return NextResponse.json({ authorized: true });
    }

    return NextResponse.json(
      { authorized: false, error: "Invalid password" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { authorized: false, error: "Bad request" },
      { status: 400 }
    );
  }
}
