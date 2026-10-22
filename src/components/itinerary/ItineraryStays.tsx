"use client";

import React from "react";
import Image from "next/image";
import { Locale } from "@/data/translations";

interface StayCardItem {
  id: string;
  image: string;
  badge: Partial<Record<Locale, string>>;
  title: Partial<Record<Locale, string>>;
  desc: Partial<Record<Locale, string>>;
}

const STAYS_HEADER: {
  eyebrow: Partial<Record<Locale, string>>;
  titlePrefix: Partial<Record<Locale, string>>;
  titleEm: Partial<Record<Locale, string>>;
  lede: Partial<Record<Locale, string>>;
} = {
  eyebrow: {
    en: "Where We Stay",
    es: "Dónde Nos Alojamos",
    fr: "Où Nous Logeons",
    de: "Wo Wir Wohnen",
    it: "Dove Alloggeremo",
    ar: "أماكن الإقامة"
  },
  titlePrefix: {
    en: "Places Chosen to ",
    es: "Lugares Elegidos para ",
    fr: "Des Lieux Choisis pour ",
    de: "Ausgewählte Orte, die ",
    it: "Luoghi Scelti per ",
    ar: "ملاذات مختارة بعناية "
  },
  titleEm: {
    en: "Accompany the Experience",
    es: "Acompañar la Experiencia",
    fr: "Sublimer l’Expérience",
    de: "das Erlebnis Begleiten",
    it: "Accompagnare l’Esperienza",
    ar: "لترافق التجربة"
  },
  lede: {
    en: "Charming boutique riads, ancestral kasbahs, and a deluxe camp in the Sahara desert — each selected for authenticity, personal care, comfort, and peaceful atmosphere.",
    es: "Riads con encanto, kasbahs ancestrales y un campamento deluxe en el desierto del Sahara — seleccionados por su autenticidad, calidez humana, confort y serenidad.",
    fr: "Riads de charme, kasbahs ancestrales et bivouac de luxe dans le Sahara — chacun choisi pour son authenticité, son accueil chaleureux et son atmosphère paisible.",
    de: "Charmante Riads, geschichtsträchtige Kasbahs und ein Deluxe-Camp in der Sahara — ausgewählt nach Authentizität, Herzlichkeit und Ruhe.",
    it: "Riad di charme, kasbah storiche e un accampamento deluxe nel deserto del Sahara — selezionati per autenticità, cura, comfort e atmosfera serena.",
    ar: "رياضات بوتيك أصيلة، وقصبات تاريخية، ومخيم فاخر في عمق الصحراء — اختيرت بعناية لتجمع بين الأصالة، وحسن الضيافة، والراحة والسكينة."
  }
};

