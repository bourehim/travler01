"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Locale } from "@/data/translations";

interface NavbarProps {
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

const languages: { code: Locale; name: string }[] = [
  { code: "es", name: "Español" },
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "it", name: "Italiano" },
  { code: "pt", name: "Português" },
  { code: "ar", name: "العربية" },
  { code: "ru", name: "Русский" },
];

export default function Navbar({ currentLocale = "en", onLocaleChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentLangObj = languages.find((l) => l.code === currentLocale) || languages[1];

  const navLinks = [
    { label: "THE JOURNEY", href: "#about" },
    { label: "ITINERARY", href: "#stages" },
    { label: "RESERVE YOUR SPOT", href: "#reserve" },
    { label: "ABOUT US", href: "#hosts" },
    { label: "CONTACT US", href: "#practical" },
  ];

  return (
    <>
      <header id="masthead" className={isScrolled ? "is-scrolled" : ""}>
        <div className="site-main-header-inner-wrap max-w-[1290px] mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo (exact logo_3.png) */}
          <div className="site-branding">
            <a href="#hero" className="brand inline-flex items-center" rel="home">
              <Image
                src="/logos/logo_3.png"
                alt="mujeresdearena"
                width={150}
                height={48}
                className="custom-logo"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation & Actions */}
          <div className="flex items-center gap-6 lg:gap-8">
            {/* Primary Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Primary">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`main-nav-link ${activeLink === link.href ? "is-active" : ""}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Right Actions: BOOK Button + Language Switcher */}
            <div className="hidden sm:flex items-center gap-4">
              {/* Exact BOOK CTA Button */}
              <a href="#reserve" className="header-btn-book">
                BOOK
              </a>

              {/* Exact MDA Language Switcher Dropdown */}
              <div
                className={`mda-language-switcher-wrap ${langOpen ? "is-open" : ""}`}
                onMouseEnter={() => setLangOpen(true)}
                onMouseLeave={() => setLangOpen(false)}
              >
                <button
                  type="button"
                  className="mda-lang-trigger"
                  onClick={() => setLangOpen(!langOpen)}
                  aria-haspopup="true"
                  aria-expanded={langOpen}
                  aria-label="Select Language"
                >
                  <span className="mda-lang-current-label">{currentLangObj.name}</span>
                  <svg
                    className="mda-lang-arrow"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="mda-lang-dropdown" role="menu">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        onLocaleChange(lang.code);
                        setLangOpen(false);
                      }}
                      className={`mda-lang-item ${currentLocale === lang.code ? "is-current" : ""}`}
                      role="menuitem"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Header Right Items */}
            <div className="flex lg:hidden items-center gap-3">
              <a href="#reserve" className="header-btn-book !px-4 !py-1.5 !text-[11px] sm:hidden">
                BOOK
              </a>
              <button
                type="button"
                onClick={() => setMobileDrawerOpen(true)}
                className={`p-2 transition-colors ${isScrolled ? "text-[#1B1108]" : "text-[#FAF4EA]"}`}
                aria-label="Open mobile menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Popup Drawer (Exact Kadence Style) */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-[10000] flex justify-end">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
          />

          {/* Side Drawer Panel */}
          <div className="relative w-80 max-w-[85vw] h-full bg-[#1B1108] border-l border-[#D4A85F]/30 p-6 flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-right duration-300">
            <div>
              {/* Drawer Header with Close Button */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <Image
                  src="/logos/logo_3.png"
                  alt="mujeresdearena"
                  width={120}
                  height={38}
                  className="max-h-[38px] w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="text-[#FAF4EA] hover:text-[#D4A85F] p-2 text-xl"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col gap-4 py-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.href);
                      setMobileDrawerOpen(false);
                    }}
                    className="font-inter text-sm font-medium tracking-[0.18em] uppercase text-[#FAF4EA] hover:text-[#D4A85F] transition-colors py-1.5"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <a
                href="#reserve"
                onClick={() => setMobileDrawerOpen(false)}
                className="header-btn-book w-full text-center"
              >
                BOOK
              </a>

              {/* Mobile Language Selector Grid */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLocaleChange(lang.code);
                      setMobileDrawerOpen(false);
                    }}
                    className={`px-3 py-2 rounded-lg text-xs font-inter text-left transition-colors border ${
                      currentLocale === lang.code
                        ? "bg-[#D4A85F]/20 border-[#D4A85F] text-[#D4A85F] font-semibold"
                        : "border-white/10 text-white/70 hover:bg-white/5"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
