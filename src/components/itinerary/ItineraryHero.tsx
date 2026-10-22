"use client";

import React from "react";
import { Locale } from "@/data/translations";

interface ItineraryHeroProps {
  currentLocale?: Locale;
}

const HERO_TEXT: Record<
  Locale,
  {
    eyebrow: string;
    titlePrefix: string;
    titleEm: string;
    subtitle: string;
  }
> = {
  en: {
    eyebrow: "✦ The Itinerary · 23 — 29 Sep 2026 ✦",
    titlePrefix: "Seven Stages, ",
    titleEm: "One Single Story",
    subtitle:
      "From the bustle of Marrakech to the immensity of the Sahara — and back. Every stage opens a new way of seeing. 7 days of shared wonder reserved for 12 women.",
  },
  es: {
    eyebrow: "✦ El Itinerario · 23 — 29 Sep 2026 ✦",
    titlePrefix: "Siete Etapas, ",
    titleEm: "Una Misma Historia",
    subtitle:
      "De la vibración de Marrakech a la inmensidad del Sahara — y de regreso. Cada etapa abre una mirada nueva. 7 días de asombro compartido reservados para 12 mujeres.",
  },
  fr: {
    eyebrow: "✦ L’Itinéraire · 23 — 29 sep 2026 ✦",
    titlePrefix: "Sept Étapes, ",
    titleEm: "Une Seule Histoire",
    subtitle:
      "De l’effervescence de Marrakech à l’immensité du Sahara — et retour. Chaque étape ouvre un nouveau regard. 7 jours d’émerveillement partagé réservés à 12 femmes.",
  },
  de: {
    eyebrow: "✦ Die Reiseroute · 23. — 29. Sept. 2026 ✦",
    titlePrefix: "Sieben Etappen, ",
    titleEm: "Eine Einzige Geschichte",
    subtitle:
      "Vom Pulsieren Marrakeschs bis zur Weite der Sahara – und zurück. Jede Etappe eröffnet einen neuen Blick. 7 Tage geteiltes Staunen, reserviert für 12 Frauen.",
  },
  it: {
    eyebrow: "✦ L’Itinerario · 23 — 29 set 2026 ✦",
    titlePrefix: "Sette Tappe, ",
    titleEm: "Una Sola Storia",
    subtitle:
      "Dal fermento di Marrakech all’immensità del Sahara — e ritorno. Ogni tappa apre uno sguardo nuovo. 7 giorni di meraviglia condivisa riservati a 12 donne.",
  },
  pt: {
    eyebrow: "✦ O Itinerário · 23 — 29 Set 2026 ✦",
    titlePrefix: "Sete Etapas, ",
    titleEm: "Uma Única História",
    subtitle:
      "Da vibração de Marraquexe à imensidão do Saara — e regresso. Cada etapa abre um novo olhar. 7 dias de encanto partilhado reservados para 12 mulheres.",
  },
  ar: {
    eyebrow: "✦ مسار الرحلة · 23 — 29 سبتمبر 2026 ✦",
    titlePrefix: "سبع مراحل، ",
    titleEm: "قصة واحدة",
    subtitle:
      "من نبض مراكش العتيقة إلى امتداد الصحراء الساحرة — والعودة. كل مرحلة تفتح أمامكِ أفقاً جديداً. 7 أيام من الدهشة المشتركة محجوزة لـ 12 امرأة.",
  },
  ru: {
    eyebrow: "✦ Маршрут · 23 — 29 сент. 2026 ✦",
    titlePrefix: "Семь Этапов, ",
    titleEm: "Одна Общая История",
    subtitle:
      "От энергии Марракеша до безмолвия Сахары — и обратно. Каждый этап открывает новый взгляд. 7 дней совместного вдохновения только для 12 женщин.",
  },
};

export default function ItineraryHero({ currentLocale = "en" }: ItineraryHeroProps) {
  const h = HERO_TEXT[currentLocale] || HERO_TEXT.en;

  return (
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
              {h.eyebrow}
            </p>

            <h1 className="hero__title wp-block-heading">
              {h.titlePrefix}<em>{h.titleEm}</em>
            </h1>

            <p className="hero__subtitle wp-block-paragraph">
              {h.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