const STAYS_CARDS: StayCardItem[] = [
  {
    id: "riad",
    image: "/images/aloj-01.jpg",
    badge: {
      en: "Marrakech Riads",
      es: "Riads Marrakech",
      fr: "Riads Marrakech",
      de: "Marrakesch Riads",
      it: "Riad Marrakech",
      ar: "رياضات مراكش"
    },
    title: {
      en: "Boutique Riads (Marrakech)",
      es: "Riads Boutique (Marrakech)",
      fr: "Riads de Charme (Marrakech)",
      de: "Boutique-Riads (Marrakesch)",
      it: "Boutique Riad (Marrakech)",
      ar: "رياضات بوتيك (مراكش)"
    },
    desc: {
      en: "Oases of calm with interior courtyards, fountain whispers, rooftop terraces, and delicate Moroccan craftsmanship.",
      es: "Oasis de calma con patios ajardinados, rumor de fuentes, azoteas panorámicas y artesanía marroquí tradicional.",
      fr: "Havres de paix aux patios intérieurs arborés, fontaines murmurantes, terrasses panoramiques et artisanat raffiné.",
      de: "Oasen der Ruhe mit begrünten Innenhöfen, plätschernden Brunnen und marokkanischer Handwerkskunst.",
      it: "Oasi di pace con cortili fioriti, fontane zampillanti, terrazze sui tetti e artigianato d’eccellenza.",
      ar: "واحات من الهدوء بأفنية داخلية خضراء، ونوافير مياه، وأسطح بانورامية، وزخارف مغربية بديعة."
    }
  },
  {
    id: "camp",
    image: "/images/desert-camp.jpg",
    badge: {
      en: "Sahara Camp",
      es: "Campamento Sahara",
      fr: "Campement Sahara",
      de: "Sahara Camp",
      it: "Campo Sahara",
      ar: "مخيم الصحراء"
    },
    title: {
      en: "Deluxe Sahara Camp (Erg Chebbi)",
      es: "Campamento Deluxe (Erg Chebbi)",
      fr: "Campement Deluxe (Erg Chebbi)",
      de: "Deluxe Sahara-Camp (Erg Chebbi)",
      it: "Campo Deluxe Sahara (Erg Chebbi)",
      ar: "مخيم ديلوكس (عرق الشبي)"
    },
    desc: {
      en: "Spacious luxury private tents with comfortable beds, artisanal rugs, en-suite bathrooms, and panoramic sunset dune vistas.",
      es: "Haimas privadas de lujo con camas amplias, alfombras bereberes, baño en suite y vistas directas a las dunas doradas.",
      fr: "Tentes privées spacieuses de grand confort, lits moelleux, tapis berbères, salle de bain privée et vue sur les dunes.",
      de: "Großzügige Luxuszelte mit bequemen Betten, Teppichen, privatem Bad und freiem Blick auf die Dünen.",
      it: "Spaziose tende private con letti comodi, tappeti berberi, bagno privato e vista panoramica sulle dune.",
      ar: "خيام رحبة فاخرة بأسرّة مريحة، وسجاد بربري تقليدي، وحمامات خاصة وإطلالات خلابة على الكثبان."
    }
  },
  {
    id: "kasbah",
    image: "/images/aloj-05.jpg",
    badge: {
      en: "Valleys & Oasis",
      es: "Valles y Oasis",
      fr: "Vallées et Oasis",
      de: "Täler und Oasen",
      it: "Valli e Oasi",
      ar: "الوديان والواحات"
    },
    title: {
      en: "Ancestral Kasbahs (Valleys)",
      es: "Kasbahs Ancestrales (Valles)",
      fr: "Kasbahs Ancestrales (Vallées)",
      de: "Historische Kasbahs (Täler)",
      it: "Kasbah Storiche (Valli)",
      ar: "قصبات عريقة (الوديان)"
    },
    desc: {
      en: "Historically preserved earthen architecture overlooking verdant palm groves, almond blossoms, and dramatic rose canyons.",
      es: "Arquitectura histórica de adobe con vistas a palmerales, almendros y cañones rojizos bajo cielos transparentes.",
      fr: "Architecture d’adobe préservée dominant d’immenses palmeraies, amandiers et falaises pourpres.",
      de: "Erhaltene Lehmburgen mit Blick auf schattige Palmenhaine, Mandelbäume und rote Schluchten.",
      it: "Architettura tradizionale in terra cruda affacciata su palmeti rigogliosi e valli di mandorli.",
      ar: "عمارة طينية تاريخية أصيلة تطل على واحات النخيل، وبساتين اللوز، ومضايق الجبال الملونة."
    }
  }
];

export default function ItineraryStays({
  currentLocale = "en"
}: {
  currentLocale?: Locale;
}) {
  const eyebrow = STAYS_HEADER.eyebrow[currentLocale] || STAYS_HEADER.eyebrow.en || "";
  const titlePrefix = STAYS_HEADER.titlePrefix[currentLocale] || STAYS_HEADER.titlePrefix.en || "";
  const titleEm = STAYS_HEADER.titleEm[currentLocale] || STAYS_HEADER.titleEm.en || "";
  const lede = STAYS_HEADER.lede[currentLocale] || STAYS_HEADER.lede.en || "";

  return (
    <div id="stays" className="wp-block-group alignfull mda-stays-section">
      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
        <div className="wp-block-group mda-stays-inner">
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            {/* Header */}
            <div className="wp-block-group mda-stays-header">
              <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                <p className="eyebrow eyebrow--terra wp-block-paragraph">
                  {eyebrow}
                </p>
                <h2 className="wp-block-heading mda-stays-title">
                  {titlePrefix}
                  <em>{titleEm}</em>
                </h2>
                <p className="mda-stays-lede wp-block-paragraph">{lede}</p>
              </div>
            </div>

            {/* Bento Grid */}
            <div className="wp-block-group mda-stays-bento-grid">
              <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                {STAYS_CARDS.map((card) => {
                  const badge = card.badge[currentLocale] || card.badge.en || "";
                  const title = card.title[currentLocale] || card.title.en || "";
                  const desc = card.desc[currentLocale] || card.desc.en || "";

                  return (
                    <div key={card.id} className="wp-block-group mda-stay-card">
                      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                        {/* Image wrap */}
                        <div className="wp-block-group mda-stay-img-wrap">
                          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                            <figure className="wp-block-image size-full">
                              <Image
                                src={card.image}
                                alt={title}
                                width={500}
                                height={250}
                                className="object-cover w-full h-full"
                                priority
                              />
                            </figure>
                            <p className="mda-stay-badge wp-block-paragraph">
                              {badge}
                            </p>
                          </div>
                        </div>

                        {/* Body */}
                        <div className="wp-block-group mda-stay-body">
                          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                            <h3 className="wp-block-heading mda-stay-title">
                              {title}
                            </h3>
                            <p className="mda-stay-desc wp-block-paragraph">
                              {desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
