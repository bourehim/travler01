"use client";

import React from "react";
import Image from "next/image";
import { Locale } from "@/data/translations";

const INCLUSIONS_HEADER: {
  eyebrow: Partial<Record<Locale, string>>;
  titlePrefix: Partial<Record<Locale, string>>;
  titleEm: Partial<Record<Locale, string>>;
} = {
  eyebrow: {
    en: "Transparent Pricing",
    es: "Claridad Total",
    fr: "Tarifs Transparents",
    de: "Faire Transparenz",
    it: "Prezzi Chiari",
    ar: "أسعار واضحة وشفافة"
  },
  titlePrefix: {
    en: "What is Included & ",
    es: "Qué Incluye y ",
    fr: "Ce qui est Inclus & ",
    de: "Was Enthalten ist & ",
    it: "Cosa è Incluso & ",
    ar: "ما تتضمنه الرحلة "
  },
  titleEm: {
    en: "What is Not",
    es: "Qué No Incluye",
    fr: "Ce qui Ne l’est Pas",
    de: "Was Nicht",
    it: "Cosa Non lo È",
    ar: "وما لا تتضمنه"
  }
};

const INCLUDED_CARD: {
  title: Partial<Record<Locale, string>>;
  items: Partial<Record<Locale, string[]>>;
} = {
  title: {
    en: "Included in the 800 €",
    es: "Incluido en los 800 €",
    fr: "Inclus dans les 800 €",
    de: "Im Preis von 800 € Enthalten",
    it: "Incluso negli 800 €",
    ar: "متضمن في مبلغ 800 يورو"
  },
  items: {
    en: [
      "Round-trip airport transfers from/to Marrakech Menara (RAK)",
      "Private comfortable air-conditioned transport throughout all 7 days",
      "Professional local driver & Spanish/English-speaking guide",
      "6 nights boutique accommodation (5 nights riads/kasbahs + 1 night luxury Sahara camp)",
      "All breakfasts + 4 dinners included along the route",
      "Camel trek at golden hour across the Erg Chebbi dunes",
      "4×4 desert excursion visiting nomadic families & oasis wells",
      "Sandboarding and campfire stargazing celebration",
      "Close personal accompaniment from hosts Vanessa & Ana throughout"
    ],
    es: [
      "Traslados privados de ida y vuelta desde el aeropuerto de Marrakech Menara (RAK)",
      "Transporte privado en vehículo moderno y climatizado durante los 7 días",
      "Chófer local profesional y guía acompañante de habla hispana",
      "6 noches de alojamiento con encanto (5 noches en riads/kasbahs + 1 noche campamento Sahara)",
      "Todos los desayunos + 4 cenas tradicionales incluidas en ruta",
      "Caravana en dromedario al atardecer por las dunas de Erg Chebbi",
      "Excursión en 4×4 visitando familias nómadas y pozos del desierto",
      "Sandboard y velada musical gnawa alrededor de la hoguera",
      "Acompañamiento personal continuo de las anfitrionas Vanessa y Ana"
    ],
    fr: [
      "Transferts aéroport aller-retour depuis Marrakech Menara (RAK)",
      "Transport privé en minibus moderne et climatisé pendant 7 jours",
      "Chauffeur professionnel local et guide accompagnateur francophone/hispanophone",
      "6 nuits d’hébergement de charme (5 nuits riads/kasbahs + 1 nuit campement Sahara)",
      "Tous les petits-déjeuners + 4 dîners traditionnels inclus sur le parcours",
      "Randonnée chamelière au coucher du soleil dans les dunes d’Erg Chebbi",
      "Excursion en 4×4 à la rencontre des familles nomades et puits du désert",
      "Sandboard et veillée musicale gnawa au coin du feu",
      "Accompagnement bienveillant et constant de Vanessa & Ana"
    ],
    de: [
      "Privater Flughafentransfer hin und zurück ab Marrakesch Menara (RAK)",
      "Komfortabler Privattransport im klimatisierten Minibus an allen 7 Tagen",
      "Erfahrener lokaler Fahrer und spanisch-/englischsprachige Reisebegleitung",
      "6 Übernachtungen in stilvollen Unterkünften (5 Nächte Riads/Kasbahs + 1 Nacht Deluxe-Camp)",
      "Alle Frühstücke + 4 traditionelle Abendessen unterwegs",
      "Kamelritt zum Sonnenuntergang über die Dünen von Erg Chebbi",
      "4×4 Wüstenausflug zu Nomadenfamilien und Oasenbrunnen",
      "Sandboarding und Musik am Lagerfeuer unter dem Wüstenhimmel",
      "Persönliche und durchgehende Begleitung durch Vanessa & Ana"
    ],
    it: [
      "Trasferimenti aeroportuali privati a/r da Marrakech Menara (RAK)",
      "Trasporto privato con aria condizionata per l’intero viaggio di 7 giorni",
      "Autista locale professionista e guida bilingue accompagnatrice",
      "6 notti in strutture di charme (5 notti riad/kasbah + 1 notte campo nel deserto)",
      "Tutte le colazioni + 4 cene tipiche lungo il percorso",
      "Passeggiata a dromedario al tramonto sulle dune di Erg Chebbi",
      "Escursione 4×4 alla scoperta di famiglie nomadi e pozzi nel deserto",
      "Sandboard e serata musicale gnawa attorno al fuoco",
      "Accompagnamento personale e continuo di Vanessa & Ana"
    ],
    ar: [
      "توصيل خاص ذهاباً وإياباً من وإلى مطار مراكش المنارة (RAK)",
      "تنقلات بسيارة حديثة ومريحة ومكيفة طوال الأيام السبعة",
      "سائق محلي محترف ودليل سياحي مرافق طوال الرحلة",
      "إقامة 6 ليالٍ مميزة (5 ليالٍ في رياضات وقصبات + ليلة في مخيم صحراوي فاخر)",
      "جميع وجبات الإفطار + 4 وجبات عشاء مغربية تقليدية خلال المسار",
      "جولة على ظهور الجمال عند الأصيل في كثبان عرق الشبي",
      "جولة بسيارات الدفع الرباعي 4×4 لزيارة العائلات البدوية وآبار الصحراء",
      "تجربة التزلج على الرمال وسهرة موسيقية حول الموقد تحت النجوم",
      "مرافقة شخصية مستمرة من المضيفتين فانيسا وآنا طوال أيام الرحلة"
    ]
  }
};

