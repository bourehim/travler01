"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Heart, Sparkles } from "lucide-react";
import { Locale, translations } from "@/data/translations";

interface HostsSectionProps {
  currentLocale: Locale;
}

export default function HostsSection({ currentLocale }: HostsSectionProps) {
  const t = translations[currentLocale];
  const isRTL = t.dir === "rtl";

  return (
    <section id="hosts" className="py-24 bg-[#FAF7F2] relative border-t border-[#E8E0D5]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[440px] sm:h-[500px] w-full rounded-3xl overflow-hidden border border-[#E8E0D5] shadow-xl">
              <Image
                src="/images/hosts-vanessa-ana.jpg"
                alt="Vanessa & Ana - Fundadoras de Mujeres de Arena"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13140E]/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E8E0D5] shadow-lg text-center">
                <span className="font-cinzel text-lg font-bold text-[#1D252C] block">
                  Vanessa & Ana
                </span>
                <span className="text-xs text-[#C46849] font-medium tracking-wider uppercase">
                  {t.hosts.role}
                </span>
              </div>
            </div>

            {/* Decorative Corner Badge */}
            <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-[#C5A059] text-white flex items-center justify-center shadow-lg border-2 border-white">
              <Heart className="w-5 h-5 fill-current" />
            </div>
          </div>

          {/* Bio & Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#C46849]" />
              <span className="text-xs tracking-[0.2em] uppercase text-[#A85033] font-semibold">
                {t.hosts.tag}
              </span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-5xl text-[#1D252C] font-bold mb-4">
              {t.hosts.heading}
            </h2>
            <div className="w-16 h-[2px] bg-[#C5A059] mb-8" />

            <p className="font-marcellus text-lg sm:text-xl text-[#1D252C]/85 leading-relaxed font-light mb-8">
              {t.hosts.bio}
            </p>

            {/* Quote Block */}
            <blockquote className="border-l-2 border-[#C46849] pl-6 py-2 mb-10 bg-white/60 rounded-r-xl">
              <p className="font-cinzel text-base sm:text-lg text-[#1D252C] italic">
                {t.hosts.quote}
              </p>
            </blockquote>

            {/* Direct Contact Button */}
            <a
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1D252C] hover:bg-[#13140E] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <span>{t.hosts.cta}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
