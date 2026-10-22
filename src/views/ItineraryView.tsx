"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ItineraryHero from "@/components/itinerary/ItineraryHero";
import ItineraryStages from "@/components/itinerary/ItineraryStages";
import ItineraryStays from "@/components/itinerary/ItineraryStays";
import ItineraryInclusions from "@/components/itinerary/ItineraryInclusions";
import ItineraryCampfireCTA from "@/components/itinerary/ItineraryCampfireCTA";
import Footer from "@/components/Footer";
import { Locale } from "@/data/translations";

export default function ItineraryView({ locale = "en" }: { locale?: Locale }) {
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
  const isRtl = currentLocale === "ar";

  return (
    <div
      className="min-h-screen flex flex-col bg-[#FAF4EA] text-[#1B1108] selection:bg-[#8B4513] selection:text-white"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <Navbar
        currentLocale={currentLocale}
        onLocaleChange={(loc) => setCurrentLocale(loc)}
      />

      <main className="flex-1">
        <ItineraryHero currentLocale={currentLocale} />
        <ItineraryStages currentLocale={currentLocale} />
        <ItineraryStays currentLocale={currentLocale} />
        <ItineraryInclusions currentLocale={currentLocale} />
        <ItineraryCampfireCTA currentLocale={currentLocale} />
      </main>

      <Footer currentLocale={currentLocale} />
    </div>
  );
}
