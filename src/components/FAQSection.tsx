"use client";

import React, { useEffect, useRef } from "react";
import { Locale } from "@/data/translations";

interface FAQSectionProps {
  currentLocale?: Locale;
}

const FAQ_DATA: Record<Locale, {
  eyebrow: string;
  titlePrefix: string;
  titleEm: string;
  titleSuffix: string;
  items: { q: string; a: string }[];
}> = {
  "en": {
    "eyebrow": "Frequently asked questions",
    "titlePrefix": "Before ",
    "titleEm": "setting off",
    "titleSuffix": "",
    "items": [
      {
        "q": "Is it safe to travel to Morocco?",
        "a": "Yes. Morocco is an established tourist destination and we will travel through the country accompanied at all times by our local team and by us. The vast majority of fears disappear as soon as the experience begins."
      },
      {
        "q": "Can I come on my own?",
        "a": "Absolutely. In fact, many participants travel alone. From the very first day you will be part of a small group of women who will share the adventure with you."
      },
      {
        "q": "What are the rooms like?",
        "a": "They will be shared, double or triple, depending on the accommodation. If you travel alone, we will take care of the room allocation so that everything is comfortable and easy."
      },
      {
        "q": "How old are the participants?",
        "a": "Women of different ages and life stages. What unites us is not age, but the desire to live an authentic experience and share an unforgettable adventure."
      },
      {
        "q": "Is it physically demanding?",
        "a": "No. It is suitable for any woman with a normal level of fitness. There will be moments of walking and activity, but no previous experience or specific training is required."
      },
      {
        "q": "Do I need to speak English or French?",
        "a": "No. Throughout the journey we will be accompanied by a Spanish-speaking local guide. Many people working in tourism also speak Spanish, French or English."
      },
      {
        "q": "What documents do I need?",
        "a": "A valid passport. We recommend checking its expiry date well in advance."
      },
      {
        "q": "What if I have allergies or dietary needs?",
        "a": "Just let us know in advance. We will do everything we can to pass your needs on to the accommodation and restaurants included in the journey."
      }
    ]
  },
  "fr": {
    "eyebrow": "Questions fréquentes",
    "titlePrefix": "Avant de ",
    "titleEm": "partir",
    "titleSuffix": "",
    "items": [
      {
        "q": "Est-il sûr de voyager au Maroc ?",
        "a": "Oui. Le Maroc est une destination touristique confirmée et nous parcourrons le pays accompagnées à tout moment par notre équipe locale et par nous-mêmes. La grande majorité des peurs disparaissent dès que l’expérience commence."
      },
      {
        "q": "Puis-je venir seule ?",
        "a": "Bien sûr. En fait, beaucoup de participantes voyagent seules. Dès le premier jour, vous ferez partie d’un petit groupe de femmes qui partageront l’aventure avec vous."
      },
      {
        "q": "Comment sont les chambres ?",
        "a": "Elles seront partagées, doubles ou triples, selon l’hébergement. Si vous voyagez seule, nous nous occupons de la répartition pour que tout soit confortable et simple."
      },
      {
        "q": "Quel âge ont les participantes ?",
        "a": "Des femmes d’âges et de moments de vie différents. Ce qui nous unit n’est pas l’âge, mais l’envie de vivre une expérience authentique et de partager une aventure inoubliable."
      },
      {
        "q": "Est-ce une expérience physiquement exigeante ?",
        "a": "Non. Elle convient à toute femme ayant une condition physique normale. Il y aura des moments de marche et d’activité, mais aucune expérience préalable ni préparation spécifique n’est requise."
      },
      {
        "q": "Faut-il parler anglais ou français ?",
        "a": "Non. Tout au long du voyage, nous serons accompagnées par un guide local hispanophone. De plus, de nombreuses personnes travaillant dans le tourisme parlent espagnol, français ou anglais."
      },
      {
        "q": "De quels documents ai-je besoin ?",
        "a": "Un passeport en cours de validité. Nous vous recommandons de vérifier sa date d’expiration suffisamment à l’avance."
      },
      {
        "q": "Et si j’ai des allergies ou des besoins alimentaires ?",
        "a": "Il vous suffit de nous le signaler à l’avance. Nous ferons tout notre possible pour transmettre vos besoins aux hébergements et restaurants inclus dans le voyage."
      }
    ]
  },
  "de": {
    "eyebrow": "Häufige Fragen",
    "titlePrefix": "Bevor du ",
    "titleEm": "aufbrichst",
    "titleSuffix": "",
    "items": [
      {
        "q": "Ist es sicher, nach Marokko zu reisen?",
        "a": "Ja. Marokko ist ein etabliertes Reiseland, und wir durchqueren das Land jederzeit begleitet von unserem lokalen Team und von uns. Die große Mehrheit der Ängste verschwindet, sobald die Erfahrung beginnt."
      },
      {
        "q": "Kann ich allein kommen?",
        "a": "Natürlich. Tatsächlich reisen viele Teilnehmerinnen allein. Vom ersten Tag an bist du Teil einer kleinen Gruppe von Frauen, die das Abenteuer mit dir teilen."
      },
      {
        "q": "Wie sind die Zimmer?",
        "a": "Sie werden geteilt, als Doppel- oder Dreibettzimmer, je nach Unterkunft. Wenn du allein reist, übernehmen wir die Aufteilung, damit alles bequem und unkompliziert ist."
      },
      {
        "q": "Wie alt sind die Teilnehmerinnen?",
        "a": "Frauen unterschiedlichen Alters und in unterschiedlichen Lebensphasen. Was uns verbindet, ist nicht das Alter, sondern die Lust auf eine authentische Erfahrung und ein unvergessliches Abenteuer."
      },
      {
        "q": "Ist die Reise körperlich anstrengend?",
        "a": "Nein. Sie eignet sich für jede Frau mit normaler körperlicher Verfassung. Es wird Momente mit Fußwegen und Aktivität geben, aber es sind weder Vorerfahrung noch spezielles Training nötig."
      },
      {
        "q": "Muss ich Englisch oder Französisch sprechen?",
        "a": "Nein. Während der gesamten Reise werden wir von einer spanischsprachigen lokalen Reiseleitung begleitet. Außerdem sprechen viele Menschen im Tourismus Spanisch, Französisch oder Englisch."
      },
      {
        "q": "Welche Dokumente brauche ich?",
        "a": "Einen gültigen Reisepass. Wir empfehlen, das Ablaufdatum rechtzeitig zu prüfen."
      },
      {
        "q": "Und wenn ich Allergien oder Ernährungsbedürfnisse habe?",
        "a": "Sag es uns einfach rechtzeitig. Wir werden alles tun, um deine Bedürfnisse an die Unterkünfte und Restaurants der Reise weiterzugeben."
      }
    ]
  },
  "it": {
    "eyebrow": "Domande frequenti",
    "titlePrefix": "Prima di ",
    "titleEm": "partire",
    "titleSuffix": "",
    "items": [
      {
        "q": "È sicuro viaggiare in Marocco?",
        "a": "Sì. Il Marocco è una destinazione turistica consolidata e attraverseremo il paese accompagnate in ogni momento dal nostro team locale e da noi. La grande maggioranza delle paure svanisce non appena l’esperienza comincia."
      },
      {
        "q": "Posso venire da sola?",
        "a": "Certamente. Anzi, molte partecipanti viaggiano da sole. Fin dal primo giorno farai parte di un piccolo gruppo di donne che condivideranno l’avventura con te."
      },
      {
        "q": "Come sono le camere?",
        "a": "Saranno condivise, doppie o triple, a seconda dell’alloggio. Se viaggi da sola, ci occupiamo noi della suddivisione perché tutto sia comodo e semplice."
      },
      {
        "q": "Quanti anni hanno le partecipanti?",
        "a": "Donne di età e momenti di vita diversi. Ciò che ci unisce non è l’età, ma la voglia di vivere un’esperienza autentica e condividere un’avventura indimenticabile."
      },
      {
        "q": "È un’esperienza fisicamente impegnativa?",
        "a": "No. È adatta a qualsiasi donna con una condizione fisica normale. Ci saranno momenti di cammino e attività, ma non servono esperienza precedente né preparazione specifica."
      },
      {
        "q": "È necessario parlare inglese o francese?",
        "a": "No. Per tutto il viaggio saremo accompagnate da una guida locale di lingua spagnola. Inoltre, molte persone che lavorano nel turismo parlano spagnolo, francese o inglese."
      },
      {
        "q": "Quali documenti mi servono?",
        "a": "Passaporto in corso di validità. Ti consigliamo di verificare la data di scadenza con sufficiente anticipo."
      },
      {
        "q": "E se ho allergie o esigenze alimentari?",
        "a": "Devi solo comunicarcelo in anticipo. Faremo tutto il possibile per trasmettere le tue esigenze agli alloggi e ai ristoranti inclusi nel viaggio."
      }
    ]
  },
  "pt": {
    "eyebrow": "Perguntas frequentes",
    "titlePrefix": "Antes de ",
    "titleEm": "partir",
    "titleSuffix": "",
    "items": [
      {
        "q": "É seguro viajar para Marrocos?",
        "a": "Sim. Marrocos é um destino turístico consolidado e percorreremos o país acompanhadas em todos os momentos pela nossa equipa local e por nós. A grande maioria dos medos desaparece assim que a experiência começa."
      },
      {
        "q": "Posso vir sozinha?",
        "a": "Claro. De facto, muitas participantes viajam sozinhas. Desde o primeiro dia farás parte de um grupo reduzido de mulheres que partilharão a aventura contigo."
      },
      {
        "q": "Como são os quartos?",
        "a": "Serão partilhados, duplos ou triplos, consoante o alojamento. Se viajares sozinha, nós encarregamo-nos da distribuição para que tudo seja confortável e simples."
      },
      {
        "q": "Que idade têm as participantes?",
        "a": "Mulheres de diferentes idades e momentos de vida. O que nos une não é a idade, mas a vontade de viver uma experiência autêntica e partilhar uma aventura inesquecível."
      },
      {
        "q": "É uma experiência fisicamente exigente?",
        "a": "Não. É uma experiência adequada a qualquer mulher com uma condição física normal. Haverá momentos de caminhada e atividade, mas não é necessária experiência prévia nem preparação específica."
      },
      {
        "q": "É necessário falar inglês ou francês?",
        "a": "Não. Durante toda a viagem seremos acompanhadas por um guia local de língua espanhola. Além disso, muitas pessoas ligadas ao turismo falam espanhol, francês ou inglês."
      },
      {
        "q": "Que documentação preciso?",
        "a": "Passaporte válido. Recomendamos que verifiques a data de validade com bastante antecedência."
      },
      {
        "q": "E se tiver alergias ou necessidades alimentares?",
        "a": "Basta comunicares-nos com antecedência. Faremos tudo o que for possível para transmitir as tuas necessidades aos alojamentos e restaurantes incluídos na viagem."
      }
    ]
  },
  "ar": {
    "eyebrow": "أسئلة شائعة",
    "titlePrefix": "قبل ",
    "titleEm": "الرحيل",
    "titleSuffix": "",
    "items": [
      {
        "q": "هل السفر إلى المغرب آمن؟",
        "a": "نعم. المغرب وجهة سياحية راسخة، وسنعبر البلاد مرافَقات في كل لحظة من فريقنا المحلي ومنّا. الغالبية العظمى من المخاوف تزول بمجرد أن تبدأ التجربة."
      },
      {
        "q": "هل يمكنني المجيء وحدي؟",
        "a": "بالتأكيد. في الواقع، كثيرات من المشاركات يسافرن وحدهن. من اليوم الأول ستكونين جزءًا من مجموعة صغيرة من النساء يتشاركن المغامرة معك."
      },
      {
        "q": "كيف هي الغرف؟",
        "a": "ستكون مشتركة، ثنائية أو ثلاثية، حسب مكان الإقامة. إذا سافرت وحدك، نتولّى نحن توزيع الغرف ليكون كل شيء مريحًا وسهلًا."
      },
      {
        "q": "ما أعمار المشاركات؟",
        "a": "نساء من أعمار ومراحل حياة مختلفة. ما يجمعنا ليس العمر، بل الرغبة في عيش تجربة أصيلة ومشاركة مغامرة لا تُنسى."
      },
      {
        "q": "هل هي تجربة شاقة جسديًا؟",
        "a": "لا. هي تجربة مناسبة لأي امرأة بلياقة بدنية عادية. ستكون هناك لحظات مشي ونشاط، لكنها لا تتطلب خبرة سابقة ولا إعدادًا خاصًا."
      },
      {
        "q": "هل من الضروري التحدث بالإنجليزية أو الفرنسية؟",
        "a": "لا. طوال الرحلة سيرافقنا مرشد محلي يتحدث الإسبانية. كما أن كثيرين ممن يعملون في السياحة يتحدثون الإسبانية والفرنسية والإنجليزية."
      },
      {
        "q": "ما الوثائق التي أحتاجها؟",
        "a": "جواز سفر ساري المفعول. ننصحك بالتحقق من تاريخ انتهائه بوقت كافٍ."
      },
      {
        "q": "وإذا كانت لديّ حساسية أو احتياجات غذائية؟",
        "a": "يكفي أن تخبري‌نا مسبقًا. سنبذل كل ما نستطيع لإبلاغ احتياجاتك إلى أماكن الإقامة والمطاعم المشمولة في الرحلة."
      }
    ]
  },
  "ru": {
    "eyebrow": "Частые вопросы",
    "titlePrefix": "Перед ",
    "titleEm": "отъездом",
    "titleSuffix": "",
    "items": [
      {
        "q": "Безопасно ли ехать в Марокко?",
        "a": "Да. Марокко — устоявшееся туристическое направление, и мы будем путешествовать по стране в постоянном сопровождении нашей местной команды и нас самих. Подавляющее большинство страхов исчезает, как только начинается опыт."
      },
      {
        "q": "Можно ли поехать одной?",
        "a": "Конечно. Более того, многие участницы путешествуют одни. С первого дня ты станешь частью небольшой группы женщин, которые разделят с тобой приключение."
      },
      {
        "q": "Какие там номера?",
        "a": "Они будут общими — двух- или трёхместными, в зависимости от жилья. Если ты едешь одна, распределением займёмся мы, чтобы всё было удобно и просто."
      },
      {
        "q": "Какого возраста участницы?",
        "a": "Женщины разного возраста и разных этапов жизни. Нас объединяет не возраст, а желание прожить подлинный опыт и разделить незабываемое приключение."
      },
      {
        "q": "Это физически сложная поездка?",
        "a": "Нет. Она подходит любой женщине с обычной физической формой. Будут моменты ходьбы и активности, но предварительный опыт или особая подготовка не нужны."
      },
      {
        "q": "Нужно ли говорить по-английски или по-французски?",
        "a": "Нет. На протяжении всего путешествия нас будет сопровождать местный гид, говорящий по-испански. Кроме того, многие в туристической сфере говорят по-испански, по-французски или по-английски."
      },
      {
        "q": "Какие документы нужны?",
        "a": "Действующий загранпаспорт. Рекомендуем заранее проверить срок его действия."
      },
      {
        "q": "А если у меня аллергия или особые пищевые потребности?",
        "a": "Просто сообщи нам заранее. Мы сделаем всё возможное, чтобы передать твои пожелания в жильё и рестораны, включённые в путешествие."
      }
    ]
  },
  "es": {
    "eyebrow": "Preguntas frecuentes",
    "titlePrefix": "Antes de ",
    "titleEm": "partir",
    "titleSuffix": "",
    "items": [
      {
        "q": "¿Es seguro viajar a Marruecos?",
        "a": "Sí. Marruecos es un destino turístico consolidado y recorreremos el país acompañadas en todo momento por nuestro equipo local y por nosotras. La inmensa mayoría de los miedos desaparecen en cuanto comienza la experiencia."
      },
      {
        "q": "¿Puedo venir sola?",
        "a": "Por supuesto. De hecho, muchas participantes viajan solas. Desde el primer día formarás parte de un grupo reducido de mujeres que compartirán la aventura contigo."
      },
      {
        "q": "¿Cómo son las habitaciones?",
        "a": "Serán compartidas, dobles o triples, según el alojamiento. Si viajas sola, nosotras nos encargamos de la distribución para que todo resulte cómodo y sencillo."
      },
      {
        "q": "¿Qué edad tienen las participantes?",
        "a": "Mujeres de diferentes edades y momentos vitales. Lo que nos une no es la edad, sino las ganas de vivir una experiencia auténtica y compartir una aventura inolvidable."
      },
      {
        "q": "¿Es una experiencia exigente físicamente?",
        "a": "No. Es una experiencia apta para cualquier mujer con una condición física normal. Habrá momentos de caminata y actividad, pero no se requiere experiencia previa ni preparación específica."
      },
      {
        "q": "¿Es necesario hablar inglés o francés?",
        "a": "No. Durante toda la travesía estaremos acompañadas por guía local de habla hispana. Además, muchas personas vinculadas al turismo hablan español, francés o inglés."
      },
      {
        "q": "¿Qué documentación necesito?",
        "a": "Pasaporte en vigor. Te recomendamos comprobar su fecha de caducidad con suficiente antelación."
      },
      {
        "q": "¿Y si tengo alergias o necesidades alimentarias?",
        "a": "Solo tienes que comunicárnoslo con antelación. Haremos todo lo posible para trasladar tus necesidades a los alojamientos y restaurantes incluidos en la travesía."
      }
    ]
  }
};


export default function FAQSection({ currentLocale = "en" }: FAQSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const t = FAQ_DATA[currentLocale] || FAQ_DATA.en;

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
      id="faq"
      className="wp-block-group alignfull mda-faq-wrap faq"
    >
      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
        <div className="wp-block-group mda-faq-inner">
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            {/* Header */}
            <div className="wp-block-group faq__header">
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

            {/* QA List */}
            <div className="wp-block-group faq__list">
              <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                {t.items.map((item, index) => (
                  <details
                    key={index}
                    className="wp-block-details qa reveal is-layout-flow wp-block-details-is-layout-flow"
                    style={{ "--i": index } as React.CSSProperties}
                  >
                    <summary>{item.q}</summary>
                    <p className="wp-block-paragraph">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
