"use client";

import React, { useState, useEffect, useRef } from "react";
import { Locale } from "@/data/translations";

interface NightSectionProps {
  currentLocale?: Locale;
}

const NIGHT_CONTENT: Record<Locale, {
  eyebrow: string;
  titlePrefix: string;
  titleEm: string;
  p1: string;
  p2: string;
}> = {
  en: {
    eyebrow: "Under the stars · Erg Chebbi",
    titlePrefix: "The magic that never appears in ",
    titleEm: "photographs",
    p1: "The immensity of the day gives way to a calm that is hard to describe. No activities. No obligations. Nothing to prove. Only the privilege of being there, of sharing the road with other women and of letting the experience do its work.",
    p2: "Because some of the most important conversations of our lives happen precisely when we stop trying to force them.",
  },
  es: {
    eyebrow: "Bajo las estrellas · Erg Chebbi",
    titlePrefix: "La magia que no aparece en las ",
    titleEm: "fotografías",
    p1: "La inmensidad del día da paso a una calma difícil de describir. No hay dinámicas. No hay obligaciones. No hay nada que demostrar. Solo el privilegio de estar allí, de compartir el camino con otras mujeres y de permitir que la experiencia haga su trabajo.",
    p2: "Porque algunas de las conversaciones más importantes de nuestra vida ocurren precisamente cuando dejamos de intentar provocarlas.",
  },
  fr: {
    eyebrow: "Sous les étoiles · Erg Chebbi",
    titlePrefix: "La magie qui n’apparaît pas sur les ",
    titleEm: "photographies",
    p1: "L’immensité du jour laisse place à un calme difficile à décrire. Pas d’activités obligatoires. Rien à prouver. Seulement le privilège d'être là, de partager la route avec d'autres femmes et de laisser l'expérience opérer.",
    p2: "Parce que certaines des conversations les plus importantes de nos vies naissent précisément lorsque nous cessons de vouloir les forcer.",
  },
  de: {
    eyebrow: "Unter den Sternen · Erg Chebbi",
    titlePrefix: "Die Magie, die nicht erscheint auf den ",
    titleEm: "Fotos",
    p1: "Die Weite des Tages weicht einer Ruhe, die schwer zu beschreiben ist. Keine Aktivitäten. Keine Pflichten. Nichts zu beweisen. Nur das Privileg, dort zu sein, den Weg mit anderen Frauen zu teilen und der Erfahrung ihren Raum zu geben.",
    p2: "Denn manche der wichtigsten Gespräche unseres Lebens entstehen genau dann, wenn wir aufhören, sie erzwingen zu wollen.",
  },
  it: {
    eyebrow: "Sotto le stelle · Erg Chebbi",
    titlePrefix: "La magia che non compare nelle ",
    titleEm: "fotografie",
    p1: "L’immensità del giorno lascia spazio a una calma difficile da descrivere. Nessuna attività obbligatoria. Nessun dovere. Niente da dimostrare. Solo il privilegio di essere lì, di condividere la strada con altre donne e di lasciare che l'esperienza faccia il suo corso.",
    p2: "Perché alcune delle conversazioni più importanti della nostra vita accadono proprio quando smettiamo di forzarle.",
  },
  pt: {
    eyebrow: "Sob as estrelas · Erg Chebbi",
    titlePrefix: "A magia que não aparece nas ",
    titleEm: "fotografias",
    p1: "A imensidão do dia dá lugar a uma calma difícil de descrever. Sem obrigações. Nada a provar. Apenas o privilégio de lá estar, de partilhar o caminho com outras mulheres e permitir que a vivência faça o seu trabalho.",
    p2: "Porque algumas das conversas mais marcantes das nossas vidas acontecem precisamente quando deixamos de tentar provocá-las.",
  },
  ar: {
    eyebrow: "تحت النجوم · Erg Chebbi",
    titlePrefix: "السحر الذي لا يظهر في ",
    titleEm: "الصور",
    p1: "يتيح امتداد النهار مكانًا لسكون يصعب وصفه. بلا أنشطة. بلا التزامات. لا شيء لإثباته. امتياز التواجد هناك فقط، ومشاركة الدرب مع نساء أخريات وترك التجربة تفعل فعلها في أرواحنا.",
    p2: "لأن بعض أهم أحاديث حياتنا تحدث تحديدًا حين نتوقف عن محاولة افتعالها.",
  },
  ru: {
    eyebrow: "Под звёздами · Erg Chebbi",
    titlePrefix: "Волшебство, которое не появляется на ",
    titleEm: "фотографиях",
    p1: "Безграничность дня уступает место тишине, которую трудно описать. Никаких обязательств. Не нужно ничего доказывать. Только привилегия быть здесь, делить дорогу с другими женщинами и позволить путешествию раскрыть себя.",
    p2: "Потому что некоторые самые важные разговоры в нашей жизни случаются именно тогда, когда мы перестаем пытаться их вызвать намеренно.",
  },
};

export default function NightSection({ currentLocale = "en" }: NightSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const t = NIGHT_CONTENT[currentLocale] || NIGHT_CONTENT.en;

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
    <div ref={sectionRef} className="wp-block-group alignfull night">
      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
        {/* Background Media */}
        <div className="wp-block-group night__media">
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            <figure className="wp-block-image size-full">
              <img
                src="/images/starry-night.jpg"
                alt="Sahara starry night sky"
                decoding="async"
              />
            </figure>
          </div>
        </div>

        {/* Narrative Inner Content */}
        <div
          className={`wp-block-group night__inner reveal ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            <p className="eyebrow eyebrow--gold wp-block-paragraph">
              {t.eyebrow}
            </p>

            <h2 className="wp-block-heading night__title">
              {t.titlePrefix}<em>{t.titleEm}</em>
            </h2>

            <p className="night__text wp-block-paragraph">
              {t.p1}
            </p>

            <p className="night__text night__text--soft wp-block-paragraph">
              {t.p2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
