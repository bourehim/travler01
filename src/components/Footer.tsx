"use client";

import React from "react";
import Link from "next/link";
import { Locale } from "@/data/translations";

interface FooterProps {
  currentLocale?: Locale;
}

const FOOTER_CONTENT: Record<Locale, {
  tagline: string;
  colJourney: string;
  stages: string;
  sahara: string;
  stays: string;
  pricing: string;
  colInfo: string;
  about: string;
  book: string;
  contact: string;
  instagram: string;
  colSupport: string;
  faq: string;
  beforeYouGo: string;
  terms: string;
  privacy: string;
  copyright: string;
  backToTop: string;
}> = {
  en: {
    tagline: "A transformative journey through Morocco. 7 days among vibrant cities, mountains, ancestral kasbahs and the immensity of the Sahara. Reserved for 12 women.",
    colJourney: "The Journey",
    stages: "The 7 Stages",
    sahara: "The Sahara",
    stays: "Where we stay",
    pricing: "Inclusions & Exclusions",
    colInfo: "Information",
    about: "About Vanessa & Ana",
    book: "Book my spot",
    contact: "Contact us",
    instagram: "Follow on Instagram",
    colSupport: "Support",
    faq: "Frequently Asked Questions (FAQ)",
    beforeYouGo: "Before you go",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    copyright: "© 2026 Mujeres de Arena · First edition (23 — 29 Sep 2026). All rights reserved.",
    backToTop: "Back to top ↑"
  },
  es: {
    tagline: "Una travesía transformadora por Marruecos. 7 días entre ciudades vibrantes, montañas, kasbahs ancestrales y la inmensidad del Sahara. Reservada para 12 mujeres.",
    colJourney: "El Viaje",
    stages: "Las 7 Etapas",
    sahara: "El Sahara",
    stays: "Dónde nos alojamos",
    pricing: "Qué incluye y qué no",
    colInfo: "Información",
    about: "Sobre Vanessa y Ana",
    book: "Reservar mi plaza",
    contact: "Contacto",
    instagram: "Síguenos en Instagram",
    colSupport: "Ayuda y Detalles",
    faq: "Preguntas frecuentes (FAQ)",
    beforeYouGo: "Antes de partir",
    terms: "Términos del Servicio",
    privacy: "Política de Privacidad",
    copyright: "© 2026 Mujeres de Arena · Primera edición (23 — 29 Sep 2026). Todos los derechos reservados.",
    backToTop: "Volver arriba ↑"
  },
  fr: {
    tagline: "Un voyage transformateur au Maroc. 7 jours entre villes vibrantes, montagnes, kasbahs ancestrales et l'immensité du Sahara. Réservé à 12 femmes.",
    colJourney: "Le Voyage",
    stages: "Les 7 Étapes",
    sahara: "Le Sahara",
    stays: "Où nous logeons",
    pricing: "Inclusions & Exclusions",
    colInfo: "Informations",
    about: "À propos de Vanessa & Ana",
    book: "Réserver ma place",
    contact: "Contactez-nous",
    instagram: "Suivez-nous sur Instagram",
    colSupport: "Assistance",
    faq: "Questions Fréquentes (FAQ)",
    beforeYouGo: "Avant de partir",
    terms: "Conditions Générales",
    privacy: "Politique de Confidentialité",
    copyright: "© 2026 Mujeres de Arena · Première édition (23 — 29 sep 2026). Tous droits réservés.",
    backToTop: "Haut de page ↑"
  },
  de: {
    tagline: "Eine transformative Reise durch Marokko. 7 Tage zwischen pulsierenden Städten, Bergen, uralten Kasbahs und der Weite der Sahara. Reserviert für 12 Frauen.",
    colJourney: "Die Reise",
    stages: "Die 7 Etappen",
    sahara: "Die Sahara",
    stays: "Wo wir wohnen",
    pricing: "Leistungen & Preise",
    colInfo: "Informationen",
    about: "Über Vanessa & Ana",
    book: "Meinen Platz buchen",
    contact: "Kontakt",
    instagram: "Folge uns auf Instagram",
    colSupport: "Hilfe & Service",
    faq: "Häufige Fragen (FAQ)",
    beforeYouGo: "Bevor du losfliegst",
    terms: "AGB & Buchung",
    privacy: "Datenschutzerklärung",
    copyright: "© 2026 Mujeres de Arena · Erste Edition (23. — 29. Sept. 2026). Alle Rechte vorbehalten.",
    backToTop: "Nach oben ↑"
  },
  it: {
    tagline: "Un viaggio trasformativo in Marocco. 7 giorni tra città vibranti, montagne, kasbah ancestrali e l'immensità del Sahara. Riservato a 12 donne.",
    colJourney: "Il Viaggio",
    stages: "Le 7 Tappe",
    sahara: "Il Sahara",
    stays: "Dove alloggeremo",
    pricing: "Inclusioni ed Esclusioni",
    colInfo: "Informazioni",
    about: "Chi siamo (Vanessa & Ana)",
    book: "Prenota il mio posto",
    contact: "Contattaci",
    instagram: "Seguici su Instagram",
    colSupport: "Supporto",
    faq: "Domande Frequenti (FAQ)",
    beforeYouGo: "Prima di partire",
    terms: "Termini e Condizioni",
    privacy: "Informativa sulla Privacy",
    copyright: "© 2026 Mujeres de Arena · Prima edizione (23 — 29 set 2026). Tutti i diritti riservati.",
    backToTop: "Torna su ↑"
  },
  pt: {
    tagline: "Uma viagem transformadora por Marrocos. 7 dias entre cidades vibrantes, montanhas, kasbahs ancestrais e a imensidão do Saara. Reservada para 12 mulheres.",
    colJourney: "A Viagem",
    stages: "As 7 Etapas",
    sahara: "O Saara",
    stays: "Onde ficamos",
    pricing: "O que inclui e não inclui",
    colInfo: "Informações",
    about: "Sobre Vanessa & Ana",
    book: "Reservar o meu lugar",
    contact: "Contacto",
    instagram: "Seguir no Instagram",
    colSupport: "Apoio ao Viajante",
    faq: "Perguntas Frequentes (FAQ)",
    beforeYouGo: "Antes de partir",
    terms: "Termos e Condições",
    privacy: "Política de Privacidade",
    copyright: "© 2026 Mujeres de Arena · Primeira edição (23 — 29 set 2026). Todos os direitos reservados.",
    backToTop: "Voltar ao topo ↑"
  },
  ar: {
    tagline: "رحلة استكشافية ملهمة في عمق المغرب. 7 أيام بين المدن النابضة، والجبال، والقصبات التاريخية، وسحر رمال الصحراء. محجوزة حصرياً لـ 12 امرأة.",
    colJourney: "مسار الرحلة",
    stages: "المراحل السبع",
    sahara: "الصحراء",
    stays: "أماكن الإقامة",
    pricing: "ما تتضمنه الرحلة",
    colInfo: "معلومات",
    about: "عن فانيسا وآنا",
    book: "احجزي مقعدك",
    contact: "تواصل معنا",
    instagram: "تابعينا على إنستغرام",
    colSupport: "الدعم والمساعدة",
    faq: "الأسئلة الشائعة (FAQ)",
    beforeYouGo: "قبل الرحيل",
    terms: "شروط الخدمة والحجز",
    privacy: "سياسة الخصوصية",
    copyright: "© 2026 Mujeres de Arena · النسخة الأولى (23 — 29 سبتمبر 2026). جميع الحقوق محفوظة.",
    backToTop: "العودة للأعلى ↑"
  },
  ru: {
    tagline: "Трансформационное путешествие по Марокко. 7 дней среди колоритных городов, гор, древних касб и безмолвия Сахары. Только для 12 женщин.",
    colJourney: "Путешествие",
    stages: "7 Этапов",
    sahara: "Сахара",
    stays: "Где мы остановимся",
    pricing: "Что входит и не входит",
    colInfo: "Информация",
    about: "О Ванессе и Ане",
    book: "Забронировать место",
    contact: "Связаться с нами",
    instagram: "Мы в Instagram",
    colSupport: "Поддержка",
    faq: "Частые Вопросы (FAQ)",
    beforeYouGo: "Перед отъездом",
    terms: "Условия и бронирование",
    privacy: "Политика конфиденциальности",
    copyright: "© 2026 Mujeres de Arena · Первый выпуск (23 — 29 сент. 2026). Все права защищены.",
    backToTop: "Наверх ↑"
  }
};

