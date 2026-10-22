"use client";

import React from "react";
import Image from "next/image";
import { Bed, Sparkles, MapPin } from "lucide-react";
import { Locale, translations } from "@/data/translations";

interface StaysSectionProps {
  currentLocale: Locale;
}

export default function StaysSection({ currentLocale }: StaysSectionProps) {
  const t = translations[currentLocale];
  const isRTL = t.dir === "rtl";

  const accommodations = [
    {
      title: t.stays.riadTitle,
      desc: t.stays.riadDesc,
      location: currentLocale === "ar" ? "مراكش" : "Marrakech",
      image: "/images/marrakech-riad-peace.jpg",
      tag: currentLocale === "ar" ? "رياض بوتيك" : "Riad Boutique",
    },
    {
      title: t.stays.campTitle,
      desc: t.stays.campDesc,
      location: currentLocale === "ar" ? "عرق الشبي · مرزوقة" : "Erg Chebbi · Merzouga",
      image: "/images/Erg Chebbi/pexels-liuguangxi-16908861.jpg",
      tag: currentLocale === "ar" ? "مخيم فاخر خاص" : "Luxury Desert Camp",
    },
    {
      title: t.stays.kasbahTitle,
      desc: t.stays.kasbahDesc,
      location: currentLocale === "ar" ? "جبال الأطلس" : "Alto Atlas",
      image: "/images/Kasbahs/karim-manjra-SUo9HNE48Kg-unsplash.jpg",
      tag: currentLocale === "ar" ? "قصبة تاريخية" : "Kasbah Bereber",
    },
  ];

  return (
    <section id="stays" className="py-24 bg-[#FAF7F2] relative border-t border-[#E8E0D5]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C46849] uppercase">
            {t.stays.tag}
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl text-[#1D252C] font-bold mt-3 mb-4">
            {t.stays.heading}
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A059] mx-auto mb-5" />
          <p className="font-marcellus text-lg text-[#1D252C]/70">
            {t.stays.subtitle}
          </p>
        </div>

        {/* Accommodation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accommodations.map((stay, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E8E0D5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={stay.image}
                  alt={stay.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13140E]/80 via-transparent to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#13140E]/80 backdrop-blur-md border border-[#C5A059]/40 text-[#C5A059] text-xs font-medium tracking-wider uppercase">
                  {stay.tag}
                </div>

                {/* Location Pin */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/90 text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#C46849]" />
                  <span>{stay.location}</span>
                </div>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-[#1D252C] mb-3">
                    {stay.title}
                  </h3>
                  <p className="text-sm text-[#1D252C]/75 leading-relaxed font-light">
                    {stay.desc}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#FAF7F2] flex items-center justify-between text-xs text-[#C46849] font-medium tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4" />
                    <span>{currentLocale === "ar" ? "أقصى درجات الراحة" : "Máximo Confort"}</span>
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
