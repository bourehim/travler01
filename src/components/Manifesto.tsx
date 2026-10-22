"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Locale } from "@/data/translations";

interface ManifestoProps {
  currentLocale?: Locale;
}

const MANIFESTO_CONTENT: Record<
  Locale,
  {
    manifestoEyebrow: string;
    quotePrefix: string;
    quoteEm: string;
    essentials: { target: number; label: string }[];
    aboutEyebrow: string;
    aboutTitleLine1: string;
    aboutTitleEm: string;
    aboutTitleLine2: string;
    aboutP1: string;
    aboutP2: string;
    aboutQuoteLine1: string;
    aboutQuoteLine2: string;
    aboutQuoteLine3: string;
    aboutClosing: string;
    aboutCaption: string;
  }
> = {
  en: {
    manifestoEyebrow: "It isn’t a getaway, it’s a journey",
    quotePrefix: "Some journeys take you to a place. And others take you ",
    quoteEm: "back to yourself.",
    essentials: [
      { target: 7, label: "7 days of travel" },
      { target: 12, label: "Women" },
      { target: 6, label: "Nights" },
      { target: 1, label: "Desert" },
    ],
    aboutEyebrow: "What is Mujeres de Arena?",
    aboutTitleLine1: "It isn't an organised trip.",
    aboutTitleEm: "journey",
    aboutTitleLine2: " created from the heart.",
    aboutP1:
      "Mujeres de Arena was born for women who feel the call to step outside the familiar, to make room for adventure and to allow themselves to live a real experience. No impossible schedules, no scripted minutes.",
    aboutP2:
      "Seven days travelling through Morocco across vibrant cities, mountains, ancestral kasbahs, valleys full of history and the immensity of the Sahara. A space to discover new landscapes, to share the road with other women and to feel again the thrill of experiencing something for the first time.",
    aboutQuoteLine1: "Because sometimes transformation doesn't happen in a room.",
    aboutQuoteLine2: "It happens on the road. In an unexpected conversation.",
    aboutQuoteLine3: "In a different sunrise.",
    aboutClosing: "And also inside you.",
    aboutCaption: "The journey begins when you say yes",
  },
  es: {
    manifestoEyebrow: "No es una escapada, es una travesía",
    quotePrefix: "Hay viajes que te llevan a un lugar. Y hay otros que te llevan ",
    quoteEm: "de vuelta a ti.",
    essentials: [
      { target: 7, label: "7 días de travesía" },
      { target: 12, label: "Mujeres" },
      { target: 6, label: "Noches" },
      { target: 1, label: "Desierto" },
    ],
    aboutEyebrow: "¿Qué es Mujeres de Arena?",
    aboutTitleLine1: "No es un viaje organizado.",
    aboutTitleEm: "travesía",
    aboutTitleLine2: " creada desde el corazón.",
    aboutP1:
      "Mujeres de Arena nace para mujeres que sienten la llamada de salir de lo conocido, abrir espacio a la aventura y permitirse vivir una experiencia real. Sin horarios imposibles, sin minutos programados.",
    aboutP2:
      "Siete días recorriendo Marruecos a través de ciudades vibrantes, montañas, kasbahs ancestrales, valles llenos de historia y la inmensidad del Sahara. Un espacio para descubrir nuevos paisajes, compartir camino con otras mujeres y volver a sentir la emoción de vivir algo por primera vez.",
    aboutQuoteLine1: "Porque a veces la transformación no ocurre en una sala.",
    aboutQuoteLine2: "Ocurre en el camino. En una conversación inesperada.",
    aboutQuoteLine3: "En un amanecer diferente.",
    aboutClosing: "Y también dentro de ti.",
    aboutCaption: "El viaje comienza cuando dices que sí",
  },
  fr: {
    manifestoEyebrow: "Ce n'est pas une escapade, c'est un voyage",
    quotePrefix: "Certains voyages vous mènent quelque part. Et d'autres vous mènent ",
    quoteEm: "à vous-même.",
    essentials: [
      { target: 7, label: "7 jours de voyage" },
      { target: 12, label: "Femmes" },
      { target: 6, label: "Nuits" },
      { target: 1, label: "Désert" },
    ],
    aboutEyebrow: "Qu'est-ce que Mujeres de Arena ?",
    aboutTitleLine1: "Ce n'est pas un voyage organisé.",
    aboutTitleEm: "chemin",
    aboutTitleLine2: " créé avec le cœur.",
    aboutP1:
      "Mujeres de Arena est né pour les femmes qui entendent l'appel de sortir du connu, de faire de la place à l'aventure et de s'offrir une expérience vraie. Sans horaires impossibles, sans minutes programmées.",
    aboutP2:
      "Sept jours à travers le Maroc, entre villes vibrantes, montagnes, kasbahs ancestrales, vallées chargées d'histoire et l'immensité du Sahara. Un espace pour découvrir de nouveaux paysages, partager la route avec d'autres femmes et retrouver l'émotion de vivre quelque chose pour la première fois.",
    aboutQuoteLine1: "Parce que parfois, la transformation ne se produit pas dans une salle.",
    aboutQuoteLine2: "Elle se produit sur la route. Dans une conversation inattendue.",
    aboutQuoteLine3: "Dans un lever de soleil différent.",
    aboutClosing: "Et aussi à l'intérieur de vous.",
    aboutCaption: "Le voyage commence quand vous dites oui",
  },
  de: {
    manifestoEyebrow: "Kein Kurzurlaub, sondern eine Reise",
    quotePrefix: "Manche Reisen bringen dich an einen Ort. Und andere bringen dich ",
    quoteEm: "zurück zu dir selbst.",
    essentials: [
      { target: 7, label: "7 Tage unterwegs" },
      { target: 12, label: "Frauen" },
      { target: 6, label: "Nächte" },
      { target: 1, label: "Wüste" },
    ],
    aboutEyebrow: "Was ist Mujeres de Arena?",
    aboutTitleLine1: "Das ist keine organisierte Reise.",
    aboutTitleEm: "Reise",
    aboutTitleLine2: " aus dem Herzen heraus.",
    aboutP1:
      "Mujeres de Arena entstand für Frauen, die den Ruf spüren, aus dem Vertrauten herauszutreten, der Abenteuerlust Raum zu geben und sich eine echte Erfahrung zu erlauben. Ohne unmögliche Zeitpläne, ohne durchgetaktete Minuten.",
    aboutP2:
      "Sieben Tage durch Marokko — durch lebendige Städte, Berge, alte Kasbahs, geschichtsträchtige Täler und die Weite der Sahara. Ein Raum, um neue Landschaften zu entdecken, den Weg mit anderen Frauen zu teilen und wieder die Aufregung zu spüren, etwas zum ersten Mal zu erleben.",
    aboutQuoteLine1: "Denn manchmal geschieht Veränderung nicht in einem Raum.",
    aboutQuoteLine2: "Sie geschieht unterwegs. In einem unerwarteten Gespräch.",
    aboutQuoteLine3: "In einem anderen Sonnenaufgang.",
    aboutClosing: "Und auch in dir.",
    aboutCaption: "Die Reise beginnt, wenn du Ja sagst",
  },
  it: {
    manifestoEyebrow: "Non è una fuga, è un viaggio",
    quotePrefix: "Alcuni viaggi ti portano in un luogo. E altri ti portano ",
    quoteEm: "di nuovo a te stessa.",
    essentials: [
      { target: 7, label: "7 giorni di viaggio" },
      { target: 12, label: "Donne" },
      { target: 6, label: "Notti" },
      { target: 1, label: "Deserto" },
    ],
    aboutEyebrow: "Che cos'è Mujeres de Arena?",
    aboutTitleLine1: "Non è un viaggio organizzato.",
    aboutTitleEm: "percorso",
    aboutTitleLine2: " creato con il cuore.",
    aboutP1:
      "Mujeres de Arena nasce per donne che sentono il richiamo di uscire dal conosciuto, di fare spazio all'avventura e di concedersi un'esperienza vera. Senza orari impossibili, senza minuti programmati.",
    aboutP2:
      "Sette giorni attraversando il Marocco tra città vibranti, montagne, kasbah ancestrali, valli piene di storia e l'immensità del Sahara. Uno spazio per scoprire nuovi paesaggi, condividere la strada con altre donne e tornare a sentire l'emozione di vivere qualcosa per la prima volta.",
    aboutQuoteLine1: "Perché a volte la trasformazione non avviene in una stanza.",
    aboutQuoteLine2: "Avviene lungo la strada. In una conversazione inattesa.",
    aboutQuoteLine3: "In un'alba diversa.",
    aboutClosing: "E anche dentro di te.",
    aboutCaption: "Il viaggio comincia quando dici sì",
  },
  pt: {
    manifestoEyebrow: "Não é uma escapadinha, é uma viagem",
    quotePrefix: "Há viagens que te levam a um lugar. E há outras que te levam ",
    quoteEm: "de volta a ti.",
    essentials: [
      { target: 7, label: "7 dias de viagem" },
      { target: 12, label: "Mulheres" },
      { target: 6, label: "Noites" },
      { target: 1, label: "Deserto" },
    ],
    aboutEyebrow: "O que é o Mujeres de Arena?",
    aboutTitleLine1: "Não é uma viagem organizada.",
    aboutTitleEm: "viagem",
    aboutTitleLine2: " criada a partir do coração.",
    aboutP1:
      "O Mujeres de Arena nasceu para mulheres que sentem o chamamento de sair do conhecido, abrir espaço à aventura e permitir-se viver uma experiência verdadeira. Sem horários impossíveis, sem minutos programados.",
    aboutP2:
      "Sete dias a percorrer Marrocos por cidades vibrantes, montanhas, kasbahs ancestrais, vales cheios de história e a imensidão do Sara. Um espaço para descobrir novas paisagens, partilhar o caminho com outras mulheres e voltar a sentir a emoção de viver algo pela primeira vez.",
    aboutQuoteLine1: "Porque às vezes a transformação não acontece numa sala.",
    aboutQuoteLine2: "Acontece no caminho. Numa conversa inesperada.",
    aboutQuoteLine3: "Num amanhecer diferente.",
    aboutClosing: "E também dentro de ti.",
    aboutCaption: "A viagem começa quando dizes que sim",
  },
  ar: {
    manifestoEyebrow: "ليست نزهة عابرة، بل رحلة",
    quotePrefix: "هناك رحلات تأخذك إلى مكان. وهناك رحلات أخرى تأخذك ",
    quoteEm: "إلى داخلك.",
    essentials: [
      { target: 7, label: "7 أيام من الرحلة" },
      { target: 12, label: "نساء" },
      { target: 6, label: "ليالٍ" },
      { target: 1, label: "صحراء" },
    ],
    aboutEyebrow: "ما هو Mujeres de Arena؟",
    aboutTitleLine1: "إنها ليست رحلة منظّمة.",
    aboutTitleEm: "رحلة",
    aboutTitleLine2: " خُلقت من القلب.",
    aboutP1:
      "وُلد Mujeres de Arena لنساء يشعرن بالنداء إلى الخروج من المألوف، وإفساح المجال للمغامرة، ومنح أنفسهن تجربة حقيقية. بلا جداول مستحيلة، وبلا دقائق مبرمجة.",
    aboutP2:
      "سبعة أيام عبر المغرب، بين مدن نابضة بالحياة وجبال وقصبات عريقة ووديان مليئة بالتاريخ وامتداد الصحراء اللامتناهي. مساحة لاكتشاف مشاهد جديدة، ومشاركة الطريق مع نساء أخريات، والاستعادة من جديد لدهشة تجربة شيء للمرة الأولى.",
    aboutQuoteLine1: "لأن التحوّل أحيانًا لا يحدث داخل قاعة.",
    aboutQuoteLine2: "يحدث على الطريق. في حديث غير متوقّع.",
    aboutQuoteLine3: "في شروق مختلف.",
    aboutClosing: "وفي داخلك أيضًا.",
    aboutCaption: "تبدأ الرحلة حين تقولين نعم",
  },
  ru: {
    manifestoEyebrow: "Это не отдых на выходные, это путешествие",
    quotePrefix: "Есть путешествия, которые приводят тебя в какое-то место. А есть те, что приводят тебя ",
    quoteEm: "обратно к себе.",
    essentials: [
      { target: 7, label: "7 дней в пути" },
      { target: 12, label: "Женщин" },
      { target: 6, label: "Ночей" },
      { target: 1, label: "Пустыня" },
    ],
    aboutEyebrow: "Что такое Mujeres de Arena?",
    aboutTitleLine1: "Это не организованная поездка.",
    aboutTitleEm: "путешествие",
    aboutTitleLine2: " созданное от сердца.",
    aboutP1:
      "Mujeres de Arena создан для женщин, которые слышат зов выйти за пределы привычного, дать место приключению и позволить себе настоящий опыт. Без невозможных графиков, без расписанных по минутам дней.",
    aboutP2:
      "Семь дней по Марокко: живые города, горы, древние касбы, полные истории долины и безграничная Сахара. Пространство, чтобы увидеть новые пейзажи, разделить путь с другими женщинами и снова почувствовать волнение от чего-то впервые.",
    aboutQuoteLine1: "Потому что иногда преображение происходит не в зале.",
    aboutQuoteLine2: "Оно происходит в пути. В неожиданном разговоре.",
    aboutQuoteLine3: "В другом рассвете.",
    aboutClosing: "И внутри тебя тоже.",
    aboutCaption: "Путешествие начинается, когда ты говоришь «да»",
  },
};