const NOT_INCLUDED_CARD: {
  title: Partial<Record<Locale, string>>;
  items: Partial<Record<Locale, string[]>>;
} = {
  title: {
    en: "Not Included",
    es: "No Incluido",
    fr: "Non Inclus",
    de: "Nicht Enthalten",
    it: "Non Incluso",
    ar: "غير متضمن"
  },
  items: {
    en: [
      "International flights to/from Marrakech",
      "Lunches and unspecified dinners (affordable local spots curated together)",
      "Personal drinks, snacks, and personal souk purchases",
      "Personal travel and medical insurance (strongly recommended)",
      "Tips for driver, guide, and hotel hospitality teams"
    ],
    es: [
      "Vuelos internacionales hacia y desde Marrakech",
      "Almuerzos y cenas no especificadas (locales seleccionados con mimo)",
      "Bebidas personales, propinas y compras personales en zocos",
      "Seguro de viaje y médico personal (muy recomendado)",
      "Propinas para el equipo de conductores y personal de hostelería"
    ],
    fr: [
      "Vols internationaux aller-retour vers Marrakech",
      "Déjeuners et dîners non mentionnés (bonnes adresses locales sélectionnées ensemble)",
      "Boissons personnelles, collations et achats dans les souks",
      "Assurance voyage et rapatriement personnelle (vivement conseillée)",
      "Pourboires pour les équipes locales de chauffeurs et d’hôtellerie"
    ],
    de: [
      "Internationale Flüge nach und von Marrakesch",
      "Mittagessen und nicht aufgeführte Abendessen (gemeinsam ausgesuchte lokale Lokale)",
      "Eigene Getränke, Snacks und persönliche Einkäufe in den Souks",
      "Persönliche Reisekranken- und Reiserücktrittsversicherung (dringend empfohlen)",
      "Trinkgelder für Fahrer, Guides und Hotelteams"
    ],
    it: [
      "Voli internazionali da/per Marrakech",
      "Pranzi e cene non specificate (piccoli ristoranti locali scelti insieme)",
      "Bevande personali, snack e acquisti personali nei souk",
      "Assicurazione medica e di viaggio personale (fortemente consigliata)",
      "Mance per autisti, guide e personale d’accoglienza"
    ],
    ar: [
      "تذاكر الطيران الدولية من وإلى مراكش",
      "وجبات الغداء والعشاء غير المحددة (نختار معاً مطاعم محلية أصيلة)",
      "المشروبات الخاصة والمشتريات الشخصية في الأسواق",
      "التأمين الطبي وتأمين السفر الشخصي (يوصى به بشدة)",
      "الإكراميات المعتادة لطاقم السائقين وفرق الضيافة"
    ]
  }
};

