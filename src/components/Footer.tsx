"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Mail, MapPin, Heart } from "lucide-react";
import { Locale, translations } from "@/data/translations";

interface FooterProps {
  currentLocale: Locale;
}

export default function Footer({ currentLocale }: FooterProps) {
  const t = translations[currentLocale];
  const isRTL = t.dir === "rtl";

  return (
    <footer className="relative bg-[#13140E] text-white pt-20 pb-12 overflow-hidden border-t border-[#C5A059]/20" dir={isRTL ? "rtl" : "ltr"}>
      {/* Mountain Silhouette Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/images/moroccan-mountain-footer-bg.png"
          alt="Atlas mountain silhouette"
          fill
          className="object-cover object-bottom"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-[#C5A059]/40 overflow-hidden bg-white/10 p-1 flex items-center justify-center">
                <Image
                  src="/logos/logo_1.png"
                  alt="Mujeres de Arena"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-cinzel tracking-[0.2em] text-white text-lg font-bold">
                MUJERES DE ARENA
              </span>
            </div>
            <p className="font-marcellus text-sm sm:text-base text-[#FAF7F2]/75 leading-relaxed font-light max-w-sm mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C5A059] tracking-wider uppercase">
              <MapPin className="w-4 h-4 text-[#C46849]" />
              <span>Marrakech · Erg Chebbi · Alto Atlas</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-cinzel text-sm font-semibold tracking-[0.15em] text-[#C5A059] uppercase mb-6">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3 text-sm text-[#FAF7F2]/80 font-light">
              <li>
                <a href="#hero" className="hover:text-[#C5A059] transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#stages" className="hover:text-[#C5A059] transition-colors">
                  {t.nav.itinerary}
                </a>
              </li>
              <li>
                <a href="#stays" className="hover:text-[#C5A059] transition-colors">
                  {currentLocale === "ar" ? "أماكن الإقامة" : "Alojamientos"}
                </a>
              </li>
              <li>
                <a href="#hosts" className="hover:text-[#C5A059] transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#reserve" className="hover:text-[#C5A059] transition-colors">
                  {t.nav.reserve}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Concierge Contact */}
          <div className="md:col-span-4">
            <h4 className="font-cinzel text-sm font-semibold tracking-[0.15em] text-[#C5A059] uppercase mb-6">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[11px] text-[#C5A059] uppercase tracking-wider block font-medium">
                    WhatsApp Directo
                  </span>
                  <span className="text-sm font-medium group-hover:text-[#25D366] transition-colors">
                    {t.footer.whatsapp}
                  </span>
                </div>
              </a>

              <a
                href="mailto:contacto@mujeresdearena.com"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-[#C46849]/20 flex items-center justify-center text-[#C46849] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[11px] text-[#C5A059] uppercase tracking-wider block font-medium">
                    Email
                  </span>
                  <span className="text-sm font-medium group-hover:text-[#C46849] transition-colors">
                    {t.footer.email}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF7F2]/60 gap-4">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-1.5">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-[#C46849] fill-current" />
            <span>para mujeres conscientes</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
