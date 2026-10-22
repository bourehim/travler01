"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { Locale, translations } from "@/data/translations";

interface HeroProps {
  currentLocale: Locale;
}

export default function Hero({ currentLocale }: HeroProps) {
  const t = translations[currentLocale];
  const isRTL = t.dir === "rtl";

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-36 md:pb-44"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Desert Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-3.jpg"
          alt="Sahara desert dunes Erg Chebbi Morocco"
          fill
          priority
          className="object-cover object-center scale-105 animate-in fade-in zoom-in-105 duration-1000"
        />
        {/* Luxury Dark Veil Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#13140E]/70 via-[#13140E]/45 to-[#13140E]/90 z-1" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#13140E]/75 via-transparent to-[#13140E]/75 z-1" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Intimate Group Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/50 bg-[#1D252C]/60 backdrop-blur-md mb-6 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#E8E0D5] font-medium">
            {t.hero.tag}
          </span>
        </div>

        {/* Primary Serif Heading */}
        <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.08em] sm:tracking-[0.15em] text-white font-bold leading-tight uppercase drop-shadow-md mb-6">
          {t.hero.title}
        </h1>

        {/* Golden Divider Line */}
        <div className="w-24 sm:w-32 h-[1.5px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mb-6" />

        {/* Emotional Subtitle */}
        <p className="font-marcellus text-lg sm:text-2xl md:text-3xl text-[#FAF7F2]/90 max-w-3xl leading-relaxed font-light mb-10 drop-shadow">
          {t.hero.subtitle}
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Primary CTA */}
          <a
            href="#reserve"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-[#C46849] hover:bg-[#A85033] text-white text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
          >
            <span>{t.hero.ctaReserve}</span>
            <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
          </a>

          {/* Secondary CTA */}
          <a
            href="#stages"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full border border-[#C5A059]/70 hover:border-[#C5A059] bg-[#1D252C]/40 hover:bg-[#1D252C]/80 text-[#FAF7F2] text-xs sm:text-sm font-medium tracking-[0.15em] uppercase backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#C5A059]" />
            <span>{t.hero.ctaItinerary}</span>
          </a>
        </div>

        {/* Manifesto Mini Badge */}
        <div className="mt-12 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs sm:text-sm tracking-widest text-[#E8E0D5]/80">
          <span className="w-2 h-2 rounded-full bg-[#C46849] animate-pulse" />
          <span>{t.hero.badge}</span>
        </div>
      </div>

      {/* Bottom Desert Dunes Organic Shape Divider */}
      <div className="hero-dune-divider" />
    </section>
  );
}
