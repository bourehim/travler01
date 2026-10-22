"use client";

import React, { useState, useEffect, useRef } from "react";
import { Locale } from "@/data/translations";

interface ReserveSectionProps {
  currentLocale?: Locale;
}

const RESERVE_DATA: Record<Locale, {
  eyebrow: string;
  titlePrefix: string;
  titleEm: string;
  titleSuffix: string;
  ticketLabel: string;
  ticketNote: string;
  depositLabel: string;
  depositNote: string;
  remainingLabel: string;
  remainingNote: string;
  bookBtn: string;
  includedTitle: string;
  includedItems: string[];
  excludedTitle: string;
  excludedItems: string[];
}> = {
  "en": {
    "eyebrow": "Your spot",
    "titlePrefix": "An experience reserved ",
    "titleEm": "for 12 women",
    "titleSuffix": "",
    "ticketLabel": "Total investment",
    "ticketNote": "12 women. One shared journey.Seven days from Marrakech to the Sahara.",
    "depositLabel": "Booking deposit",
    "depositNote": "Confirms your place. Non-refundable.",
    "remainingLabel": "Remaining payment",
    "remainingNote": "Payable on arrival in Morocco.",
    "bookBtn": "Book my spot →",
    "includedTitle": "Included",
    "includedItems": [
      "Return transfers from Marrakech airport",
      "Private air-conditioned transport throughout the journey",
      "Local driver and Spanish-speaking guide",
      "6 nights: 5 in charming riads + 1 deluxe camp in the Sahara",
      "All breakfasts and four dinners along the route",
      "Camel ride, 4×4 and sandboarding in the dunes",
      "A meal with nomads or a picnic in an oasis",
      "Visits and experiences throughout the journey",
      "Close accompaniment from your hosts"
    ],
    "excludedTitle": "Not included",
    "excludedItems": [
      "International flights to Marrakech",
      "Lunches and meals not specified",
      "Drinks and personal expenses",
      "Tips"
    ]
  },
  "fr": {
    "eyebrow": "Votre place",
    "titlePrefix": "Une expérience réservée ",
    "titleEm": "à 12 femmes",
    "titleSuffix": "",
    "ticketLabel": "Investissement total",
    "ticketNote": "12 femmes. Un même voyage.Sept jours de Marrakech au Sahara.",
    "depositLabel": "Réservation de la place",
    "depositNote": "Confirme votre participation. Non remboursable.",
    "remainingLabel": "Paiement restant",
    "remainingNote": "À régler à l’arrivée au Maroc.",
    "bookBtn": "Réserver ma place →",
    "includedTitle": "Comprend",
    "includedItems": [
      "Transferts aller-retour depuis l’aéroport de Marrakech",
      "Transport privé climatisé pendant tout le voyage",
      "Chauffeur local et guide francophone et hispanophone",
      "6 nuits : 5 en riads de charme + 1 campement deluxe dans le Sahara",
      "Tous les petits-déjeuners et quatre dîners pendant la route",
      "Balade à dos de chameau, 4×4 et sandboard dans les dunes",
      "Repas avec des nomades ou pique-nique dans une oasis",
      "Visites et expériences tout au long du voyage",
      "Accompagnement proche de vos hôtesses"
    ],
    "excludedTitle": "Non compris",
    "excludedItems": [
      "Vols internationaux jusqu’à Marrakech",
      "Déjeuners et repas non précisés",
      "Boissons et dépenses personnelles",
      "Pourboires"
    ]
  },
  "de": {
    "eyebrow": "Dein Platz",
    "titlePrefix": "Eine Erfahrung reserviert ",
    "titleEm": "für 12 Frauen",
    "titleSuffix": "",
    "ticketLabel": "Gesamtinvestition",
    "ticketNote": "12 Frauen. Eine gemeinsame Reise.Sieben Tage von Marrakesch bis zur Sahara.",
    "depositLabel": "Platzreservierung",
    "depositNote": "Bestätigt deine Teilnahme. Nicht erstattungsfähig.",
    "remainingLabel": "Restzahlung",
    "remainingNote": "Zahlbar bei der Ankunft in Marokko.",
    "bookBtn": "Meinen Platz buchen →",
    "includedTitle": "Inklusive",
    "includedItems": [
      "Hin- und Rücktransfers vom Flughafen Marrakesch",
      "Privater klimatisierter Transport während der gesamten Reise",
      "Einheimischer Fahrer und spanischsprachige Reiseleitung",
      "6 Nächte: 5 in charmanten Riads + 1 Deluxe-Camp in der Sahara",
      "Alle Frühstücke und vier Abendessen entlang der Route",
      "Kamelritt, 4×4 und Sandboarding in den Dünen",
      "Essen mit Nomaden oder Picknick in einer Oase",
      "Besichtigungen und Erlebnisse während der gesamten Reise",
      "Persönliche Begleitung durch deine Gastgeberinnen"
    ],
    "excludedTitle": "Nicht inklusive",
    "excludedItems": [
      "Internationale Flüge nach Marrakesch",
      "Mittagessen und nicht genannte Mahlzeiten",
      "Getränke und persönliche Ausgaben",
      "Trinkgelder"
    ]
  },
  "it": {
    "eyebrow": "Il tuo posto",
    "titlePrefix": "Un’esperienza riservata ",
    "titleEm": "a 12 donne",
    "titleSuffix": "",
    "ticketLabel": "Investimento totale",
    "ticketNote": "12 donne. Un unico viaggio.Sette giorni da Marrakech al Sahara.",
    "depositLabel": "Prenotazione del posto",
    "depositNote": "Conferma la tua partecipazione. Non rimborsabile.",
    "remainingLabel": "Pagamento restante",
    "remainingNote": "Da versare all’arrivo in Marocco.",
    "bookBtn": "Prenota il mio posto →",
    "includedTitle": "Include",
    "includedItems": [
      "Trasferimenti di andata e ritorno dall’aeroporto di Marrakech",
      "Trasporto privato con aria condizionata per tutto il viaggio",
      "Autista locale e guida di lingua spagnola",
      "6 notti: 5 in riad di charme + 1 campo deluxe nel Sahara",
      "Tutte le colazioni e quattro cene lungo il percorso",
      "Giro in cammello, 4×4 e sandboarding sulle dune",
      "Pasto con i nomadi o picnic in un’oasi",
      "Visite ed esperienze lungo tutto il viaggio",
      "Accompagnamento ravvicinato delle host"
    ],
    "excludedTitle": "Non include",
    "excludedItems": [
      "Voli internazionali fino a Marrakech",
      "Pranzi e pasti non specificati",
      "Bevande e spese personali",
      "Mance"
    ]
  },
  "pt": {
    "eyebrow": "O teu lugar",
    "titlePrefix": "Uma experiência reservada ",
    "titleEm": "para 12 mulheres",
    "titleSuffix": "",
    "ticketLabel": "Investimento total",
    "ticketNote": "12 mulheres. Uma mesma viagem.Sete dias de Marraquexe ao Sara.",
    "depositLabel": "Reserva do lugar",
    "depositNote": "Confirma a tua participação. Não reembolsável.",
    "remainingLabel": "Pagamento restante",
    "remainingNote": "A pagar à chegada a Marrocos.",
    "bookBtn": "Reservar o meu lugar →",
    "includedTitle": "Inclui",
    "includedItems": [
      "Transfers de ida e volta desde o aeroporto de Marraquexe",
      "Transporte privado com ar condicionado durante toda a viagem",
      "Motorista local e guia de língua espanhola",
      "6 noites: 5 em riads com encanto + 1 campo deluxe no Sara",
      "Todos os pequenos-almoços e quatro jantares ao longo da rota",
      "Passeio de camelo, 4×4 e sandboard nas dunas",
      "Refeição com nómadas ou piquenique num oásis",
      "Visitas e experiências ao longo de toda a viagem",
      "Acompanhamento próximo das anfitriãs"
    ],
    "excludedTitle": "Não inclui",
    "excludedItems": [
      "Voos internacionais até Marraquexe",
      "Almoços e refeições não especificadas",
      "Bebidas e despesas pessoais",
      "Gorjetas"
    ]
  },
  "ar": {
    "eyebrow": "مقعدك",
    "titlePrefix": "تجربة محجوزة ",
    "titleEm": "لـ 12 امرأة",
    "titleSuffix": "",
    "ticketLabel": "الاستثمار الإجمالي",
    "ticketNote": "12 امرأة. رحلة واحدة.سبعة أيام من مراكش إلى الصحراء.",
    "depositLabel": "حجز المقعد",
    "depositNote": "يؤكد مشاركتك. غير قابلة للاسترداد.",
    "remainingLabel": "الدفعة المتبقية",
    "remainingNote": "تُدفع عند الوصول إلى المغرب.",
    "bookBtn": "احجزي مقعدك ←",
    "includedTitle": "يشمل",
    "includedItems": [
      "الانتقالات ذهابًا وإيابًا من مطار مراكش",
      "نقل خاص مكيّف طوال الرحلة",
      "سائق محلي ومرشد يتحدث الإسبانية",
      "6 ليالٍ: 5 في رياضات ساحرة + 1 مخيّم فاخر في الصحراء",
      "جميع وجبات الإفطار وأربع وجبات عشاء على طول الطريق",
      "ركوب الجمال، 4×4 والتزلج على الرمال في الكثبان",
      "وجبة مع البدو الرحّل أو نزهة في واحة",
      "زيارات وتجارب على طول الرحلة",
      "مرافقة قريبة من المضيفتين"
    ],
    "excludedTitle": "لا يشمل",
    "excludedItems": [
      "الرحلات الدولية إلى مراكش",
      "وجبات الغداء والوجبات غير المحددة",
      "المشروبات والمصاريف الشخصية",
      "الإكراميات"
    ]
  },
  "ru": {
    "eyebrow": "Твоё место",
    "titlePrefix": "Опыт, зарезервированный ",
    "titleEm": "для 12 женщин",
    "titleSuffix": "",
    "ticketLabel": "Общая стоимость",
    "ticketNote": "12 женщин. Одно путешествие.Семь дней от Марракеша до Сахары.",
    "depositLabel": "Бронь места",
    "depositNote": "Подтверждает участие. Не возвращается.",
    "remainingLabel": "Остаток оплаты",
    "remainingNote": "Оплачивается по прибытии в Марокко.",
    "bookBtn": "Забронировать место →",
    "includedTitle": "Включено",
    "includedItems": [
      "Трансферы туда и обратно из аэропорта Марракеша",
      "Частный транспорт с кондиционером на всём пути",
      "Местный водитель и гид, говорящий по-испански",
      "6 ночей: 5 в риадах с характером + 1 лагерь deluxe в Сахаре",
      "Все завтраки и четыре ужина на маршруте",
      "Прогулка на верблюдах, 4×4 и сэндбординг по дюнам",
      "Обед с кочевниками или пикник в оазисе",
      "Визиты и впечатления на протяжении всего путешествия",
      "Близкое сопровождение ведущих"
    ],
    "excludedTitle": "Не включено",
    "excludedItems": [
      "Международные перелёты до Марракеша",
      "Обеды и неуказанные приёмы пищи",
      "Напитки и личные расходы",
      "Чаевые"
    ]
  },
  "es": {
    "eyebrow": "Tu plaza",
    "titlePrefix": "Una experiencia reservada ",
    "titleEm": "para 12 mujeres",
    "titleSuffix": "",
    "ticketLabel": "Inversión total",
    "ticketNote": "12 mujeres. Una misma travesía.Siete días de Marrakech al Sahara.",
    "depositLabel": "Reserva de plaza",
    "depositNote": "Confirma tu participación. No reembolsable.",
    "remainingLabel": "Pago restante",
    "remainingNote": "Se abona a la llegada a Marruecos.",
    "bookBtn": "Reservar mi plaza →",
    "includedTitle": "Incluye",
    "includedItems": [
      "Traslados de ida y vuelta desde el aeropuerto de Marrakech",
      "Transporte privado con A/C durante toda la travesía",
      "Conductor local y guía de habla hispana",
      "6 noches: 5 en riads con encanto + 1 campamento deluxe en el Sahara",
      "Todos los desayunos y cuatro cenas durante la ruta",
      "Paseo en camello, 4×4 y sandboarding en las dunas",
      "Comida con nómadas o picnic en un oasis",
      "Visitas y experiencias a lo largo de la travesía",
      "Acompañamiento cercano de las anfitrionas"
    ],
    "excludedTitle": "No incluye",
    "excludedItems": [
      "Vuelos internacionales hasta Marrakech",
      "Almuerzos y comidas no especificadas",
      "Bebidas y gastos personales",
      "Propinas"
    ]
  }
};