export default function ItineraryInclusions({
  currentLocale = "en"
}: {
  currentLocale?: Locale;
}) {
  const eyebrow = INCLUSIONS_HEADER.eyebrow[currentLocale] || INCLUSIONS_HEADER.eyebrow.en || "";
  const titlePrefix = INCLUSIONS_HEADER.titlePrefix[currentLocale] || INCLUSIONS_HEADER.titlePrefix.en || "";
  const titleEm = INCLUSIONS_HEADER.titleEm[currentLocale] || INCLUSIONS_HEADER.titleEm.en || "";

  const incTitle = INCLUDED_CARD.title[currentLocale] || INCLUDED_CARD.title.en || "";
  const incItems: string[] = INCLUDED_CARD.items[currentLocale] || INCLUDED_CARD.items.en || [];

  const notIncTitle = NOT_INCLUDED_CARD.title[currentLocale] || NOT_INCLUDED_CARD.title.en || "";
  const notIncItems: string[] = NOT_INCLUDED_CARD.items[currentLocale] || NOT_INCLUDED_CARD.items.en || [];

  return (
    <div className="wp-block-group alignwide mda-inclusions-wrap">
      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
        {/* Header */}
        <div className="wp-block-group mda-inclusions-header">
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            <p className="eyebrow eyebrow--terra wp-block-paragraph">
              {eyebrow}
            </p>
            <h2 className="wp-block-heading mda-inclusions-title">
              {titlePrefix}
              <em>{titleEm}</em>
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="wp-block-group mda-inclusion-grid">
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            {/* Included Card */}
            <div className="wp-block-group mda-inclusion-card">
              <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                <figure className="wp-block-image size-full is-resized mda-card-icon">
                  <Image
                    src="/icons/included.svg"
                    alt={incTitle}
                    width={24}
                    height={24}
                    priority
                  />
                </figure>
                <h3 className="wp-block-heading mda-inclusion-title">
                  {incTitle}
                </h3>
                <ul className="wp-block-list mda-inclusion-list mda-inclusion-list--yes">
                  {incItems.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Not Included Card */}
            <div className="wp-block-group mda-inclusion-card">
              <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                <figure className="wp-block-image size-full is-resized mda-card-icon">
                  <Image
                    src="/icons/not-included.svg"
                    alt={notIncTitle}
                    width={24}
                    height={24}
                    priority
                  />
                </figure>
                <h3 className="wp-block-heading mda-inclusion-title">
                  {notIncTitle}
                </h3>
                <ul className="wp-block-list mda-inclusion-list mda-inclusion-list--no">
                  {notIncItems.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
