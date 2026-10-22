"use client";

import React, { useEffect, useRef } from "react";
import { Locale } from "@/data/translations";

interface CampfireCTAProps {
  currentLocale?: Locale;
}

const CAMPFIRE_CONTENT: Record<Locale, {
  eyebrow: string;
  titlePrefix: string;
  titleEm: string;
  text: string;
  bookBtn: string;
  contactBtn: string;
}> = {
  en: {
    eyebrow: "12 women · one shared journey",
    titlePrefix: "See you in ",
    titleEm: "Morocco",
    text: "Arrive in Marrakech with your bag packed, your mind open and a real appetite for an adventure you will remember for a long time. We will take care of the rest.",
    bookBtn: "Book my spot →",
    contactBtn: "Contact Vanessa & Ana",
  },
  es: {
    eyebrow: "12 mujeres · una misma travesía",
    titlePrefix: "Nos vemos en ",
    titleEm: "Marruecos",
    text: "Llega a Marrakech con la maleta preparada, la mente abierta y muchas ganas de vivir una experiencia que recordarás mucho tiempo. Del resto nos ocupamos nosotras.",
    bookBtn: "Reservar mi plaza →",
    contactBtn: "Contacto Vanessa & Ana",
  },
  fr: {
    eyebrow: "12 femmes · un même voyage",
    titlePrefix: "On se voit au ",
    titleEm: "Maroc",
    text: "Arrivez à Marrakech avec la valise prête, l’esprit ouvert et l'envie sincère d'une aventure inoubliable. Nous prenons soin de tout le reste.",
    bookBtn: "Réserver ma place →",
    contactBtn: "Contact Vanessa & Ana",
  },
  de: {
    eyebrow: "12 Frauen · eine gemeinsame Reise",
    titlePrefix: "Wir sehen uns in ",
    titleEm: "Marokko",
    text: "Komm mit gepacktem Koffer, offenem Geist und viel Lust auf eine unvergessliche Reise nach Marrakesch. Um den Rest kümmern wir uns.",
    bookBtn: "Meinen Platz buchen →",
    contactBtn: "Kontakt Vanessa & Ana",
  },
  it: {
    eyebrow: "12 donne · un unico viaggio",
    titlePrefix: "Ci vediamo in ",
    titleEm: "Marocco",
    text: "Arriva a Marrakech con la valigia pronta, la mente aperta e il desiderio di un'avventura da ricordare a lungo. Al resto pensiamo noi.",
    bookBtn: "Prenota il mio posto →",
    contactBtn: "Contatti Vanessa & Ana",
  },
  pt: {
    eyebrow: "12 mulheres · uma mesma viagem",
    titlePrefix: "Vemo-nos em ",
    titleEm: "Marrocos",
    text: "Chega a Marraquexe com a mala preparada, a mente aberta e muita vontade de viver uma viagem inesquecível. Nós tratamos do resto.",
    bookBtn: "Reservar o meu lugar →",
    contactBtn: "Contacto Vanessa & Ana",
  },
  ar: {
    eyebrow: "12 امرأة · رحلة واحدة",
    titlePrefix: "نلتقي في ",
    titleEm: "المغرب",
    text: "تصلين إلى مراكش وحقيبتك جاهزة وذهنك منفتح ورغبة حقيقية في خوض مغامرة تبقى محفورة في ذاكرتك طويلًا. نحن نتكفل بكل التفاصيل الأخرى.",
    bookBtn: "احجزي مقعدك ←",
    contactBtn: "التواصل مع فانيسا وآنا",
  },
  ru: {
    eyebrow: "12 женщин · одно путешествие",
    titlePrefix: "Увидимся в ",
    titleEm: "Марокко",
    text: "Приезжай в Марракеш с собранным чемоданом, открытым умом и искренним желанием приключения, которое запомнится навсегда. Обо всем остальном позаботимся мы.",
    bookBtn: "Забронировать место →",
    contactBtn: "Контакты Vanessa & Ana",
  },
};

export default function CampfireCTA({ currentLocale = "en" }: CampfireCTAProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const t = CAMPFIRE_CONTENT[currentLocale] || CAMPFIRE_CONTENT.en;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const revealEls = el.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "60px 0px" }
    );

    revealEls.forEach((r) => observer.observe(r));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="reserva"
      className="wp-block-group alignfull mda-campfire-wrap cta bleed"
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
            <p className="eyebrow eyebrow--gold reveal wp-block-paragraph">
              {t.eyebrow}
            </p>

            <h2 className="wp-block-heading cta__title reveal">
              {t.titlePrefix}<em>{t.titleEm}</em>
            </h2>

            <p className="cta__text reveal wp-block-paragraph">
              {t.text}
            </p>

            <div className="wp-block-buttons cta__actions is-layout-flex wp-block-buttons-is-layout-flex">
              <div className="wp-block-button mda-btn mda-btn--primary">
                <a
                  className="wp-block-button__link wp-element-button"
                  href="/reserve-spot"
                >
                  {t.bookBtn}
                </a>
              </div>

              <div className="wp-block-button mda-btn mda-btn--ghost btn--on-dark">
                <a
                  className="wp-block-button__link wp-element-button"
                  href="/contact"
                >
                  {t.contactBtn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