export default function ReserveSection({ currentLocale = "en" }: ReserveSectionProps) {
  const [displayPrice, setDisplayPrice] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const t = RESERVE_DATA[currentLocale] || RESERVE_DATA.en;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Reveal animations observer
    const revealEls = el.querySelectorAll(".reveal, .reveal-scale");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "60px 0px" }
    );

    revealEls.forEach((r) => revealObserver.observe(r));

    // Counter animation for ticket price (1500ms cubic ease-out)
    const priceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 1500;
            const target = 800;
            const start = performance.now();

            const step = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-out cubic: 1 - pow(1 - progress, 3)
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const currentVal = Math.round(easeProgress * target);

              setDisplayPrice(currentVal);

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setDisplayPrice(target);
              }
            };

            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.25 }
    );

    priceObserver.observe(el);

    return () => {
      revealObserver.disconnect();
      priceObserver.disconnect();
    };
  }, [hasAnimated]);

  return (
    <div
      ref={sectionRef}
      id="pricing"
      className="wp-block-group alignfull mda-pricing-wrap pricing"
    >
      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
        <div className="wp-block-group mda-pricing-inner">
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            {/* Header Area */}
            <div className="wp-block-group pricing__header">
              <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                <p className="eyebrow reveal wp-block-paragraph">{t.eyebrow}</p>
                <h2 className="wp-block-heading section__title reveal">
                  {t.titlePrefix}
                  {t.titleEm && <em>{t.titleEm}</em>}
                  {t.titleSuffix}
                </h2>
              </div>
            </div>

            {/* Grid Area: Floating Ticket Card + Terms Columns */}
            <div className="wp-block-group pricing__grid">
              <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                {/* Floating Ticket Card */}
                <div className="wp-block-group ticket reveal-scale">
                  <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                    <p className="ticket__label wp-block-paragraph">{t.ticketLabel}</p>
                    <p className="ticket__price wp-block-paragraph">
                      {displayPrice}
                      <sup>€</sup>
                    </p>
                    <p className="ticket__note wp-block-paragraph">
                      {t.ticketNote}
                    </p>

                    <hr className="wp-block-separator has-alpha-channel-opacity ticket__split" />

                    <div className="wp-block-group ticket__rows">
                      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                        <div className="wp-block-group ticket__row">
                          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                            <p className="ticket__dt wp-block-paragraph">{t.depositLabel}</p>
                            <p className="ticket__dd wp-block-paragraph">150 €</p>
                          </div>
                        </div>

                        <p className="ticket__small wp-block-paragraph">
                          {t.depositNote}
                        </p>

                        <div className="wp-block-group ticket__row">
                          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                            <p className="ticket__dt wp-block-paragraph">{t.remainingLabel}</p>
                            <p className="ticket__dd wp-block-paragraph">650 €</p>
                          </div>
                        </div>

                        <p className="ticket__small wp-block-paragraph">
                          {t.remainingNote}
                        </p>
                      </div>
                    </div>

                    <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
                      <div className="wp-block-button mda-btn mda-btn--primary">
                        <a
                          className="wp-block-button__link wp-element-button"
                          href="/reserve-spot"
                        >
                          {t.bookBtn}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms Column (Included & Not Included) */}
                <div className="wp-block-group terms">
                  <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                    {/* Included Block */}
                    <div className="wp-block-group terms__block reveal">
                      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                        <h3 className="wp-block-heading terms__title">{t.includedTitle}</h3>
                        <ul className="wp-block-list terms__list">
                          {t.includedItems.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Not Included Block */}
                    <div className="wp-block-group terms__block terms__block--soft reveal">
                      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                        <h3 className="wp-block-heading terms__title">{t.excludedTitle}</h3>
                        <ul className="wp-block-list terms__list">
                          {t.excludedItems.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
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
  );
}
