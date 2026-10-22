"use client";

import React, { useState, useEffect, useRef } from "react";
import { Locale } from "@/data/translations";

interface SaharaSectionProps {
  currentLocale?: Locale;
}

const SAHARA_CONTENT: Record<Locale, {
  eyebrow: string;
  titlePrefix: string;
  titleEm: string;
  text: string;
  chips: string[];
}> = {
  en: {
    eyebrow: "The Sahara",
    titlePrefix: "There, where something ",
    titleEm: "awakens",
    text: "Here time seems to stop. Distances change. And something inside us changes too. No rush. No schedules. No expectations. Only the adventure, and the privilege of being there.",
    chips: [
      "✦ The dunes of Erg Chebbi",
      "✦ 4×4 across the desert",
      "✦ Sandboarding",
      "✦ Golden sunset",
    ],
  },
  es: {
    eyebrow: "El Sahara",
    titlePrefix: "Allí donde algo se ",
    titleEm: "despierta",
    text: "Aquí el tiempo parece detenerse. Las distancias cambian. Y algo dentro de nosotras también. Sin prisas. Sin horarios. Sin expectativas. Solo la aventura, y el privilegio de estar allí.",
    chips: [
      "✦ Dunas de Erg Chebbi",
      "✦ 4×4 por el desierto",
      "✦ Sandboarding",
      "✦ Atardecer dorado",
    ],
  },
  fr: {
    eyebrow: "Le Sahara",
    titlePrefix: "Là où quelque chose ",
    titleEm: "s’éveille",
    text: "Ici le temps semble s’arrêter. Les distances changent. Et quelque chose en nous change aussi. Sans hâte. Sans horaires. Sans attentes. Seule l'aventure, et le privilège d'être là.",
    chips: [
      "✦ Les dunes d’Erg Chebbi",
      "✦ 4×4 dans le désert",
      "✦ Sandboarding",
      "✦ Coucher de soleil doré",
    ],
  },
  de: {
    eyebrow: "Die Sahara",
    titlePrefix: "Dort, wo etwas ",
    titleEm: "erwacht",
    text: "Hier scheint die Zeit stehen zu bleiben. Die Entfernungen verändern sich. Und etwas in uns verändert sich auch. Keine Eile. Keine Zeitpläne. Keine Erwartungen. Nur das Abenteuer und das Privileg, dort zu sein.",
    chips: [
      "✦ Die Dünen von Erg Chebbi",
      "✦ 4×4 durch die Wüste",
      "✦ Sandboarding",
      "✦ Goldener Sonnenuntergang",
    ],
  },
  it: {
    eyebrow: "Il Sahara",
    titlePrefix: "Là dove qualcosa si ",
    titleEm: "risveglia",
    text: "Qui il tempo sembra fermarsi. Le distanze cambiano. E qualcosa dentro di noi cambia pure. Senza fretta. Senza orari. Senza aspettative. Solo l'avventura e il privilegio di essere lì.",
    chips: [
      "✦ Le dune di Erg Chebbi",
      "✦ 4×4 nel deserto",
      "✦ Sandboarding",
      "✦ Tramonto dorato",
    ],
  },
  pt: {
    eyebrow: "O Sara",
    titlePrefix: "Lá onde algo ",
    titleEm: "desperta",
    text: "Aqui o tempo parece parar. As distâncias mudam. E algo dentro de nós muda também. Sem pressas. Sem horários. Sem expectativas. Apenas a aventura e o privilégio de lá estar.",
    chips: [
      "✦ Dunas de Erg Chebbi",
      "✦ 4×4 pelo deserto",
      "✦ Sandboarding",
      "✦ Pôr do sol dourado",
    ],
  },
  ar: {
    eyebrow: "الصحراء",
    titlePrefix: "هناك حيث يستيقظ ",
    titleEm: "شيء ما",
    text: "هنا يبدو الوقت متوقفًا. تتغيّر المسافات. ويتغيّر شيء في داخلنا أيضًا. بلا استعجال. بلا مواعيد. بلا توقعات. المغامرة فقط، وامتياز التواجد هناك.",
    chips: [
      "✦ كثبان عرق الشبّي",
      "✦ جولة 4×4 في الصحراء",
      "✦ التزلج على الرمال",
      "✦ غروب ذهبي",
    ],
  },
  ru: {
    eyebrow: "Сахара",
    titlePrefix: "Там, где что-то ",
    titleEm: "просыпается",
    text: "Здесь время будто останавливается. Расстояния меняются. И что-то внутри нас тоже меняется. Без спешки. Без расписания. Без ожиданий. Только приключение и привилегия быть там.",
    chips: [
      "✦ Дюны Эрг-Шебби",
      "✦ 4×4 по пустыне",
      "✦ Сэндбординг",
      "✦ Золотой закат",
    ],
  },
};

export default function SaharaSection({ currentLocale = "en" }: SaharaSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const t = SAHARA_CONTENT[currentLocale] || SAHARA_CONTENT.en;

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.12, rootMargin: "60px 0px -20px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="sahara" ref={sectionRef} className="wp-block-group alignfull bleed sahara">
      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
        {/* Background Media */}
        <div className="wp-block-group bleed__media">
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            <figure className="wp-block-image size-full">
              <img
                src="/images/sahara-sunset.jpg"
                alt="Sahara desert dunes at golden hour"
                decoding="async"
              />
            </figure>
          </div>
        </div>

        {/* Narrative Content */}
        <div
          className={`wp-block-group bleed__inner reveal ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            <p className="eyebrow eyebrow--gold wp-block-paragraph">{t.eyebrow}</p>

            <h2 className="wp-block-heading bleed__title">
              {t.titlePrefix}<em>{t.titleEm}</em>
            </h2>

            <p className="bleed__text wp-block-paragraph">
              {t.text}
            </p>

            <ul className="wp-block-list chips">
              {t.chips.map((chip, idx) => (
                <li key={idx}>{chip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
