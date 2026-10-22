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
import FAQSection from "@/components/FAQSection";
import PracticalSection from "@/components/PracticalSection";
import CampfireCTA from "@/components/CampfireCTA";
import Footer from "@/components/Footer";
import { Locale } from "@/data/translations";

export default function HomeView({ locale = "en" }: { locale?: Locale }) {
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
  const isRtl = currentLocale === "ar";

  return (
    <div
      className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1B1108] selection:bg-[#8B4513] selection:text-white"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <Navbar
        currentLocale={currentLocale}
        onLocaleChange={(loc) => setCurrentLocale(loc)}
      />

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
        <FAQSection currentLocale={currentLocale} />
        <PracticalSection currentLocale={currentLocale} />
        <CampfireCTA currentLocale={currentLocale} />
      </main>

      <Footer currentLocale={currentLocale} />
    </div>
  );
}
