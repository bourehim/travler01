"use client";

import React from "react";
import Image from "next/image";
import { Locale, translations } from "@/data/translations";

interface StagesSectionProps {
  currentLocale: Locale;
}

const stageImages = [
  "/images/marrakech-riad-peace.jpg",
  "/images/Tizi n Tichka/pexels-francesco-ungaro-1600135.jpg",
  "/images/Kasbahs/sergey-pesterev-i-P1lmY_e1w-unsplash.jpg",
  "/images/merzouga-camel-sunset.jpg",
  "/images/night-campfire.jpg",
  "/images/Kasbahs/karim-manjra-SUo9HNE48Kg-unsplash.jpg",
  "/images/polina-kocheva-u1vmhZLx9Ik-unsplash.jpg",
];

export default function StagesSection({ currentLocale }: StagesSectionProps) {
  const t = translations[currentLocale];
  const isRTL = t.dir === "rtl";

  return (
    <section id="stages" className="py-24 bg-[#FAF7F2] relative border-t border-[#E8E0D5]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C46849] uppercase">
            {currentLocale === "ar" ? "مسار الرحلة" : "El Itinerario"}
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl text-[#1D252C] font-bold mt-3 mb-4">
            {t.stages.heading}
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A059] mx-auto mb-5" />
          <p className="font-marcellus text-lg text-[#1D252C]/70">
            {t.stages.subtitle}
          </p>
        </div>

        {/* 7 Stages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.stages.items.map((item: any, idx: number) => {
            const img = stageImages[idx % stageImages.length];
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E8E0D5] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col"
              >
                {/* Stage Photo */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13140E]/80 via-transparent to-transparent" />
                  
                  {/* Stage Number Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#13140E]/80 backdrop-blur-md border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] font-cinzel text-sm font-bold shadow-md">
                    {item.day}
                  </div>

                  {/* Stage Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-cinzel text-xl text-white font-bold tracking-wide drop-shadow">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Stage Description */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-[#1D252C]/80 leading-relaxed font-light">
                    {item.desc}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#FAF7F2] flex items-center justify-between text-xs text-[#C46849] font-medium tracking-wider uppercase">
                    <span>{currentLocale === "ar" ? "المرحلة" : "Etapa"} {item.day}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
