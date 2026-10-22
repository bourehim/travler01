"use client";

import React, { useEffect, useRef } from "react";
import { Locale } from "@/data/translations";

interface PracticalSectionProps {
  currentLocale?: Locale;
}

const PRACTICAL_DATA: Record<Locale, {
  eyebrow: string;
  titlePrefix: string;
  titleEm: string;
  titleSuffix: string;
  cards: { type: string; title: string; text: string }[];
}> = {
  "en": {
    "eyebrow": "Before you go",
    "titlePrefix": "Practical details so that you ",
    "titleEm": "arrive with peace of mind",
    "titleSuffix": "",
    "cards": [
      {
        "type": "luggage",
        "title": "Luggage",
        "text": "In September it will be hot during the day and cool at night, especially in the desert. Before the trip you will receive a practical guide with a suggested packing list."
      },
      {
        "type": "currency",
        "title": "Currency",
        "text": "The official currency is the Moroccan dirham. Once there we will help you exchange money or handle anything you need."
      },
      {
        "type": "internet",
        "title": "Internet and coverage",
        "text": "On arrival we will stop to buy a local SIM card. In some desert areas the signal can be limited."
      },
      {
        "type": "flights",
        "title": "Flights",
        "text": "Each participant arranges their own ticket to Marrakech. Once your place is confirmed we will coordinate schedules and arrivals with the group."
      },
      {
        "type": "passport",
        "title": "Passport & Visas",
        "text": "A passport valid for at least 6 months beyond travel dates is required. Citizens of the EU, UK, USA, Canada, and many other nations do not require a tourist visa for stays up to 90 days."
      },
      {
        "type": "dates",
        "title": "Dates",
        "text": "23 — 29 Sep 2026. First edition Mujeres de Arena — home — An experience reserved for 12 women."
      }
    ]
  },
  "fr": {
    "eyebrow": "Avant de partir",
    "titlePrefix": "Des détails pratiques pour que vous ",
    "titleEm": "partiez en toute tranquillité",
    "titleSuffix": "",
    "cards": [
      {
        "type": "luggage",
        "title": "Bagages",
        "text": "En septembre, il fera chaud le jour et frais la nuit, surtout dans le désert. Avant le départ, vous recevrez un guide pratique avec une liste indicative pour préparer votre valise."
      },
      {
        "type": "currency",
        "title": "Monnaie",
        "text": "La monnaie officielle est le dirham marocain. Une fois sur place, nous vous aiderons à changer de l’argent ou à effectuer toute démarche nécessaire."
      },
      {
        "type": "internet",
        "title": "Internet et couverture",
        "text": "À l’arrivée, nous ferons une halte pour acheter une carte SIM locale. Dans certaines zones du désert, le réseau peut être limité."
      },
      {
        "type": "flights",
        "title": "Vols",
        "text": "Chaque participante gère son propre billet jusqu’à Marrakech. Une fois votre place confirmée, nous coordonnerons les horaires et les arrivées avec le groupe."
      },
      {
        "type": "passport",
        "title": "Passeport et visas",
        "text": "Un passeport valable au moins 6 mois après la date du voyage est requis. Les citoyennes de l’UE et de nombreux autres pays n’ont pas besoin de visa touristique pour les séjours jusqu’à 90 jours."
      },
      {
        "type": "dates",
        "title": "Dates",
        "text": "23 — 29 sep 2026. Première édition Mujeres de Arena — accueil — Une expérience réservée à 12 femmes."
      }
    ]
  },
  "de": {
    "eyebrow": "Bevor du losfliegst",
    "titlePrefix": "Praktische Details, damit du ",
    "titleEm": "gelassen ankommst",
    "titleSuffix": "",
    "cards": [
      {
        "type": "luggage",
        "title": "Gepäck",
        "text": "Im September wird es tagsüber heiß und nachts kühl, besonders in der Wüste. Vor der Reise erhältst du einen praktischen Leitfaden mit einer Orientierungsliste für deinen Koffer."
      },
      {
        "type": "currency",
        "title": "Währung",
        "text": "Die offizielle Währung ist der marokkanische Dirham. Vor Ort helfen wir dir, Geld zu wechseln oder alles Nötige zu erledigen."
      },
      {
        "type": "internet",
        "title": "Internet und Netz",
        "text": "Bei der Ankunft machen wir Halt, um eine lokale SIM-Karte zu kaufen. In einigen Wüstengebieten kann das Netz eingeschränkt sein."
      },
      {
        "type": "flights",
        "title": "Flüge",
        "text": "Jede Teilnehmerin organisiert ihr eigenes Ticket nach Marrakesch. Sobald dein Platz bestätigt ist, stimmen wir Zeiten und Ankünfte mit der Gruppe ab."
      },
      {
        "type": "passport",
        "title": "Reisepass & Visa",
        "text": "Ein Reisepass, der ab dem Reisedatum noch mindestens 6 Monate gültig ist, ist erforderlich. EU-Bürgerinnen und viele weitere Nationalitäten benötigen kein Touristenvisum für Aufenthalte bis zu 90 Tagen."
      },
      {
        "type": "dates",
        "title": "Termine",
        "text": "23. — 29. Sept. 2026. Erste Ausgabe Mujeres de Arena — Start — Eine Erfahrung reserviert für 12 Frauen."
      }
    ]
  },
  "it": {
    "eyebrow": "Prima di partire",
    "titlePrefix": "Dettagli pratici perché tu ",
    "titleEm": "arrivi con serenità",
    "titleSuffix": "",
    "cards": [
      {
        "type": "luggage",
        "title": "Bagaglio",
        "text": "A settembre farà caldo di giorno e fresco di notte, soprattutto nel deserto. Prima del viaggio riceverai una guida pratica con una lista indicativa per preparare la valigia."
      },
      {
        "type": "currency",
        "title": "Valuta",
        "text": "La valuta ufficiale è il dirham marocchino. Una volta sul posto ti aiuteremo a cambiare denaro o a svolgere qualsiasi pratica ti serva."
      },
      {
        "type": "internet",
        "title": "Internet e copertura",
        "text": "All’arrivo faremo una sosta per acquistare una SIM locale. In alcune zone del deserto il segnale può essere limitato."
      },
      {
        "type": "flights",
        "title": "Voli",
        "text": "Ogni partecipante gestisce il proprio biglietto fino a Marrakech. Una volta confermato il tuo posto, coordineremo orari e arrivi con il gruppo."
      },
      {
        "type": "passport",
        "title": "Passaporto e visti",
        "text": "È necessario un passaporto con validità residua di almeno 6 mesi dalla data del viaggio. I cittadini dell’UE non necessitano di visto turistico per soggiorni fino a 90 giorni."
      },
      {
        "type": "dates",
        "title": "Date",
        "text": "23 — 29 set 2026. Prima edizione Mujeres de Arena — home — Un’esperienza riservata a 12 donne."
      }
    ]
  },
  "pt": {
    "eyebrow": "Antes de partir",
    "titlePrefix": "Detalhes práticos para que ",
    "titleEm": "chegues com tranquilidade",
    "titleSuffix": "",
    "cards": [
      {
        "type": "luggage",
        "title": "Bagagem",
        "text": "Em setembro fará calor durante o dia e frescura à noite, sobretudo no deserto. Antes da viagem receberás um guia prático com uma lista orientadora para preparar a mala."
      },
      {
        "type": "currency",
        "title": "Moeda",
        "text": "A moeda oficial é o dirham marroquino. Uma vez lá, ajudaremos a trocar dinheiro ou a tratar de qualquer assunto que precises."
      },
      {
        "type": "internet",
        "title": "Internet e cobertura",
        "text": "À chegada faremos uma paragem para adquirir um cartão SIM local. Em algumas zonas do deserto o sinal pode ser limitado."
      },
      {
        "type": "flights",
        "title": "Voos",
        "text": "Cada participante trata do seu próprio bilhete até Marraquexe. Assim que o teu lugar estiver confirmado, coordenaremos horários e chegadas com o grupo."
      },
      {
        "type": "passport",
        "title": "Passaporte e vistos",
        "text": "É necessário um passaporte válido por pelo menos 6 meses após a data da viagem. Cidadãs da UE e de muitos outros países não necessitam de visto turístico para estadias de até 90 dias."
      },
      {
        "type": "dates",
        "title": "Datas",
        "text": "23 — 29 set 2026. Primeira edição Mujeres de Arena — início — Uma experiência reservada para 12 mulheres."
      }
    ]
  },
  "ar": {
    "eyebrow": "قبل الرحيل",
    "titlePrefix": "تفاصيل عملية كي ",
    "titleEm": "تصل بيُسر وطمأنينة",
    "titleSuffix": "",
    "cards": [
      {
        "type": "luggage",
        "title": "الأمتعة",
        "text": "في سبتمبر سيكون الجو حارًا نهارًا ولطيفًا ليلًا، وبخاصة في الصحراء. قبل الرحلة ستتلقّين دليلًا عمليًا مع قائمة إرشادية لتحضير حقيبتك."
      },
      {
        "type": "currency",
        "title": "العملة",
        "text": "العملة الرسمية هي الدرهم المغربي. وبعد الوصول سنساعدك في صرف النقود أو إنجاز أي إجراء تحتاجينه."
      },
      {
        "type": "internet",
        "title": "الإنترنت والتغطية",
        "text": "عند الوصول سنتوقف لشراء شريحة اتصال محلية. في بعض مناطق الصحراء قد تكون التغطية محدودة."
      },
      {
        "type": "flights",
        "title": "الرحلات الجوية",
        "text": "كل مشاركة تتولّى حجز تذكرتها إلى مراكش. وبعد تأكيد مقعدك سننسّق المواعيد وأوقات الوصول مع المجموعة."
      },
      {
        "type": "passport",
        "title": "جواز السفر والتأشيرات",
        "text": "يلزم جواز سفر ساري المفعول لمدة لا تقل عن 6 أشهر بعد تواريخ السفر. لا يحتاج مواطنو العديد من الدول إلى تأشيرة سياحية للإقامات التي تقل عن 90 يومًا."
      },
      {
        "type": "dates",
        "title": "التواريخ",
        "text": "23 — 29 سبتمبر 2026. الطبعة الأولى Mujeres de Arena — الصفحة الرئيسية — تجربة محجوزة لـ 12 امرأة."
      }
    ]
  },
  "ru": {
    "eyebrow": "Перед отъездом",
    "titlePrefix": "Практические детали, чтобы ты ",
    "titleEm": "приехала спокойно",
    "titleSuffix": "",
    "cards": [
      {
        "type": "luggage",
        "title": "Багаж",
        "text": "В сентябре днём будет жарко, а ночью прохладно, особенно в пустыне. Перед поездкой ты получишь практическое руководство с примерным списком для сбора чемодана."
      },
      {
        "type": "currency",
        "title": "Валюта",
        "text": "Официальная валюта — марокканский дирхам. На месте мы поможем обменять деньги или решить любой вопрос."
      },
      {
        "type": "internet",
        "title": "Интернет и связь",
        "text": "По прибытии мы сделаем остановку, чтобы купить местную SIM-карту. В некоторых районах пустыни сигнал может быть ограничен."
      },
      {
        "type": "flights",
        "title": "Перелёты",
        "text": "Каждая участница сама покупает билет до Марракеша. После подтверждения места мы согласуем время и прилёты с группой."
      },
      {
        "type": "passport",
        "title": "Паспорт и визы",
        "text": "Необходим загранпаспорт, действительный не менее 6 месяцев с даты поездки. Гражданам многих стран туристическая виза на срок до 90 дней не требуется."
      },
      {
        "type": "dates",
        "title": "Даты",
        "text": "23 — 29 сент. 2026. Первый выпуск Mujeres de Arena — начало — Опыт, зарезервированный для 12 женщин."
      }
    ]
  },
  "es": {
    "eyebrow": "Antes de partir",
    "titlePrefix": "Detalles prácticos para que ",
    "titleEm": "llegues con tranquilidad",
    "titleSuffix": "",
    "cards": [
      {
        "type": "luggage",
        "title": "Equipaje",
        "text": "En septiembre hará calor durante el día y frescor por la noche, sobre todo en el desierto. Antes del viaje recibirás una guía práctica con una lista orientativa para preparar tu maleta."
      },
      {
        "type": "currency",
        "title": "Moneda",
        "text": "La moneda oficial es el dirham marroquí. Una vez allí te ayudaremos a cambiar dinero o realizar cualquier gestión que necesites."
      },
      {
        "type": "internet",
        "title": "Internet y cobertura",
        "text": "A la llegada haremos una parada para adquirir una tarjeta SIM local. En algunas zonas del desierto la señal puede ser limitada."
      },
      {
        "type": "flights",
        "title": "Vuelos",
        "text": "Cada participante gestiona su billete hasta Marrakech. Una vez confirmada tu plaza coordinaremos horarios y llegadas con el grupo."
      },
      {
        "type": "passport",
        "title": "Pasaporte y visados",
        "text": "Es necesario tener el pasaporte en vigor con una validez mínima de 6 meses desde la fecha del viaje. No se requiere visado para estancias turísticas de hasta 90 días para ciudadanas de la UE y muchos otros países."
      },
      {
        "type": "dates",
        "title": "Fechas",
        "text": "23 — 29 Sep 2026. Primera edición Mujeres de Arena — inicio — Una experiencia reservada para 12 mujeres."
      }
    ]
  }
};

export default function PracticalSection({ currentLocale = "en" }: PracticalSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const t = PRACTICAL_DATA[currentLocale] || PRACTICAL_DATA.en;

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
      { threshold: 0.05, rootMargin: "60px 0px" }
    );

    revealEls.forEach((r) => observer.observe(r));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="practico"
      className="wp-block-group alignfull mda-practical-wrap practical"
    >
      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
        <div className="wp-block-group mda-practical-inner">
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            {/* Header */}
            <div className="wp-block-group practical__header">
              <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                <p className="eyebrow reveal wp-block-paragraph">
                  {t.eyebrow}
                </p>
                <h2 className="wp-block-heading section__title reveal">
                  {t.titlePrefix}
                  {t.titleEm && <em>{t.titleEm}</em>}
                  {t.titleSuffix}
                </h2>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="wp-block-group info">
              <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                {t.cards.map((card, index) => (
                  <div
                    key={card.type}
                    className={`wp-block-group info__card info__card--${card.type} reveal`}
                    style={{ "--i": index } as React.CSSProperties}
                  >
                    <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                      <h3 className="wp-block-heading info__title">
                        {card.title}
                      </h3>
                      <p className="info__text wp-block-paragraph">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
