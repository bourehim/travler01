"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Globe, Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { Locale, translations } from "@/data/translations";

interface NavbarProps {
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export default function Navbar({ currentLocale, onLocaleChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = translations[currentLocale];
  const isRTL = t.dir === "rtl";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const availableLocales: { code: Locale; name: string; flag: string }[] = [
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "ar", name: "العربية", flag: "🇲🇦" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#13140E]/90 backdrop-blur-md py-3 shadow-lg border-b border-[#C5A059]/20"
          : "bg-gradient-to-b from-[#13140E]/80 to-transparent py-5"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#C5A059]/40 overflow-hidden bg-[#FAF7F2]/10 p-1 flex items-center justify-center">
            <Image
              src="/logos/logo_1.png"
              alt="Mujeres de Arena"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel tracking-[0.2em] text-white text-base sm:text-lg font-semibold group-hover:text-[#C5A059] transition-colors">
              MUJERES DE ARENA
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase">
              {currentLocale === "ar" ? "صحراء المغرب" : "Sahara · Marruecos"}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="#hero"
            className="text-sm font-medium text-white/90 hover:text-[#C5A059] transition-colors tracking-wide"
          >
            {t.nav.home}
          </a>
          <a
            href="#stages"
            className="text-sm font-medium text-white/90 hover:text-[#C5A059] transition-colors tracking-wide"
          >
            {t.nav.itinerary}
          </a>
          <a
            href="#stays"
            className="text-sm font-medium text-white/90 hover:text-[#C5A059] transition-colors tracking-wide"
          >
            {currentLocale === "ar" ? "أماكن الإقامة" : "Alojamientos"}
          </a>
          <a
            href="#hosts"
            className="text-sm font-medium text-white/90 hover:text-[#C5A059] transition-colors tracking-wide"
          >
            {t.nav.about}
          </a>
          <a
            href="#practical"
            className="text-sm font-medium text-white/90 hover:text-[#C5A059] transition-colors tracking-wide"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Right Action: Language Switcher & CTA */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs tracking-wider transition-all"
              aria-label="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{t.flag}</span>
              <span className="uppercase font-medium">{currentLocale}</span>
              <ChevronDown className="w-3 h-3 opacity-70" />
            </button>

            {langDropdownOpen && (
              <div
                className={`absolute ${
                  isRTL ? "left-0" : "right-0"
                } mt-2 w-44 rounded-xl bg-[#1D252C] border border-[#C5A059]/30 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200`}
              >
                {availableLocales.map((loc) => (
                  <button
                    key={loc.code}
                    onClick={() => {
                      onLocaleChange(loc.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between hover:bg-white/10 transition-colors ${
                      currentLocale === loc.code
                        ? "text-[#C5A059] font-bold bg-white/5"
                        : "text-white/80"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{loc.flag}</span>
                      <span>{loc.name}</span>
                    </span>
                    {currentLocale === loc.code && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary CTA */}
          <a
            href="#reserve"
            className="px-5 py-2 rounded-full bg-[#C46849] hover:bg-[#A85033] text-white text-xs font-semibold tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            {t.nav.reserve}
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Mobile Language Button */}
          <button
            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            className="px-2.5 py-1 rounded-full border border-white/20 bg-white/10 text-white text-xs flex items-center gap-1"
          >
            <span>{t.flag}</span>
            <span className="uppercase text-[11px] font-bold">{currentLocale}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#C5A059] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#13140E] border-b border-[#C5A059]/20 px-6 py-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4 text-center">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-white/90 hover:text-[#C5A059] py-1"
            >
              {t.nav.home}
            </a>
            <a
              href="#stages"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-white/90 hover:text-[#C5A059] py-1"
            >
              {t.nav.itinerary}
            </a>
            <a
              href="#stays"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-white/90 hover:text-[#C5A059] py-1"
            >
              {currentLocale === "ar" ? "أماكن الإقامة" : "Alojamientos"}
            </a>
            <a
              href="#hosts"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-white/90 hover:text-[#C5A059] py-1"
            >
              {t.nav.about}
            </a>
            <a
              href="#practical"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-white/90 hover:text-[#C5A059] py-1"
            >
              {t.nav.contact}
            </a>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="#reserve"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-[#C46849] text-white text-xs font-semibold tracking-wider uppercase text-center"
              >
                {t.nav.reserve}
              </a>

              {/* Language selection on mobile */}
              <div className="grid grid-cols-4 gap-2 pt-2">
                {availableLocales.map((loc) => (
                  <button
                    key={loc.code}
                    onClick={() => {
                      onLocaleChange(loc.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`py-1.5 px-2 rounded-lg text-xs flex items-center justify-center gap-1 border ${
                      currentLocale === loc.code
                        ? "bg-[#C5A059]/20 border-[#C5A059] text-white font-bold"
                        : "border-white/10 text-white/70"
                    }`}
                  >
                    <span>{loc.flag}</span>
                    <span className="uppercase text-[10px]">{loc.code}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
