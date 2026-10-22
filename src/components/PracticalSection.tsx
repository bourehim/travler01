"use client";

import React from "react";
import { FileText, Coins, Luggage, Info } from "lucide-react";
import { Locale, translations } from "@/data/translations";

interface PracticalSectionProps {
  currentLocale: Locale;
}

export default function PracticalSection({ currentLocale }: PracticalSectionProps) {
  const t = translations[currentLocale];
  const isRTL = t.dir === "rtl";

  const details = [
    {
      icon: <FileText className="w-6 h-6 text-[#C46849]" />,
      title: t.practical.passportTitle,
      desc: t.practical.passportDesc,
    },
    {
      icon: <Coins className="w-6 h-6 text-[#C46849]" />,
      title: t.practical.currencyTitle,
      desc: t.practical.currencyDesc,
    },
    {
      icon: <Luggage className="w-6 h-6 text-[#C46849]" />,
      title: t.practical.luggageTitle,
      desc: t.practical.luggageDesc,
    },
  ];

  return (
    <section id="practical" className="py-24 bg-[#FAF7F2] relative border-t border-[#E8E0D5]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#C46849] text-xs font-semibold tracking-widest uppercase mb-4">
            <Info className="w-3.5 h-3.5" />
            <span>{currentLocale === "ar" ? "إرشادات هامة" : "Preparativos"}</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl text-[#1D252C] font-bold mb-4">
            {t.practical.heading}
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A059] mx-auto mb-5" />
          <p className="font-marcellus text-lg text-[#1D252C]/70">
            {t.practical.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {details.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-[#E8E0D5] shadow-sm hover:shadow-md transition-shadow flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#C5A059]/30 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="font-cinzel text-xl font-bold text-[#1D252C] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#1D252C]/75 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
