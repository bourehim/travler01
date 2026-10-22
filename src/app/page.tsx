"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import StagesSection from "@/components/StagesSection";
import MagicSection from "@/components/MagicSection";
import StaysSection from "@/components/StaysSection";
import HostsSection from "@/components/HostsSection";
import ReserveSection from "@/components/ReserveSection";
import PracticalSection from "@/components/PracticalSection";
import Footer from "@/components/Footer";
import { Locale } from "@/data/translations";

export default function Home() {
  const [currentLocale, setCurrentLocale] = useState<Locale>("es");

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1D252C] selection:bg-[#C46849] selection:text-white">
      {/* Sticky Glassmorphic Navigation */}
      <Navbar
        currentLocale={currentLocale}
        onLocaleChange={(loc) => setCurrentLocale(loc)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero currentLocale={currentLocale} />
        <Manifesto currentLocale={currentLocale} />
        <StagesSection currentLocale={currentLocale} />
        <MagicSection currentLocale={currentLocale} />
        <StaysSection currentLocale={currentLocale} />
        <HostsSection currentLocale={currentLocale} />
        <ReserveSection currentLocale={currentLocale} />
        <PracticalSection currentLocale={currentLocale} />
      </main>

      {/* Editorial 3-Column Footer */}
      <Footer currentLocale={currentLocale} />
    </div>
  );
}
