"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ItineraryHero from "@/components/itinerary/ItineraryHero";
import Footer from "@/components/Footer";
import { Locale } from "@/data/translations";

export default function ItineraryPage() {
  const [currentLocale, setCurrentLocale] = useState<Locale>("en");

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4EA] text-[#1B1108] selection:bg-[#8B4513] selection:text-white">
      {/* Exact Fixed Header */}
      <Navbar
        currentLocale={currentLocale}
        onLocaleChange={(loc) => setCurrentLocale(loc)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <ItineraryHero currentLocale={currentLocale} />
      </main>

      {/* Editorial Footer */}
      <Footer currentLocale={currentLocale} />
    </div>
  );
}
