"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Locale } from "@/data/translations";

export default function AboutPage() {
  const [currentLocale, setCurrentLocale] = useState<Locale>("en");

  const isRtl = currentLocale === "ar";

  const content: Record<string, Record<Locale, string>> = {
    eyebrow: {
      en: "✦ YOUR HOSTS · VANESSA & ANA ✦",
      es: "✦ VUESTRAS ANFITRIONAS · VANESSA Y ANA ✦",
      fr: "✦ VOS HÔTES · VANESSA ET ANA ✦",
      de: "✦ EURE GASTGEBERINNEN · VANESSA & ANA ✦",
      it: "✦ LE VOSTRE ACCOMPAGNATRICI · VANESSA E ANA ✦",
      ar: "✦ مرشدتاكِ ومضيّفتاكِ · فانيسا وآنا ✦",
      pt: "✦ VOSSAS ANFITRIÃS · VANESSA E ANA ✦",
      ru: "✦ ВАШИ ОРГАНИЗАТОРЫ · ВАНЕССА И АНА ✦"
    },
    titlePrefix: {
      en: "We Say ",
      es: "Decimos ",
      fr: "Nous Disons ",
      de: "Wir Sagen ",
      it: "Diciamo ",
      ar: "نحن نقول ",
      pt: "Dizemos ",
      ru: "Мы Говорим "
    },
    titleEm: {
      en: "Yes to Life",
      es: "Sí a la Vida",
      fr: "Oui à la Vie",
      de: "Ja zum Leben",
      it: "Sì alla Vita",
      ar: "نعم للحياة",
      pt: "Sim à Vida",
      ru: "Да Жизни"
    },
    subtitle: {
      en: "Driven by curiosity, sisterhood, and the transformative magic of stepping outside the predictable patterns of daily routine.",
      es: "Guiadas por la curiosidad, la hermandad y la magia transformadora de salir de los patrones predecibles de la rutina diaria.",
      fr: "Guidées par la curiosité, la sororité et la magie transformatrice de sortir de la routine quotidienne.",
      de: "Getrieben von Neugier, Verbundenheit und der Magie, gewohnte Routinen hinter sich zu lassen.",
      it: "Guidate dalla curiosità, dalla sorellanza e dalla magia trasformativa del viaggio autentico.",
      ar: "مدفوعتان بالشغف، وروح الأخوة النسائية، وسحر الخروج من رتابة الحياة اليومية نحو رحاب الصحراء.",
      pt: "Guiadas pela curiosidade, irmandade e a magia transformadora de sair da rotina diária.",
      ru: "Вдохновленные жаждой открытий, женским сестринством и трансформацией вне привычной рутины."
    },
    storyEyebrow: {
      en: "How It All Began",
      es: "Cómo Empezó Todo",
      fr: "Comment Tout a Commencé",
      de: "Wie Alles Begann",
      it: "Come Tutto Ha Avuto Inizio",
      ar: "كيف بدأت قصتنا",
      pt: "Como Tudo Começou",
      ru: "Как Всё Начиналось"
    },
    storyTitle: {
      en: "From a Shared Journey to a Calling",
      es: "De un Viaje Compartido a una Vocación",
      fr: "D’un Voyage Partagé à une Vocation",
      de: "Von Einer Reise zur Berufung",
      it: "Da un Viaggio Insieme a una Vocazione",
      ar: "من رحلة شخصية عفوية إلى شغف ورسالة حياة",
      pt: "De uma Viagem Compartilhada a uma Vocação",
      ru: "От совместного путешествия к призванию"
    },
    p1: {
      en: "We are driven by curiosity, adventure, and those experiences that take us outside the predictable patterns of daily routine. That is how our story with Morocco began: what started as an exploratory personal journey became a landscape and culture we felt an undeniable pull to return to again and again.",
      es: "Nos mueve la curiosidad, la aventura y esas vivencias que nos arrancan de lo previsible. Así comenzó nuestra historia con Marruecos: lo que empezó como una escapada personal se convirtió en un flechazo con una tierra a la que sentimos la necesidad de volver una y otra vez.",
      fr: "Nous sommes animées par la curiosité et le désir de vivre des moments hors du temps. C'est ainsi que notre aventure au Maroc a vu le jour : un coup de cœur absolu pour une terre inspirante.",
      de: "Neugier und Abenteuerlust treiben uns an. So begann unsere Liebe zu Marokko: Ein Traum wurde zur Leidenschaft, zu der wir immer wieder zurückkehren.",
      it: "Siamo animate dalla curiosità e dall'amore per l'avventura autentica. Il Marocco è stato per noi un colpo di fulmine a cui non abbiamo più saputo resistere.",
      ar: "يحركنا الفضول، وعشق المغامرة، والتجارب التي تنتزعنا من رتابة الأيام. هكذا بدأت حكايتنا مع المغرب الساحر: تحولت رحلة استكشافية عفوية إلى عشق أبدي لأرض وروح نجد أنفسنا نعود إليها مراراً وتكراراً.",
      pt: "Somos movidas pela curiosidade e aventura. Assim nasceu nossa história com o Marrocos: uma paixão imediata e duradoura.",
      ru: "Нас вдохновляет дух приключений и искренность. Так началась наша история с Марокко — любовь с первого взгляда."
    },
    p2: {
      en: "In time, we realized that this experience was too powerful to keep to ourselves. And so Mujeres de Arena was born — not as a conventional, commercial tourist package, but as an intimate, soul-stirring journey created from the heart for women who feel the call of adventure.",
      es: "Con el tiempo comprendimos que esta experiencia era demasiado hermosa para guardarla solo para nosotras. Así nació Mujeres de Arena: no como un viaje organizado en masa, sino como una travesía creada desde el corazón para mujeres que buscan autenticidad.",
      fr: "Nous avons voulu partager cette énergie unique. Mujeres de Arena est né : une immersion sincère et chaleureuse entre femmes.",
      de: "Diese Erfahrung wollten wir teilen. So entstand Mujeres de Arena — eine Reise von Herzen, nur für Frauen.",
      it: "Un'esperienza così profonda andava condivisa. È nata così Mujeres de Arena: un viaggio dal cuore per 12 donne.",
      ar: "مع مرور الوقت، أدركنا أن هذا العمق الإنساني والروحي أجمل من أن نحتفظ به لأنفسنا فقط. وهكذا وُلدت «نساء الرمال» — ليس كبرنامج سياحي تجاري معتاد، بل كرحلة حميمية نابضة بالصدق، صُممت من القلب خصيصاً للنساء.",
      pt: "Com o tempo sentimos o chamado de partilhar tudo isto. Nasceu a Mujeres de Arena: uma vivência transformadora.",
      ru: "Со временем мы поняли, что этим нужно делиться. Так родился проект Mujeres de Arena — путешествие от сердца к сердцу."
    },
    quote: {
      en: "“Life expands in direct proportion to one’s courage to step into the open desert.”",
      es: "«La vida se expande en proporción directa al coraje de adentrarse en el desierto abierto.»",
      fr: "« La vie s'épanouit à la mesure du courage de s'aventurer dans l'immensité du désert. »",
      de: "„Das Leben gewinnt an Weite, wenn wir den Mut haben, in die Stille der Wüste einzutauchen.“",
      it: "«La vita si espande in proporzione al coraggio di accogliere il silenzio del deserto.»",
      ar: "«تتسع الحياة وتزدهر بقدر شجاعة المرأة في خوض رحاب الصحراء الواسعة والإنصات لنداء قلبها.»",
      pt: "«A vida expande-se na proporção direta da coragem de entrar no deserto aberto.»",
      ru: "«Жизнь расширяется прямо пропорционально смелости шагнуть в неизведанность пустыни.»"
    }
  };

  const t = (key: string) => content[key]?.[currentLocale] || content[key]?.en || "";

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4EA] text-[#1B1108] selection:bg-[#8B4513] selection:text-white" dir={isRtl ? "rtl" : "ltr"}>
      <Navbar currentLocale={currentLocale} onLocaleChange={setCurrentLocale} />

      <main className="flex-1">
        {/* Subpage Hero */}
        <div className="wp-block-cover alignfull mda-subpage-hero has-parallax relative">
          <div
            className="wp-block-cover__image-background has-parallax"
            style={{
              backgroundImage: "url('/images/sergey-pesterev-i-P1lmY_e1w-unsplash.jpg')",
              backgroundPosition: "50% 50%",
            }}
          />
          <span
            aria-hidden="true"
            className="wp-block-cover__background has-background-dim-30 has-background-dim has-contrast-background-color"
          />

          <div className="wp-block-cover__inner-container is-layout-flow">
            <div className="wp-block-group hero__inner">
              <p className="eyebrow eyebrow--gold wp-block-paragraph">
                {t("eyebrow")}
              </p>
              <h1 className="hero__title wp-block-heading">
                {t("titlePrefix")}
                <em>{t("titleEm")}</em>
              </h1>
              <p className="hero__subtitle wp-block-paragraph">
                {t("subtitle")}
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div id="our-story" className="wp-block-group alignwide mda-story-wrap py-24 px-6 max-w-[1160px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hosts Photo & Quote */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/60 bg-white">
                <img
                  src="/images/hosts-vanessa-ana.jpg"
                  alt="Vanessa & Ana"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 text-center bg-[#FAF4EA] border-t border-[#E8DEC8]">
                  <p className="font-playfair font-bold text-lg text-[#1B1108]">
                    Vanessa &amp; Ana · <em className="text-[#8B4513] font-normal">Co-Founders</em>
                  </p>
                </div>
              </div>

              <blockquote className="border-l-2 border-[#D4A85F] pl-6 py-2 italic font-playfair text-[#8B4513] text-lg leading-relaxed bg-[#FAF4EA]/80 rounded-r-xl">
                <p>{t("quote")}</p>
                <cite className="block text-xs uppercase tracking-widest text-[#7A6952] mt-2 not-italic font-inter font-semibold">
                  — Vanessa &amp; Ana
                </cite>
              </blockquote>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <p className="eyebrow eyebrow--terra wp-block-paragraph text-xs uppercase tracking-[0.22em] text-[#8B4513] font-semibold">
                {t("storyEyebrow")}
              </p>
              <h2 className="font-playfair text-3xl sm:text-4xl text-[#1B1108] font-normal leading-tight">
                {t("storyTitle")}
              </h2>
              <p className="font-inter text-[#4A3B2C] text-base sm:text-lg leading-relaxed">
                {t("p1")}
              </p>
              <p className="font-inter text-[#4A3B2C] text-base sm:text-lg leading-relaxed">
                {t("p2")}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="/reserve-spot"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#8B4513] text-[#FAF4EA] font-inter text-sm font-semibold tracking-wider uppercase hover:bg-[#6e370f] transition-all shadow-lg shadow-[#8B4513]/20"
                >
                  Join Our Journey →
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#8B4513] text-[#8B4513] font-inter text-sm font-semibold tracking-wider uppercase hover:bg-[#8B4513]/5 transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer currentLocale={currentLocale} />
    </div>
  );
}
