"use client";

import React from "react";
import { Sparkles, Heart, Compass, Shield } from "lucide-react";
import { Locale, translations } from "@/data/translations";

interface ManifestoProps {
  currentLocale: Locale;
}

export default function Manifesto({ currentLocale }: ManifestoProps) {
  const t = translations[currentLocale];
  const isRTL = t.dir === "rtl";

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] text-[#1D252C] relative" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Stadium Pill Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#C46849]" />
          <span className="text-xs tracking-[0.2em] uppercase text-[#A85033] font-semibold">
            {t.manifesto.tag}
          </span>
        </div>

        {/* Central Manifesto Headline */}
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-[#1D252C] font-normal leading-relaxed mb-8 max-w-4xl mx-auto">
          {t.manifesto.heading}
        </h2>

        <div className="w-20 h-[1.5px] bg-[#C5A059] mx-auto mb-10 opacity-70" />

        {/* Editorial Body Text */}
        <div className="max-w-3xl mx-auto space-y-6 text-base sm:text-lg text-[#1D252C]/80 font-light leading-relaxed font-marcellus">
          <p>{t.manifesto.p1}</p>
          <p className="text-[#C46849] font-medium text-lg sm:text-xl">
            {t.manifesto.p2}
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
          <div className="bg-white/80 p-8 rounded-2xl border border-[#E8E0D5] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C5A059]/40 flex items-center justify-center text-[#C46849] mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-cinzel text-lg font-semibold text-[#1D252C] mb-2">
              {currentLocale === "ar" ? "حميمية وأمان" : "Grupo Reducido"}
            </h3>
            <p className="text-sm text-[#1D252C]/70 leading-relaxed">
              {currentLocale === "ar"
                ? "١٢ امرأة كحد أقصى لخلق مساحة دافئة ومترابطة بعيداً عن السياحة الجماعية."
                : "Máximo 12 mujeres para asegurar cercanía, confidencialidad y atención personalizada en cada momento."}
            </p>
          </div>

          <div className="bg-white/80 p-8 rounded-2xl border border-[#E8E0D5] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C5A059]/40 flex items-center justify-center text-[#C46849] mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-cinzel text-lg font-semibold text-[#1D252C] mb-2">
              {currentLocale === "ar" ? "رحلة إنسانية واعية" : "Travesía Consciente"}
            </h3>
            <p className="text-sm text-[#1D252C]/70 leading-relaxed">
              {currentLocale === "ar"
                ? "إيقاع بطيء ومريح يسمح بالاستمتاع بكل لحظة والتأمل في سحر الصحراء."
                : "Un ritmo pausado, sin prisas ni listas de espera, diseñado para conectar con la belleza real del desierto."}
            </p>
          </div>

          <div className="bg-white/80 p-8 rounded-2xl border border-[#E8E0D5] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C5A059]/40 flex items-center justify-center text-[#C46849] mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-cinzel text-lg font-semibold text-[#1D252C] mb-2">
              {currentLocale === "ar" ? "راحة واعتناء كامل" : "Cuidado y Exclusividad"}
            </h3>
            <p className="text-sm text-[#1D252C]/70 leading-relaxed">
              {currentLocale === "ar"
                ? "إقامات مختارة بعناية فائقة وسيارات دفع رباعي حديثة ترافقكِ طوال المسار."
                : "Vehículos 4x4 privados, riads boutique seleccionados con mimo y campamento de jaimas de lujo."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