export default function Manifesto({ currentLocale = "en" }: ManifestoProps) {
  const [isManifestoVisible, setIsManifestoVisible] = useState(false);
  const [isEssentialsVisible, setIsEssentialsVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const manifestoRef = useRef<HTMLDivElement | null>(null);
  const essentialsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const hasAnimatedRef = useRef(false);

  const c = MANIFESTO_CONTENT[currentLocale] || MANIFESTO_CONTENT.en;
  const isRtl = currentLocale === "ar";

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      setIsManifestoVisible(true);
      setIsEssentialsVisible(true);
      setIsAboutVisible(true);
      setCounts([7, 12, 6, 1]);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === manifestoRef.current) {
              setIsManifestoVisible(true);
            }
            if (entry.target === essentialsRef.current) {
              setIsEssentialsVisible(true);
            }
            if (entry.target === aboutRef.current) {
              setIsAboutVisible(true);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "60px 0px -20px 0px" }
    );

    if (manifestoRef.current) observer.observe(manifestoRef.current);
    if (essentialsRef.current) observer.observe(essentialsRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isEssentialsVisible && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      const targets = [7, 12, 6, 1];
      const duration = 1500;
      const start = performance.now();

      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setCounts(targets.map((t) => Math.round(t * eased)));
        if (p < 1) {
          requestAnimationFrame(tick);
        }
      };
      requestAnimationFrame(tick);
    }
  }, [isEssentialsVisible]);

  // Construct quote split-words
  const prefixWords = c.quotePrefix.trim().split(/\s+/);
  const emWords = c.quoteEm.trim().split(/\s+/);

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      {/* 1. Manifesto Quote Section */}
      <div
        ref={manifestoRef}
        className={`wp-block-group alignfull mda-manifesto-wrap manifesto ${
          isManifestoVisible ? "is-visible" : ""
        }`}
      >
        <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
          <div className="wp-block-group mda-manifesto-inner">
            <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
              <p
                className={`manifesto__eyebrow reveal wp-block-paragraph ${
                  isManifestoVisible ? "is-visible" : ""
                }`}
                style={{ "--i": 0 } as React.CSSProperties}
              >
                {c.manifestoEyebrow}
              </p>

              <p
                className={`manifesto__quote split-words reveal wp-block-paragraph ${
                  isManifestoVisible ? "is-visible" : ""
                }`}
                style={{ "--i": 1 } as React.CSSProperties}
              >
                {prefixWords.map((word, i) => (
                  <React.Fragment key={i}>
                    <span
                      className="word"
                      style={{ "--w": i } as React.CSSProperties}
                    >
                      {word}
                    </span>{" "}
                  </React.Fragment>
                ))}
                <em>
                  {emWords.map((word, j) => (
                    <React.Fragment key={`em-${j}`}>
                      <span
                        className="word"
                        style={
                          {
                            "--w": prefixWords.length + j,
                          } as React.CSSProperties
                        }
                      >
                        {word}
                      </span>
                      {j < emWords.length - 1 ? " " : ""}
                    </React.Fragment>
                  ))}
                </em>
              </p>

              <p
                className={`manifesto__mark reveal wp-block-paragraph ${
                  isManifestoVisible ? "is-visible" : ""
                }`}
                style={{ "--i": 2 } as React.CSSProperties}
              >
                ✦
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Essentials Key Figures Counter Grid */}
      <div
        ref={essentialsRef}
        className="wp-block-group alignfull mda-essentials-wrap essentials"
      >
        <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
          <div className="wp-block-group mda-essentials-inner">
            <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
              <div className="wp-block-group essentials__grid">
                <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                  {c.essentials.map((item, idx) => (
                    <div
                      key={idx}
                      className={`wp-block-group essential reveal ${
                        isEssentialsVisible ? "is-visible" : ""
                      }`}
                      style={{ "--i": idx } as React.CSSProperties}
                    >
                      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                        <p className="essential__label wp-block-paragraph">
                          {item.label}
                        </p>
                        <p
                          className="essential__value wp-block-paragraph"
                          data-count={item.target}
                        >
                          {counts[idx]}
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

      {/* 3. About Section (#about) */}
      <div
        id="about"
        ref={aboutRef}
        className={`wp-block-group alignfull mda-about-wrap about ${
          isAboutVisible ? "is-visible" : ""
        }`}
      >
        <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
          <div className="wp-block-group mda-about-inner">
            <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
              <div className="wp-block-group about__grid">
                {/* Left Column Text */}
                <div className="wp-block-group about__text">
                  <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                    <p
                      className={`eyebrow reveal wp-block-paragraph ${
                        isAboutVisible ? "is-visible" : ""
                      }`}
                      style={{ "--i": 0 } as React.CSSProperties}
                    >
                      {c.aboutEyebrow}
                    </p>

                    <h2
                      className={`wp-block-heading about__title reveal ${
                        isAboutVisible ? "is-visible" : ""
                      }`}
                      style={{ "--i": 1 } as React.CSSProperties}
                    >
                      {c.aboutTitleLine1}
                      <br />
                      <em>{c.aboutTitleEm}</em>
                      {c.aboutTitleLine2}
                    </h2>

                    <p
                      className={`reveal wp-block-paragraph ${
                        isAboutVisible ? "is-visible" : ""
                      }`}
                      style={{ "--i": 2 } as React.CSSProperties}
                    >
                      {c.aboutP1}
                    </p>

                    <p
                      className={`reveal wp-block-paragraph ${
                        isAboutVisible ? "is-visible" : ""
                      }`}
                      style={{ "--i": 3 } as React.CSSProperties}
                    >
                      {c.aboutP2}
                    </p>

                    <blockquote
                      className={`wp-block-quote about__quote reveal is-layout-flow wp-block-quote-is-layout-flow ${
                        isAboutVisible ? "is-visible" : ""
                      }`}
                      style={{ "--i": 4 } as React.CSSProperties}
                    >
                      <p>
                        {c.aboutQuoteLine1}
                        <br />
                        {c.aboutQuoteLine2}
                        <br />
                        {c.aboutQuoteLine3}
                      </p>
                    </blockquote>

                    <p
                      className={`about__closing reveal wp-block-paragraph ${
                        isAboutVisible ? "is-visible" : ""
                      }`}
                      style={{ "--i": 5 } as React.CSSProperties}
                    >
                      {c.aboutClosing}
                    </p>
                  </div>
                </div>

                {/* Right Column Media with Arch Window */}
                <div
                  className={`wp-block-group about__media reveal-scale ${
                    isAboutVisible ? "is-visible" : ""
                  }`}
                >
                  <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                    <div className="wp-block-group arch">
                      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                        <figure className="wp-block-image size-full">
                          <Image
                            src="/images/marrakech-woman.jpg"
                            alt="Woman in flowing dress contemplating a valley from a mountain"
                            width={440}
                            height={550}
                            priority
                            className="object-cover"
                          />
                        </figure>
                      </div>
                    </div>

                    <p className="about__caption wp-block-paragraph">
                      <span className="about__caption-dot" aria-hidden="true" />
                      {c.aboutCaption}
                    </p>
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
