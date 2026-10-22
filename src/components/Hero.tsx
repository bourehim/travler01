"use client";

import React from "react";
import Image from "next/image";
import { Locale } from "@/data/translations";

interface HeroProps {
  currentLocale?: Locale;
}

const HERO_CONTENT: Record<
  Locale,
  {
    eyebrow: string;
    taglineLine1: string;
    taglineLine2: string;
    btnReserve: string;
    btnDiscover: string;
    marquee: string[];
  }
> = {
  en: {
    eyebrow: "First edition · 12 spots",
    taglineLine1:
      "A transformative journey through Morocco — seven days among vibrant cities, mountains and ancestral kasbahs",
    taglineLine2: "and the immensity of the Sahara.",
    btnReserve: "Reserve My Spot",
    btnDiscover: "Discover the Journey",
    marquee: [
      "23 — 29 Sep 2026",
      "12 spots",
      "7 days of travel",
      "Marrakech → Sahara",
      "First edition",
      "Spanish-speaking guide",
    ],
  },
  es: {
    eyebrow: "Primera edición · 12 plazas",
    taglineLine1:
      "Una travesía transformadora por Marruecos — siete días entre ciudades vibrantes, montañas y kasbahs ancestrales",
    taglineLine2: "y la inmensidad del Sahara.",
    btnReserve: "Reservar mi plaza",
    btnDiscover: "Descubrir la travesía",
    marquee: [
      "23 — 29 Sep 2026",
      "12 plazas",
      "7 días de travesía",
      "Marrakech → Sahara",
      "Primera edición",
      "Guía en español",
    ],
  },
  fr: {
    eyebrow: "Première édition · 12 places",
    taglineLine1:
      "Un voyage transformateur au Maroc — sept jours entre villes vibrantes, montagnes et kasbahs ancestrales",
    taglineLine2: "et l'immensité du Sahara.",
    btnReserve: "Réserver ma place",
    btnDiscover: "Découvrir le voyage",
    marquee: [
      "23 — 29 sep 2026",
      "12 places",
      "7 jours de voyage",
      "Marrakech → Sahara",
      "Première édition",
      "Guide hispanophone",
    ],
  },
  de: {
    eyebrow: "Erste Ausgabe · 12 Plätze",
    taglineLine1:
      "Eine transformative Reise durch Marokko — sieben Tage zwischen lebendigen Städten, Bergen und alten Kasbahs",
    taglineLine2: "und der Weite der Sahara.",
    btnReserve: "Meinen Platz reservieren",
    btnDiscover: "Die Reise entdecken",
    marquee: [
      "23. — 29. Sept. 2026",
      "12 Plätze",
      "7 Tage unterwegs",
      "Marrakesch → Sahara",
      "Erste Ausgabe",
      "Spanischsprachige Reiseleitung",
    ],
  },
  it: {
    eyebrow: "Prima edizione · 12 posti",
    taglineLine1:
      "Un viaggio che trasforma in Marocco — sette giorni tra città vibranti, montagne e kasbah ancestrali",
    taglineLine2: "e l'immensità del Sahara.",
    btnReserve: "Prenota il mio posto",
    btnDiscover: "Scopri il viaggio",
    marquee: [
      "23 — 29 set 2026",
      "12 posti",
      "7 giorni di viaggio",
      "Marrakech → Sahara",
      "Prima edizione",
      "Guida di lingua spagnola",
    ],
  },
  pt: {
    eyebrow: "Primeira edição · 12 lugares",
    taglineLine1:
      "Uma viagem transformadora por Marrocos — sete dias entre cidades vibrantes, montanhas e kasbahs ancestrais",
    taglineLine2: "e a imensidão do Sara.",
    btnReserve: "Reservar meu lugar",
    btnDiscover: "Descobrir a travessia",
    marquee: [
      "23 — 29 set 2026",
      "12 lugares",
      "7 dias de viagem",
      "Marraquexe → Sara",
      "Primeira edição",
      "Guia de língua espanhola",
    ],
  },
  ar: {
    eyebrow: "الطبعة الأولى · 12 مقعدًا",
    taglineLine1:
      "رحلة تحوّل عبر المغرب — سبعة أيام بين مدن نابضة بالحياة وجبال وقصبات عريقة",
    taglineLine2: "وامتداد الصحراء اللامتناهي.",
    btnReserve: "احجزي مقعدك",
    btnDiscover: "اكتشفي الرحلة",
    marquee: [
      "23 — 29 سبتمبر 2026",
      "12 مقعدًا",
      "7 أيام من الرحلة",
      "مراكش ← الصحراء",
      "الطبعة الأولى",
      "مرشد يتحدث الإسبانية",
    ],
  },
  ru: {
    eyebrow: "Первый выпуск · 12 мест",
    taglineLine1:
      "Преображающее путешествие по Марокко — семь дней среди живых городов, гор и древних касб",
    taglineLine2: "и безграничной Сахары.",
    btnReserve: "Забронировать место",
    btnDiscover: "Узнать о путешествии",
    marquee: [
      "23 — 29 сент. 2026",
      "12 мест",
      "7 дней в пути",
      "Марракеш → Сахара",
      "Первый выпуск",
      "Гид, говорящий по-испански",
    ],
  },
};

