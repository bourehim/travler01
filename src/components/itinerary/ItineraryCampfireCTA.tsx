"use client";

import React, { useEffect, useRef } from "react";
import { Locale } from "@/data/translations";

interface CampfireProps {
  currentLocale?: Locale;
}

const CTA_DATA: {
  eyebrow: Partial<Record<Locale, string>>;
  titlePrefix: Partial<Record<Locale, string>>;
  titleEm: Partial<Record<Locale, string>>;
  text: Partial<Record<Locale, string>>;
  btn1: Partial<Record<Locale, string>>;
  btn2: Partial<Record<Locale, string>>;
} = {
  eyebrow: {
    en: "12 WOMEN · ONE SHARED JOURNEY",
    es: "12 MUJERES · UN VIAJE COMPARTIDO",
    fr: "12 FEMMES · UNE AVENTURE PARTAGÉE",
    de: "12 FRAUEN · EINE GEMEINSAME REISE",
    it: "12 DONNE · UN SOLO VIAGGIO CONDIVISO",
    ar: "12 امرأة · رحلة واحدة تجمعنا"
  },
  titlePrefix: {
    en: "Ready to Join the ",
    es: "¿Lista para Sumarte a las ",
    fr: "Prête à Rejoindre les ",
    de: "Bereit, Teil der ",
    it: "Pronta a Unirti alle ",
    ar: "هل أنتِ مستعدة للانضمام إلى "
  },
  titleEm: {
    en: "12 Women?",
    es: "12 Mujeres?",
    fr: "12 Femmes ?",
    de: "12 Frauen zu Werden?",
    it: "12 Donne?",
    ar: "النساء الـ 12؟"
  },
  text: {
    en: "Only 150 € deposit confirms your place. Arrive in Marrakech with your bag packed and an appetite for an adventure you will remember for life.",
    es: "Sólo 150 € de señal aseguran tu plaza. Llega a Marrakech con tu equipaje listo y la ilusión de vivir una experiencia que recordarás toda la vida.",
    fr: "Un acompte de 150 € confirme votre place. Arrivez à Marrakech sac prêt et cœur ouvert à une aventure inoubliable.",
    de: "Nur 150 € Anzahlung sichern deinen Platz. Komm mit gepackter Tasche und Vorfreude auf eine unvergessliche Reise nach Marrakesch.",
    it: "Bastano 150 € di acconto per confermare il tuo posto. Raggiungi Marrakech con la valigia pronta e la voglia di un’avventura indimenticabile.",
    ar: "دفعة تأكيد بقيمة 150 يورو فقط تضمن مقعدك اليوم. احزمي حقيبتك واستعدي لمغامرة صحراوية ستبقى حية في ذاكرتك للأبد."
  },
  btn1: {
    en: "Reserve Your Spot",
    es: "Reservar mi Plaza",
    fr: "Réserver ma Place",
    de: "Meinen Platz Reservieren",
    it: "Prenota il Mio Posto",
    ar: "احجزي مقعدك الآن"
  },
  btn2: {
    en: "Contact Vanessa & Ana",
    es: "Contactar con Vanessa y Ana",
    fr: "Contacter Vanessa & Ana",
    de: "Vanessa & Ana Kontaktieren",
    it: "Contatta Vanessa & Ana",
    ar: "توصلي مع فانيسا وآنا"
  }
};

export default function ItineraryCampfireCTA({
  currentLocale = "en"
}: CampfireProps) {
  const eyebrow = CTA_DATA.eyebrow[currentLocale] || CTA_DATA.eyebrow.en || "";
  const titlePrefix = CTA_DATA.titlePrefix[currentLocale] || CTA_DATA.titlePrefix.en || "";
  const titleEm = CTA_DATA.titleEm[currentLocale] || CTA_DATA.titleEm.en || "";
  const text = CTA_DATA.text[currentLocale] || CTA_DATA.text.en || "";
  const btn1 = CTA_DATA.btn1[currentLocale] || CTA_DATA.btn1.en || "";
  const btn2 = CTA_DATA.btn2[currentLocale] || CTA_DATA.btn2.en || "";

  const isRtl = currentLocale === "ar";

  return (
    <div
      id="reserva"
      className="wp-block-cover alignfull has-parallax mda-campfire-wrap cta bleed"
    >
      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
        {/* Background Media */}
        <div className="wp-block-group mda-campfire-media">
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            <figure className="wp-block-image size-full">
              <img
                decoding="async"
                src="/images/night-campfire.jpg"
                alt="Night campfire under the stars"
              />
            </figure>
          </div>
        </div>

        {/* Content */}
        <div className="wp-block-group mda-campfire-inner cta__inner">
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            <p className="eyebrow eyebrow--gold wp-block-paragraph">
              {eyebrow}
            </p>

            <h2 className="wp-block-heading cta__title">
              {titlePrefix}
              <em>{titleEm}</em>
            </h2>

            <p className="cta__text wp-block-paragraph">
              {text}
            </p>

            <div className="wp-block-buttons cta__actions is-layout-flex wp-block-buttons-is-layout-flex">
              <div className="wp-block-button mda-btn mda-btn--primary">
                <a
                  className="wp-block-button__link wp-element-button"
                  href="/#pricing"
                >
                  {btn1}{" "}
                  <span className="btn__arrow" aria-hidden="true">
                    {isRtl ? "←" : "→"}
                  </span>
                </a>
              </div>

              <div className="wp-block-button mda-btn mda-btn--ghost btn--on-dark">
                <a
                  className="wp-block-button__link wp-element-button"
                  href="https://wa.me/34600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {btn2}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
