"use client";

import React, { useState } from "react";
import { useEditor } from "@/context/EditorContext";

export default function AdminToolbar() {
  const {
    isEditing,
    isAuthorized,
    pendingChanges,
    isSaving,
    statusMessage,
    toggleEditMode,
    saveChanges,
    discardChanges,
    login,
    logout,
    currentLocale,
  } = useEditor();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const pendingCount = Object.keys(pendingChanges).length;

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError(false);
    const success = await login(passwordInput);
    setIsLoggingIn(false);
    if (success) {
      setShowLoginModal(false);
      setPasswordInput("");
    } else {
      setLoginError(true);
    }
  };

  // 1. If not logged in, show small discreet "Edit Website" trigger button
  if (!isAuthorized) {
    return (
      <>
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setShowLoginModal(true)}
            className="flex items-center gap-2 bg-[#1B1108]/90 hover:bg-[#1B1108] text-[#FAF7F2] text-xs uppercase tracking-wider px-3.5 py-2 rounded-full shadow-lg border border-[#C27A4E]/40 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
            title="Open website editor"
          >
            <span className="w-2 h-2 rounded-full bg-[#C27A4E] animate-pulse"></span>
            <span>Edit Website</span>
          </button>
        </div>

        {/* Login Modal */}
        {showLoginModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-[#FAF7F2] text-[#1B1108] border border-[#E8DFD5] rounded-2xl max-w-sm w-full p-6 shadow-2xl relative">
              <button
                onClick={() => {
                  setShowLoginModal(false);
                  setPasswordInput("");
                  setLoginError(false);
                }}
                className="absolute top-4 right-4 text-[#7B7168] hover:text-[#1B1108] text-lg font-bold"
              >
                ✕
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#C27A4E]"></span>
                <h3 className="font-serif text-xl font-bold tracking-wide">Editor Login</h3>
              </div>
              <p className="text-xs text-[#7B7168] mb-4">
                Enter your editor password to enable visual inline editing on this website.
              </p>

              <form onSubmit={handleLoginSubmit}>
                <input
                  type="password"
                  placeholder="Password (default: arena2026)"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DFD5] bg-white text-sm focus:outline-none focus:border-[#C27A4E] focus:ring-1 focus:ring-[#C27A4E] mb-3"
                  autoFocus
                />

                {loginError && (
                  <p className="text-xs text-red-600 mb-3 font-medium">
                    Incorrect password. Please try again.
                  </p>
                )}

                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={isLoggingIn}
                    className="flex-1 bg-[#1B1108] hover:bg-[#8B4513] text-white py-2 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-50"
                  >
                    {isLoggingIn ? "Verifying..." : "Enter Editor"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowLoginModal(false)}
                    className="bg-transparent hover:bg-black/5 text-[#7B7168] py-2 px-3 rounded-lg text-xs font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }

  // 2. Logged-in floating admin toolbar docked at bottom
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2">
      {/* Toast status message if any */}
      {statusMessage && (
        <div className="bg-[#1B1108] text-[#FAF7F2] text-xs px-4 py-1.5 rounded-full shadow-lg border border-[#C27A4E]/60 animate-fade-in font-medium tracking-wide">
          {statusMessage}
        </div>
      )}

      {/* Main bar */}
      <div className="flex items-center gap-2 sm:gap-3 bg-[#1B1108]/95 text-[#FAF7F2] px-4 py-2.5 rounded-full shadow-2xl border border-[#C27A4E]/50 backdrop-blur-md">
        {/* Brand / Logo indicator */}
        <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-[#D4AF37] pr-2 border-r border-white/10">
          <span className="w-2 h-2 rounded-full bg-[#C27A4E]"></span>
          <span className="hidden md:inline">Editor</span>
          <span className="uppercase text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white/80">
            {currentLocale}
          </span>
        </div>

        {/* Edit mode toggle */}
        <button
          onClick={toggleEditMode}
          className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full transition-all ${
            isEditing
              ? "bg-[#C27A4E] text-white shadow-inner font-semibold"
              : "bg-white/10 hover:bg-white/20 text-white/80"
          }`}
          title={isEditing ? "Exit Edit Mode" : "Turn on Edit Mode"}
        >
          <span>{isEditing ? "✏️ Editing: ON" : "👁️ Preview Mode"}</span>
        </button>

        {/* Save button with change counter */}
        <button
          onClick={saveChanges}
          disabled={pendingCount === 0 || isSaving}
          className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full transition-all ${
            pendingCount > 0
              ? "bg-[#2E7D32] hover:bg-[#1B5E20] text-white shadow-md animate-pulse cursor-pointer"
              : "bg-white/5 text-white/30 cursor-not-allowed"
          }`}
          title="Save all on-page edits"
        >
          <span>{isSaving ? "Saving..." : "💾 Save"}</span>
          {pendingCount > 0 && (
            <span className="bg-white text-[#2E7D32] text-[10px] px-1.5 py-0.2 rounded-full font-bold">
              {pendingCount}
            </span>
          )}
        </button>

        {/* Discard button */}
        {pendingCount > 0 && (
          <button
            onClick={discardChanges}
            disabled={isSaving}
            className="text-xs text-white/60 hover:text-red-300 px-2 py-1 transition-colors"
            title="Discard unsaved changes"
          >
            Discard
          </button>
        )}

        {/* Exit / Logout button */}
        <button
          onClick={logout}
          className="text-xs text-white/50 hover:text-white pl-2 border-l border-white/10 transition-colors"
          title="Log out from Editor"
        >
          Exit
        </button>
      </div>
    </div>
  );
}