export default function Footer({ currentLocale = "en" }: FooterProps) {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const t = FOOTER_CONTENT[currentLocale] || FOOTER_CONTENT.en;

  const getLocalizedHref = (path: string) => {
    if (currentLocale === "en") {
      return path;
    }
    if (path.startsWith("/#")) {
      return `/${currentLocale}${path}`;
    }
    return `/${currentLocale}${path === "/" ? "" : path}`;
  };

  return (
    <footer id="colophon" className="site-footer" role="contentinfo" dir={currentLocale === "ar" ? "rtl" : "ltr"}>
      <div className="site-footer-wrap">
        {/* Middle Footer: 4-Column Editorial Layout */}
        <div
          className="site-middle-footer-wrap site-footer-row-container site-footer-focus-item site-footer-row-layout-standard site-footer-row-tablet-layout-default site-footer-row-mobile-layout-default"
          data-section="kadence_customizer_footer_middle"
        >
          <div className="site-footer-row-container-inner">
            <div className="site-container">
              <div className="site-middle-footer-inner-wrap site-footer-row site-footer-row-columns-4 site-footer-row-column-layout-equal site-footer-row-tablet-column-layout-2-col site-footer-row-mobile-column-layout-row ft-ro-dir-row ft-ro-collapse-normal ft-ro-t-dir-default ft-ro-m-dir-default ft-ro-lstyle-plain">
                {/* Column 1: Brand */}
                <div className="site-footer-middle-section-1 site-footer-section footer-section-inner-items-1">
                  <div className="footer-widget-area widget-area site-footer-focus-item footer-widget1">
                    <div className="footer-widget-area-inner site-info-inner">
                      <section id="block-8" className="widget widget_block widget_custom_html">
                        <div className="footer__brand-col">
                          <Link href={currentLocale === "en" ? "/" : `/${currentLocale}`} className="footer__brand">
                            MUJERES <em>de arena</em>
                          </Link>
                        </div>
                      </section>
                      <section id="block-9" className="widget widget_block widget_text">
                        <p className="wp-block-paragraph">
                          {t.tagline}
                        </p>
                      </section>
                    </div>
                  </div>
                </div>

                {/* Column 2: The Journey */}
                <div className="site-footer-middle-section-2 site-footer-section footer-section-inner-items-1">
                  <div className="footer-widget-area widget-area site-footer-focus-item footer-widget3">
                    <div className="footer-widget-area-inner site-info-inner">
                      <section id="nav_menu-2" className="widget widget_nav_menu">
                        <h2 className="widget-title">{t.colJourney}</h2>
                        <div className="menu-resources-container">
                          <ul id="menu-resources" className="menu">
                            <li className="menu-item">
                              <Link href={getLocalizedHref("/itinerary")}>{t.stages}</Link>
                            </li>
                            <li className="menu-item">
                              <Link href={getLocalizedHref("/#sahara")}>{t.sahara}</Link>
                            </li>
                            <li className="menu-item">
                              <Link href={getLocalizedHref("/itinerary#stays")}>{t.stays}</Link>
                            </li>
                            <li className="menu-item">
                              <Link href={getLocalizedHref("/itinerary#pricing")}>{t.pricing}</Link>
                            </li>
                          </ul>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>

                {/* Column 3: Information */}
                <div className="site-footer-middle-section-3 site-footer-section footer-section-inner-items-1">
                  <div className="footer-widget-area widget-area site-footer-focus-item footer-widget4">
                    <div className="footer-widget-area-inner site-info-inner">
                      <section id="nav_menu-3" className="widget widget_nav_menu">
                        <h2 className="widget-title">{t.colInfo}</h2>
                        <div className="menu-trip-types-container">
                          <ul id="menu-trip-types" className="menu">
                            <li className="menu-item">
                              <Link href={getLocalizedHref("/about")}>{t.about}</Link>
                            </li>
                            <li className="menu-item">
                              <Link href={getLocalizedHref("/reserve-spot")}>{t.book}</Link>
                            </li>
                            <li className="menu-item">
                              <Link href={getLocalizedHref("/contact")}>{t.contact}</Link>
                            </li>
                            <li className="menu-item">
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://instagram.com/"
                              >
                                {t.instagram}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>

                {/* Column 4: Support */}
                <div className="site-footer-middle-section-4 site-footer-section footer-section-inner-items-1">
                  <div className="footer-widget-area widget-area site-footer-focus-item footer-widget2">
                    <div className="footer-widget-area-inner site-info-inner">
                      <section id="nav_menu-1" className="widget widget_nav_menu">
                        <h2 className="widget-title">{t.colSupport}</h2>
                        <div className="menu-support-container">
                          <ul id="menu-support" className="menu">
                            <li className="menu-item">
                              <Link href={getLocalizedHref("/#faq")}>{t.faq}</Link>
                            </li>
                            <li className="menu-item">
                              <Link href={getLocalizedHref("/#practico")}>{t.beforeYouGo}</Link>
                            </li>
                            <li className="menu-item">
                              <Link href={getLocalizedHref("/terms")}>{t.terms}</Link>
                            </li>
                            <li className="menu-item">
                              <Link href={getLocalizedHref("/privacy")}>{t.privacy}</Link>
                            </li>
                          </ul>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer: Copyright & Back to Top */}
        <div
          className="site-bottom-footer-wrap site-footer-row-container site-footer-focus-item site-footer-row-layout-standard site-footer-row-tablet-layout-default site-footer-row-mobile-layout-default"
          data-section="kadence_customizer_footer_bottom"
        >
          <div className="site-footer-row-container-inner">
            <div className="site-container">
              <div className="site-bottom-footer-inner-wrap site-footer-row site-footer-row-columns-1 site-footer-row-column-layout-row site-footer-row-tablet-column-layout-default site-footer-row-mobile-column-layout-row ft-ro-dir-row ft-ro-collapse-normal ft-ro-t-dir-default ft-ro-m-dir-default ft-ro-lstyle-plain">
                <div className="site-footer-bottom-section-1 site-footer-section footer-section-inner-items-1">
                  <div
                    className="footer-widget-area site-info site-footer-focus-item content-align-default content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default"
                    data-section="kadence_customizer_footer_html"
                  >
                    <div className="footer-widget-area-inner site-info-inner">
                      <div className="footer-html inner-link-style-normal">
                        <div className="footer-html-inner">
                          <div className="footer__bottom">
                            <span>
                              {t.copyright}
                            </span>
                            <a
                              href="#masthead"
                              className="footer__top-link"
                              onClick={scrollToTop}
                            >
                              {t.backToTop}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
