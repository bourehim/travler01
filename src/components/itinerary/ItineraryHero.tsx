"use client";

import React from "react";
import { Locale } from "@/data/translations";

interface ItineraryHeroProps {
  currentLocale?: Locale;
}

const MARQUEE_ITEMS: Record<
  Locale,
  {
    date: string;
    spots: string;
    days: string;
    route: string;
    edition: string;
    guide: string;
  }
> = {
  en: {
    date: "23 — 29 Sep 2026",
    spots: "12 spots",
    days: "7 days of travel",
    route: "Marrakech → Sahara",
    edition: "First edition",
    guide: "Spanish-speaking guide",
  },
  es: {
    date: "23 — 29 Sep 2026",
    spots: "12 plazas",
    days: "7 días de viaje",
    route: "Marrakech → Sahara",
    edition: "Primera edición",
    guide: "Guía en español",
  },
  fr: {
    date: "23 — 29 Sep 2026",
    spots: "12 places",
    days: "7 jours de voyage",
    route: "Marrakech → Sahara",
    edition: "Première édition",
    guide: "Guide francophone",
  },
  de: {
    date: "23 — 29 Sep 2026",
    spots: "12 Plätze",
    days: "7 Tage Reise",
    route: "Marrakesch → Sahara",
    edition: "Erste Edition",
    guide: "Spanisch-sprachige Reiseleitung",
  },
  it: {
    date: "23 — 29 Sep 2026",
    spots: "12 posti",
    days: "7 giorni di viaggio",
    route: "Marrakech → Sahara",
    edition: "Prima edizione",
    guide: "Guida parlante spagnolo",
  },
  pt: {
    date: "23 — 29 Set 2026",
    spots: "12 vagas",
    days: "7 dias de viagem",
    route: "Marrakech → Sahara",
    edition: "Primeira edição",
    guide: "Guia em espanhol",
  },
  ar: {
    date: "23 — 29 سبتمبر 2026",
    spots: "12 مقعداً فقط",
    days: "7 أيام من السفر الساحر",
    route: "مراكش ← الصحراء",
    edition: "النسخة الأولى",
    guide: "مرشدة ناطقة بالإسبانية",
  },
  ru: {
    date: "23 — 29 Сен 2026",
    spots: "12 мест",
    days: "7 дней путешествия",
    route: "Марракеш → Сахара",
    edition: "Первый выпуск",
    guide: "Испаноязычный гид",
  },
};

export default function ItineraryHero({ currentLocale = "en" }: ItineraryHeroProps) {
  const m = MARQUEE_ITEMS[currentLocale] || MARQUEE_ITEMS.en;

  return (
    <>
      <div className="wp-block-cover alignfull mda-subpage-hero mda-page-itinerary-stays has-parallax">
        {/* Fixed Parallax Background Image */}
        <div
          className="wp-block-cover__image-background wp-image-6293 has-parallax"
          style={{
            backgroundImage: "url(/images/pexels-liuguangxi-16908861.jpg)",
            backgroundPosition: "50% 50%",
          }}
        />
        {/* Contrast Overlay Veil */}
        <span
          aria-hidden="true"
          className="wp-block-cover__background has-background-dim-0 has-background-dim has-contrast-background-color"
        />

        {/* Hero Content */}
        <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
          <div className="wp-block-group hero__inner">
            <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
              <p className="eyebrow eyebrow--gold wp-block-paragraph">
                ✦ The Itinerary · 23 — 29 Sep 2026 ✦
              </p>

              <h1 className="hero__title wp-block-heading">
                Seven Stages, <em>One Single Story</em>
              </h1>

              <p className="hero__subtitle wp-block-paragraph">
                From the bustle of Marrakech to the immensity of the Sahara — and
                back. Every stage opens a new way of seeing. 7 days of shared
                wonder reserved for 12 women.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exact Marquee Section from Home Page */}
      <div className="mda-marquee-section" dir={currentLocale === "ar" ? "rtl" : "ltr"}>
        <p className="mda-marquee-text">
          <span>{m.date}</span>
          <span className="star">✦</span>
          <span>{m.spots}</span>
          <span className="star">✦</span>
          <span>{m.days}</span>
          <span className="star">✦</span>
          <span>{m.route}</span>
          <span className="star">✦</span>
          <span>{m.edition}</span>
          <span className="star">✦</span>
          <span>{m.guide}</span>
        </p>
      </div>
    </>
  );
}
