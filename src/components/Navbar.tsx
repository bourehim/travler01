"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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

const NAV_LABELS: Record<Locale, {
  journey: string;
  itinerary: string;
  reserve: string;
  about: string;
  contact: string;
  book: string;
}> = {
  en: {
    journey: "THE JOURNEY",
    itinerary: "ITINERARY",
    reserve: "RESERVE YOUR SPOT",
    about: "ABOUT US",
    contact: "CONTACT US",
    book: "BOOK"
  },
  es: {
    journey: "LA TRAVESÍA",
    itinerary: "ITINERARIO",
    reserve: "RESERVA TU PLAZA",
    about: "SOBRE NOSOTRAS",
    contact: "CONTACTO",
    book: "RESERVAR"
  },
  fr: {
    journey: "LE VOYAGE",
    itinerary: "ITINÉRAIRE",
    reserve: "RÉSERVEZ VOTRE PLACE",
    about: "À PROPOS DE NOUS",
    contact: "CONTACTEZ-NOUS",
    book: "RÉSERVER"
  },
  de: {
    journey: "DIE REISE",
    itinerary: "REISEROUTE",
    reserve: "PLATZ RESERVIEREN",
    about: "ÜBER UNS",
    contact: "KONTAKT",
    book: "BUCHEN"
  },
  it: {
    journey: "IL VIAGGIO",
    itinerary: "ITINERARIO",
    reserve: "PRENOTA IL TUO POSTO",
    about: "CHI SIAMO",
    contact: "CONTATTI",
    book: "PRENOTA"
  },
  pt: {
    journey: "A VIAGEM",
    itinerary: "ITINERÁRIO",
    reserve: "RESERVA O TEU LUGAR",
    about: "SOBRE NÓS",
    contact: "CONTACTO",
    book: "RESERVAR"
  },
  ar: {
    journey: "الرحلة",
    itinerary: "مسار الرحلة",
    reserve: "احجزي مقعدكِ",
    about: "من نحن",
    contact: "تواصل معنا",
    book: "احجزي"
  },
  ru: {
    journey: "ПУТЕШЕСТВИЕ",
    itinerary: "МАРШРУТ",
    reserve: "ЗАБРОНИРОВАТЬ МЕСТО",
    about: "О НАС",
    contact: "КОНТАКТЫ",
    book: "БРОНЬ"
  }
};

export default function Navbar({ currentLocale = "en", onLocaleChange }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentLangObj = languages.find((l) => l.code === currentLocale) || languages[1];
  const labels = NAV_LABELS[currentLocale] || NAV_LABELS.en;

  const getLocalizedHref = (path: string) => {
    if (currentLocale === "en") {
      return path;
    }
    if (path.startsWith("/#")) {
      return `/${currentLocale}${path}`;
    }
    return `/${currentLocale}${path === "/" ? "" : path}`;
  };

  const navLinks = [
    { label: labels.journey, href: getLocalizedHref("/#about"), raw: "/#about" },
    { label: labels.itinerary, href: getLocalizedHref("/itinerary"), raw: "/itinerary" },
    { label: labels.reserve, href: getLocalizedHref("/reserve-spot"), raw: "/reserve-spot" },
    { label: labels.about, href: getLocalizedHref("/about"), raw: "/about" },
    { label: labels.contact, href: getLocalizedHref("/contact"), raw: "/contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isHome = pathname === "/" || pathname === `/${currentLocale}`;
    if (href.includes("#") && isHome) {
      e.preventDefault();
      const targetId = href.split("#")[1];
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${targetId}`);
      }
    }
    setMobileDrawerOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isHome = pathname === "/" || pathname === `/${currentLocale}`;
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isLinkActive = (raw: string) => {
    const cleanPath = pathname.replace(/^\/(en|es|fr|de|it|pt|ar|ru)(\/|$)/, "/");
    if (raw === "/itinerary" && cleanPath.startsWith("/itinerary")) return true;
    if (raw === "/reserve-spot" && cleanPath.startsWith("/reserve")) return true;
    if (raw === "/about" && cleanPath.startsWith("/about")) return true;
    if (raw === "/contact" && cleanPath.startsWith("/contact")) return true;
    if (raw === "/#about" && cleanPath === "/") return true;
    return false;
  };

  const handleLanguageSwitch = (targetLocale: Locale) => {
    onLocaleChange(targetLocale);
    setLangOpen(false);
    setMobileDrawerOpen(false);

    let clean = pathname.replace(/^\/(en|es|fr|de|it|pt|ar|ru)(\/|$)/, "/");
    if (!clean.startsWith("/")) clean = "/" + clean;
    const targetUrl = targetLocale === "en" ? clean : (clean === "/" ? `/${targetLocale}` : `/${targetLocale}${clean}`);
    router.push(targetUrl);
  };

  return (
    <>
      <header id="masthead" className={isScrolled ? "is-scrolled" : ""}>
        <div className="site-main-header-inner-wrap max-w-[1290px] mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo (exact logo_3.png) */}
          <div className="site-branding">
            <Link
              href={currentLocale === "en" ? "/" : `/${currentLocale}`}
              onClick={handleLogoClick}
              className="brand inline-flex items-center"
              rel="home"
            >
              <Image
                src="/logos/logo_3.png"
                alt="mujeresdearena"
                width={150}
                height={48}
                className="custom-logo"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation & Actions */}
          <div className="flex items-center gap-6 lg:gap-8">
            {/* Primary Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Primary">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`main-nav-link ${isLinkActive(link.raw) ? "is-active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Right Actions: BOOK Button + Language Switcher */}
            <div className="hidden sm:flex items-center gap-4">
              {/* Exact BOOK CTA Button */}
              <Link href={getLocalizedHref("/reserve-spot")} className="header-btn-book">
                {labels.book}
              </Link>

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
                      onClick={() => handleLanguageSwitch(lang.code)}
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
              <Link href={getLocalizedHref("/reserve-spot")} className="header-btn-book !px-4 !py-1.5 !text-[11px] sm:hidden">
                {labels.book}
              </Link>
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

          {/* Drawer content */}
          <div className="relative z-10 w-full max-w-[320px] bg-[#1B1108] text-[#FAF4EA] h-full p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <Link
                  href={currentLocale === "en" ? "/" : `/${currentLocale}`}
                  onClick={() => setMobileDrawerOpen(false)}
                  className="brand inline-flex items-center"
                >
                  <Image
                    src="/logos/logo_3.png"
                    alt="mujeresdearena"
                    width={130}
                    height={40}
                    className="brightness-0 invert"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-2 text-white/70 hover:text-white"
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-4 pt-6" role="navigation" aria-label="Mobile">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-inter text-sm font-medium tracking-[0.18em] uppercase transition-colors py-1.5 ${
                      isLinkActive(link.raw)
                        ? "text-[#D4A85F] font-semibold"
                        : "text-[#FAF4EA] hover:text-[#D4A85F]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <Link
                href={getLocalizedHref("/reserve-spot")}
                onClick={() => setMobileDrawerOpen(false)}
                className="header-btn-book w-full text-center"
              >
                {labels.book}
              </Link>

              {/* Mobile Language Selector Grid */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSwitch(lang.code)}
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
