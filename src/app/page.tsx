"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import StagesSection from "@/components/StagesSection";
import SaharaSection from "@/components/SaharaSection";
import AdventuresSliderSection from "@/components/AdventuresSliderSection";
import NightSection from "@/components/NightSection";
import StaysSection from "@/components/StaysSection";
import HostsSection from "@/components/HostsSection";
import ReserveSection from "@/components/ReserveSection";
import PracticalSection from "@/components/PracticalSection";
import Footer from "@/components/Footer";
import { Locale } from "@/data/translations";

export default function Home() {
  const [currentLocale, setCurrentLocale] = useState<Locale>("en");

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1B1108] selection:bg-[#8B4513] selection:text-white">
      {/* Exact Fixed Header */}
      <Navbar
        currentLocale={currentLocale}
        onLocaleChange={(loc) => setCurrentLocale(loc)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero currentLocale={currentLocale} />
        <Manifesto currentLocale={currentLocale} />
        <StagesSection currentLocale={currentLocale} />
        <SaharaSection currentLocale={currentLocale} />
        <AdventuresSliderSection currentLocale={currentLocale} />
        <NightSection currentLocale={currentLocale} />
        <StaysSection currentLocale={currentLocale} />
        <HostsSection currentLocale={currentLocale} />
        <ReserveSection currentLocale={currentLocale} />
        <PracticalSection currentLocale={currentLocale} />
      </main>

      {/* Editorial Footer */}
      <Footer currentLocale={currentLocale} />
    </div>
  );
}