export default function Hero({ currentLocale = "en" }: HeroProps) {
  const c = HERO_CONTENT[currentLocale] || HERO_CONTENT.en;
  const isRtl = currentLocale === "ar";

  return (
    <>
      <section
        id="hero"
        className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-36 md:pb-44 text-center"
        dir={isRtl ? "rtl" : "ltr"}
      >
        {/* Parallax / Fixed Desert Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-3.jpg"
            alt="Sahara desert dunes Erg Chebbi Morocco"
            fill
            priority
            className="object-cover object-center scale-105"
          />
          {/* Exact Dark Veils from WordPress */}
          <div
            className="absolute inset-0 z-1"
            style={{
              background:
                "linear-gradient(180deg, rgba(27, 17, 8, 0.45) 0%, transparent 32%, rgba(27, 17, 8, 0.78) 100%), linear-gradient(90deg, rgba(27, 17, 8, 0.58) 0%, transparent 65%)",
            }}
          />
        </div>

        {/* Hero Inner Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center">
          {/* Eyebrow */}
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-rule" />
            {c.eyebrow}
          </div>

          {/* Exact Title */}
          <h1 className="hero__title" dir="ltr">
            <span className="inline-block tracking-[0.05em] font-normal uppercase">
              MUJERES
            </span>
            <span className="hero__title-line--soft">
              de arena
            </span>
          </h1>

          {/* Exact Tagline */}
          <p className="hero__tagline">
            {c.taglineLine1}
            <br className="hidden sm:inline" />{" "}
            {c.taglineLine2}
          </p>

          {/* Exact Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <a href="#reserve" className="mda-btn-primary w-full sm:w-auto">
              <span>{c.btnReserve}</span>
              <span className="btn__arrow">{isRtl ? "←" : "→"}</span>
            </a>

            <a href="#about" className="mda-btn-ghost w-full sm:w-auto">
              {c.btnDiscover}
            </a>
          </div>
        </div>

        {/* Exact Desert Dunes Bottom Shape Divider */}
        <div className="hero-dune-divider" />
      </section>

      {/* Exact Marquee Section */}
      <div className="mda-marquee-section" dir={isRtl ? "rtl" : "ltr"}>
        <p className="mda-marquee-text">
          {c.marquee.map((item, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <span className="star">✦</span>}
              <span>{item}</span>
            </React.Fragment>
          ))}
          <span className="star">✦</span>
          {c.marquee.map((item, idx) => (
            <React.Fragment key={`rep-${idx}`}>
              {idx > 0 && <span className="star">✦</span>}
              <span>{item}</span>
            </React.Fragment>
          ))}
        </p>
      </div>
    </>
  );
}
