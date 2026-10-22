"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Moon } from "lucide-react";
import { Locale, translations } from "@/data/translations";

interface MagicSectionProps {
  currentLocale: Locale;
}

export default function MagicSection({ currentLocale }: MagicSectionProps) {
  const t = translations[currentLocale];
  const isRTL = t.dir === "rtl";

  return (
    <section className="py-24 md:py-32 bg-[#13140E] text-[#FAF7F2] relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <Image
          src="/images/night-campfire.jpg"
          alt="Sahara night campfire"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13140E] via-transparent to-[#13140E]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Campfire Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden border border-[#C5A059]/30 shadow-2xl">
              <Image
                src="/images/night-campfire.jpg"
                alt="Women gathering around the desert campfire"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13140E]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#13140E]/75 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2 text-[#C5A059] text-xs font-semibold tracking-widest uppercase mb-1">
                  <Moon className="w-3.5 h-3.5" />
                  <span>{currentLocale === "ar" ? "سماء الصحراء" : "Noches del Sahara"}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#FAF7F2]/90 font-light italic">
                  {currentLocale === "ar"
                    ? "«تحت سماء مرصعة بالنجوم، نلتقي حول النار لنشارك حكايات القلب في هدوء مطلق»"
                    : "«Bajo un cielo infinito de estrellas, nos reunimos junto al fuego para escuchar, sentir y compartir sin máscaras»"}
                </p>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#C46849] text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-xl items-center gap-1.5 border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentLocale === "ar" ? "تجربة لا تُنسى" : "Mágico & Íntimo"}</span>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-6 text-left">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase block mb-3">
              {t.magic.subtitle}
            </span>
            <h2 className="font-cinzel text-3xl sm:text-5xl text-white font-bold leading-tight mb-8">
              {t.magic.heading}
            </h2>
            <div className="w-16 h-[2px] bg-[#C5A059] mb-8" />
            
            <p className="font-marcellus text-lg sm:text-xl text-[#FAF7F2]/85 leading-relaxed font-light mb-8">
              {t.magic.text}
            </p>

            <div className="border-l-2 border-[#C46849] pl-6 py-2 my-8 space-y-2">
              <p className="text-sm sm:text-base text-[#FAF7F2]/90 italic font-marcellus">
                {currentLocale === "ar"
                  ? "«الصحراء ليست فراغاً، بل هي امتلاء حقيقي يجعلك تسمعين صوت روحكِ من جديد»"
                  : "«El desierto no es un vacío; es una inmensidad que te devuelve a ti misma»"}
              </p>
            </div>

            <a
              href="#reserve"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#C46849] hover:bg-[#A85033] text-white text-xs font-semibold tracking-widest uppercase transition-all shadow-lg"
            >
              <span>{t.hero.ctaReserve}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
