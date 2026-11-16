"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { Locale } from "@/data/translations";

interface EditorContextType {
  isEditing: boolean;
  isAuthorized: boolean;
  pendingChanges: Record<string, string>;
  isSaving: boolean;
  statusMessage: string | null;
  toggleEditMode: () => void;
  updateField: (path: string, value: string) => void;
  getValue: (path: string, fallback: string) => string;
  saveChanges: () => Promise<boolean>;
  discardChanges: () => void;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
  currentLocale: Locale;
  setCurrentLocale: (locale: Locale) => void;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = "mda_editor_auth";
const PENDING_STORAGE_KEY_PREFIX = "mda_editor_pending_";

export function EditorProvider({
  children,
  initialLocale = "es",
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [currentLocale, setCurrentLocale] = useState<Locale>(initialLocale);
  const [isEditing, setIsEditing] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [pendingChanges, setPendingChanges] = useState<Record<string, string>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Sync with initialLocale changes
  useEffect(() => {
    if (initialLocale && initialLocale !== currentLocale) {
      setCurrentLocale(initialLocale);
    }
  }, [initialLocale]);

  // Restore auth state from localStorage
  useEffect(() => {
    try {
      const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
      if (storedAuth === "true") {
        setIsAuthorized(true);
      }
      const pendingKey = `${PENDING_STORAGE_KEY_PREFIX}${currentLocale}`;
      const savedPending = localStorage.getItem(pendingKey);
      if (savedPending) {
        setPendingChanges(JSON.parse(savedPending));
      }
    } catch {
      // localStorage may not be accessible
    }
  }, [currentLocale]);

  // Persist pending changes
  useEffect(() => {
    try {
      const pendingKey = `${PENDING_STORAGE_KEY_PREFIX}${currentLocale}`;
      if (Object.keys(pendingChanges).length > 0) {
        localStorage.setItem(pendingKey, JSON.stringify(pendingChanges));
      } else {
        localStorage.removeItem(pendingKey);
      }
    } catch {
      // Ignore
    }
  }, [pendingChanges, currentLocale]);

  const toggleEditMode = useCallback(() => {
    if (!isAuthorized) return;
    setIsEditing((prev) => !prev);
  }, [isAuthorized]);

  const updateField = useCallback((path: string, value: string) => {
    setPendingChanges((prev) => ({
      ...prev,
      [path]: value,
    }));
  }, []);

  const getValue = useCallback(
    (path: string, fallback: string): string => {
      if (pendingChanges[path] !== undefined) {
        return pendingChanges[path];
      }
      return fallback;
    },
    [pendingChanges]
  );

  const discardChanges = useCallback(() => {
    setPendingChanges({});
    try {
      localStorage.removeItem(`${PENDING_STORAGE_KEY_PREFIX}${currentLocale}`);
    } catch {
      // Ignore
    }
    setStatusMessage("Changes discarded.");
    setTimeout(() => setStatusMessage(null), 3000);
  }, [currentLocale]);

  const saveChanges = useCallback(async (): Promise<boolean> => {
    if (Object.keys(pendingChanges).length === 0) return true;

    setIsSaving(true);
    setStatusMessage("Saving changes...");

    try {
      const res = await fetch("/api/content/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale: currentLocale,
          updates: pendingChanges,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to save content.");
      }

      setPendingChanges({});
      localStorage.removeItem(`${PENDING_STORAGE_KEY_PREFIX}${currentLocale}`);
      setStatusMessage(data.message || "Changes saved successfully!");
      setTimeout(() => setStatusMessage(null), 4000);
      return true;
    } catch (err: any) {
      console.error("Save error:", err);
      setStatusMessage(`Error: ${err.message || "Failed to save"}`);
      setTimeout(() => setStatusMessage(null), 5000);
      return false;
    } finally {
      setIsSaving(false);
    }
  }, [pendingChanges, currentLocale]);

  const login = useCallback(async (password: string): Promise<boolean> => {
    try {
      const res = await fetch("/api/editor/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.authorized) {
        setIsAuthorized(true);
        setIsEditing(true);
        localStorage.setItem(AUTH_STORAGE_KEY, "true");
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    setIsAuthorized(false);
    setIsEditing(false);
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
      // Ignore
    }
  }, []);

  return (
    <EditorContext.Provider
      value={{
        isEditing,
        isAuthorized,
        pendingChanges,
        isSaving,
        statusMessage,
        toggleEditMode,
        updateField,
        getValue,
        saveChanges,
        discardChanges,
        login,
        logout,
        currentLocale,
        setCurrentLocale,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor must be used within an EditorProvider");
  }
  return context;
}
