"use client";

import React from "react";
import Image from "next/image";
import { Locale } from "@/data/translations";

interface StageItem {
  stageIndex: number;
  isReverse: boolean;
  image: string;
  badge: Partial<Record<Locale, string>>;
  title: Partial<Record<Locale, string>>;
  text: Partial<Record<Locale, string>>;
  listItems: Partial<Record<Locale, string[]>>;
}

const STAGES_DATA: StageItem[] = [
  {
    stageIndex: 1,
    isReverse: false,
    image: "/images/marrakech-city.jpg",
    badge: {
      en: "✦ STAGE ONE · DAY 1 ✦",
      es: "✦ ETAPA UNO · DÍA 1 ✦",
      fr: "✦ ÉTAPE UN · JOUR 1 ✦",
      de: "✦ ETAPPE EINS · TAG 1 ✦",
      it: "✦ TAPPA UNO · GIORNO 1 ✦",
      ar: "✦ المرحلة الأولى · اليوم 1 ✦"
    },
    title: {
      en: "Marrakech · Where the Journey Begins",
      es: "Marrakech · Donde Comienza el Viaje",
      fr: "Marrakech · Là où Commence le Voyage",
      de: "Marrakesch · Wo die Reise Beginnt",
      it: "Marrakech · Dove Comincia il Viaggio",
      ar: "مراكش · حيث تبدأ الرحلة"
    },
    text: {
      en: "Marrakech isn’t visited. It’s felt. The city welcomes us with the scent of orange blossom, the terracotta warmth of its alleyways, and the electric buzz of Jemaa el-Fnaa at dusk.",
      es: "Marrakech no se visita. Se siente. La ciudad nos recibe con aroma a azahar, la calidez terracota de sus callejuelas y el rumor eléctrico de Jemaa el-Fnaa al atardecer.",
      fr: "Marrakech ne se visite pas. Elle se ressent. La ville nous accueille avec le parfum de fleur d'oranger, la tiédeur terracotta de ses ruelles et l'effervescence de Jemaa el-Fnaa au crépuscule.",
      de: "Marrakesch besichtigt man nicht. Man fühlt es. Die Stadt empfängt uns mit dem Duft von Orangenblüten, der Terrakotta-Wärme ihrer Gassen und dem Summen von Jemaa el-Fnaa in der Dämmerung.",
      it: "Marrakech non si visita. Si vive. La città ci accoglie con il profumo di fiori d'arancio, il calore terracotta dei suoi vicoli e l'atmosfera vibrante di Jemaa el-Fnaa al tramonto.",
      ar: "مراكش لا تُزار فحسب، بل تُعاش وتُحس. تستقبلنا المدينة بعبير زهر البرتقال ودفء أزقتها الطينية وصخب ساحة جامع الفنا الساحر عند الغروب."
    },
    listItems: {
      en: [
        "Private airport pickup at Marrakech Menara (RAK) and welcome in our boutique riad",
        "First mint tea and welcome sisterhood introduction circle",
        "Sunset walk through the spice-scented alleyways and souks",
        "Traditional family dinner in an authentic patio courtyard"
      ],
      es: [
        "Recepción privada en el aeropuerto de Marrakech Menara (RAK) y bienvenida en nuestro riad boutique",
        "Primer té a la menta y círculo de presentación entre mujeres",
        "Paseo al atardecer por los zocos y callejones con aroma a especias",
        "Cena tradicional de bienvenida en un patio íntimo"
      ],
      fr: [
        "Accueil privé à l'aéroport de Marrakech Menara (RAK) et installation dans notre riad de charme",
        "Premier thé à la menthe et cercle de présentation chaleureux entre femmes",
        "Balade au crépuscule dans les ruelles parfumées d'épices et les souks",
        "Dîner familial traditionnel dans la cour intime d'un patio"
      ],
      de: [
        "Privater Flughafen-Transfer in Marrakesch Menara (RAK) und Empfang im Boutique-Riad",
        "Erster Minztee und herzlicher Willkommenskreis der Schwesternschaft",
        "Spaziergang bei Sonnenuntergang durch die gewürzduftenden Gassen und Souks",
        "Traditionelles marokkanisches Abendessen im Innenhof des Riads"
      ],
      it: [
        "Accoglienza privata all'aeroporto di Marrakech Menara (RAK) e benvenuto nel nostro riad di charme",
        "Primo tè alla menta e cerchio di apertura e condivisione al femminile",
        "Passeggiata al tramonto tra i vicoli profumati di spezie e i suk",
        "Cena tradizionale di benvenuto nell'intimo patio di famiglia"
      ],
      ar: [
        "استقبال خاص من مطار مراكش المنارة والانتقال إلى رياضنا التقليدي الهادئ",
        "أول كأس شاي بالنعناع وحلقة تعارف دافئة ومشاركة بين النساء",
        "جولة عند الغروب بين أزقة الأسواق القديمة وعبير التوابل",
        "عشاء مغربي تقليدي فاخر في فناء الرياض الأندلسي"
      ]
    }
  },
  {
    stageIndex: 2,
    isReverse: true,
    image: "/images/atlas-mountains.jpg",
    badge: {
      en: "✦ STAGE TWO · DAY 2 ✦",
      es: "✦ ETAPA DOS · DÍA 2 ✦",
      fr: "✦ ÉTAPE DEUX · JOUR 2 ✦",
      de: "✦ ETAPPE ZWEI · TAG 2 ✦",
      it: "✦ TAPPA DUE · GIORNO 2 ✦",
      ar: "✦ المرحلة الثانية · اليوم 2 ✦"
    },
    title: {
      en: "Crossing the High Atlas to Aït Ben Haddou",
      es: "Cruzando el Alto Atlas hacia Aït Ben Haddou",
      fr: "Traversée du Haut Atlas vers Aït Ben Haddou",
      de: "Über den Hohen Atlas nach Aït Ben Haddou",
      it: "Attraverso l'Alto Atlante verso Aït Ben Haddou",
      ar: "عبور جبال الأطلس الكبير نحو آيت بن حدو"
    },
    text: {
      en: "We climb into the clouds over the Tizi n’Tichka pass at 2,260 meters. The scenery shifts dramatically from green mountain terraces into ancient earthen kasbahs.",
      es: "Ascendemos hacia las nubes por el mítico paso de Tizi n’Tichka a 2.260 metros. El paisaje se transforma de terrazas verdes a fortalezas de adobe milenarias.",
      fr: "Nous montons vers les nuages par le col de Tizi n'Tichka à 2 260 mètres. Le paysage passe spectaculairement de terrasses verdoyantes aux kasbahs de terre millénaires.",
      de: "Wir steigen über den Tizi n’Tichka-Pass auf 2.260 Metern in die Wolken. Die Landschaft wechselt eindrucksvoll von grünen Bergterrassen zu alten Lehm-Kasbahs.",
      it: "Saliamo tra le nuvole attraverso il valico di Tizi n'Tichka a 2.260 metri. Il paesaggio si trasforma radicalmente da terrazze verdi a kasbah millenarie d'argilla.",
      ar: "نصعد نحو السحاب عبر ممر تيزي نتيشكا على ارتفاع 2,260 متراً، حيث يتحول المشهد تدريجياً من مصاطب الجبال الخضراء إلى قلاع وقصبات طينية عريقة."
    },
    listItems: {
      en: [
        "Scenic traverse of the dramatic Tizi n’Tichka mountain pass",
        "Guided walking exploration of the ancient UNESCO citadel of Aït Ben Haddou",
        "Panoramic lunch overlooking the Ounila river valley",
        "Scenic drive toward the tranquil rose and almond valleys of Dades"
      ],
      es: [
        "Cruce panorámico del impresionante paso montañoso de Tizi n’Tichka",
        "Exploración guiada a pie por la ciudadela de adobe de Aït Ben Haddou (Patrimonio UNESCO)",
        "Almuerzo con vistas sobre el valle del río Ounila",
        "Ruta escénica hacia los tranquilos valles de almendros y rosas del Dades"
      ],
      fr: [
        "Traversée panoramique du col spectaculaire de Tizi n'Tichka",
        "Visite guidée à pied du ksar millénaire d'Aït Ben Haddou, classé UNESCO",
        "Déjeuner panoramique surplombant la vallée de l'Ounila",
        "Route scénique vers les vallées paisibles de roses et d'amandiers du Dadès"
      ],
      de: [
        "Panoramafahrt über den spektakulären Tizi n’Tichka Gebirgspass",
        "Geführte Erkundung des UNESCO-Weltkulturerbes Ksar Aït Ben Haddou",
        "Mittagessen mit Ausblick auf das malerische Ounila-Flusstal",
        "Malerische Weiterfahrt in die ruhigen Täler der Rosen und Mandeln im Dades"
      ],
      it: [
        "Attraversata panoramica del valico montano di Tizi n'Tichka",
        "Passeggiata guidata alla scoperta dell'antica fortezza UNESCO di Aït Ben Haddou",
        "Pranzo con vista panoramica sulla valle del fiume Ounila",
        "Viaggio scenografico verso le quiete valli delle rose e mandorli del Dades"
      ],
      ar: [
        "رحلة بانورامية تخترق قمم الأطلس عبر ممر تيزي نتيشكا المهيب",
        "جولة استكشافية راجلة داخل قصر آيت بن حدو التاريخي المصنف تراثاً عالمياً لليونسكو",
        "وجبة غداء بإطلالة بانورامية ساحرة على وادي أونيلا",
        "المسير الهادئ نحو وديان دادس الزاخرة بأشجار الورد واللوز"
      ]
    }
  },
  {
    stageIndex: 3,
    isReverse: false,
    image: "/images/draa-valley.jpg",
    badge: {
      en: "✦ STAGE THREE · DAY 3 ✦",
      es: "✦ ETAPA TRES · DÍA 3 ✦",
      fr: "✦ ÉTAPE TROIS · JOUR 3 ✦",
      de: "✦ ETAPPE DREI · TAG 3 ✦",
      it: "✦ TAPPA TRE · GIORNO 3 ✦",
      ar: "✦ المرحلة الثالثة · اليوم 3 ✦"
    },
    title: {
      en: "Dades Valley & The Road of Kasbahs",
      es: "Valle del Dades y la Ruta de las Mil Kasbahs",
      fr: "Vallée du Dadès & La Route des Kasbahs",
      de: "Dadestal & Die Straße der Kasbahs",
      it: "Valle del Dades e la Via delle Kasbah",
      ar: "وادي دادس وطريق القصبات الأثرية"
    },
    text: {
      en: "Towering crimson cliffs, switchback roads carved into stone, and green ribbon oases flourishing against the arid rock. A sensory prelude before the deep desert.",
      es: "Imponentes desfiladeros carmesí, curvas esculpidas en la roca y oasis que florecen contra la piedra árida. El preludio sensorial antes de entrar al desierto profundo.",
      fr: "Falaises pourpres vertigineuses, lacets gravés dans la roche et rubans d'oasis verdoyantes face à la pierre aride. Un prélude sensoriel avant le grand désert.",
      de: "Mächtige rote Schluchten, in den Fels gemeißelte Serpentinen und grüne Oasenbänder inmitten der Felsen. Ein Fest der Sinne vor der tiefen Wüste.",
      it: "Falesie cremisi a strapiombo, tornanti scavati nella roccia e oasi verdeggianti che contrastano la pietra arida. Un preludio sensoriale prima del deserto.",
      ar: "مضائق صخرية قرمزية مهيبة، ومنعرجات جبلية منحوتة في الحجر، وواحات نخيل خضراء تخترق الصخور الصامتة كلوحة تمهيدية قبل الدخول لقلب الصحراء."
    },
    listItems: {
      en: [
        "Morning walk through the legendary winding Dades canyon switchbacks",
        "Quiet photography moments at the natural geological formations",
        "Mint tea with a local Amazigh weaving collective",
        "Restorative evening under mountain skies at an ancestral kasbah"
      ],
      es: [
        "Caminata matutina por las legendarias gargantas y curvas del Dades",
        "Instantes de contemplación fotográfica junto a formaciones geológicas únicas",
        "Té con una cooperativa local de mujeres tejedoras amazigh",
        "Atardecer reparador bajo cielos limpios en una kasbah ancestral"
      ],
      fr: [
        "Marche matinale dans les célèbres gorges serpentines du Dadès",
        "Instants de contemplation photographique face aux formations géologiques",
        "Partage de thé avec une coopérative féminine de tissage amazighe",
        "Soirée réparatrice sous le ciel pur des montagnes dans une kasbah ancestrale"
      ],
      de: [
        "Morgendlicher Spaziergang durch die legendären Serpentinen der Dades-Schlucht",
        "Ruhige Fotomomente an den bizarren Felsformationen",
        "Minztee bei einer lokalen Frauen-Webereikooperative der Amazigh",
        "Erholungsabend unter klarem Gebirgshimmel in einer traditionellen Kasbah"
      ],
      it: [
        "Camminata mattutina tra i leggendari tornanti delle gole del Dades",
        "Momenti di quiete e fotografia davanti alle singolari formazioni rocciose",
        "Tè alla menta condiviso con una cooperativa femminile di tessitrici berbere",
        "Serata rigenerante sotto il cielo di montagna in un'autentica kasbah"
      ],
      ar: [
        "جولة صباحية بين مضائق وادي دادس الشهيرة ومنعرجاتها الصخرية الفريدة",
        "محطات تأمل وتصوير أمام التشكيلات الجيولوجية الطبيعية البديعة",
        "شاي مغربي أصيل برفقة تعاونية نسائية محلية لحياكة النسيج الأمازيغي",
        "أمسية هادئة واستشفائية تحت نجوم الجبال في قصبة تاريخية ساحرة"
      ]
    }
  },
  {
    stageIndex: 4,
    isReverse: true,
    image: "/images/desert-mountains.jpg",
    badge: {
      en: "✦ STAGE FOUR · DAY 4 ✦",
      es: "✦ ETAPA CUATRO · DÍA 4 ✦",
      fr: "✦ ÉTAPE QUATRE · JOUR 4 ✦",
      de: "✦ ETAPPE VIER · TAG 4 ✦",
      it: "✦ TAPPA QUATTRO · GIORNO 4 ✦",
      ar: "✦ المرحلة الرابعة · اليوم 4 ✦"
    },
    title: {
      en: "Todra Cliffs & Gateway to the Dunes",
      es: "Gargantas del Todra y Puerta a las Dunas",
      fr: "Falaises du Todra & Porte des Dunes",
      de: "Todra-Schlucht & Das Tor zu den Dünen",
      it: "Gole del Todra e la Porta delle Dune",
      ar: "مضائق تودغى وبوابة الكثبان الذهبية"
    },
    text: {
      en: "Standing between 300-meter sheer limestone cliffs before the earth flattens into vast desert plains. In the afternoon distance, the golden silhouette of Erg Chebbi rises.",
      es: "Entre desfiladeros de piedra caliza de más de 300 metros, el horizonte se abre hacia inmensas llanuras donde se dibuja, a lo lejos, la silueta dorada de Erg Chebbi.",
      fr: "Au pied de parois calcaires vertigineuses de 300 mètres, la terre s'ouvre vers de vastes plaines où se découpe au loin la silhouette dorée de l'Erg Chebbi.",
      de: "Zwischen 300 Meter hohen Steilwänden öffnet sich die weite Wüstensteppe. In der Ferne erhebt sich am Nachmittag die goldene Silhouette des Erg Chebbi.",
      it: "Camminando tra pareti calcaree alte 300 metri prima che la terra si distenda in pianure sconfinate. In lontananza sorge la sagoma dorata dell'Erg Chebbi.",
      ar: "الوقوف بين جدران صخرية شاهقة تعانق السماء بارتفاع 300 متر قبل أن ينبسط الأفق نحو سهول الصحراء الواسعة وتظهر كثبان عرق الشبي الذهبية."
    },
    listItems: {
      en: [
        "Walk through the narrow canyon corridor of Todra Gorge",
        "Traditional stroll through a historic date palm oasis",
        "Arrival at the desert boundary town of Merzouga",
        "First view of the towering golden dunes of the Sahara"
      ],
      es: [
        "Caminata por el impresionante estrecho del cañón del Todra",
        "Paseo sereno por el palmeral histórico y sus canales de agua",
        "Llegada a las puertas del desierto en Merzouga",
        "Primer contacto visual con las majestuosas dunas doradas del Sahara"
      ],
      fr: [
        "Marche au cœur du canyon resserré des spectaculaires gorges du Todra",
        "Balade sereine dans une palmeraie historique ombragée",
        "Arrivée aux portes du désert dans la bourgade de Merzouga",
        "Première vision émouvante des monumentales dunes dorées du Sahara"
      ],
      de: [
        "Spaziergang durch den engen Felskorridor der Todra-Schlucht",
        "Besuch einer traditionellen Dattelpalmen-Oase",
        "Ankunft im Wüstendorf Merzouga",
        "Erster Blick auf die majestätischen goldenen Sanddünen der Sahara"
      ],
      it: [
        "Passeggiata nel suggestivo corridoio delle Gole del Todra",
        "Camminata tranquilla nell'antico palmeto e nei suoi canali d'irrigazione",
        "Arrivo alle porte del deserto a Merzouga",
        "Primo indimenticabile sguardo sulle alte dune dorate del Sahara"
      ],
      ar: [
        "المشي في الممر الصخري الشاهق لمضايق تودغى",
        "جولة استرخاء واستكشاف بين نخيل الواحات التاريخية القديمة",
        "الوصول إلى قرية مرزوكة على مشارف بحر الرمال",
        "أول مشهد مهيب للأفق وهو يتزين بكثبان الصحراء الذهبية العالية"
      ]
    }
  },
  {
    stageIndex: 5,
    isReverse: false,
    image: "/images/sahara-dunes.jpg",
    badge: {
      en: "✦ STAGE FIVE · DAY 5 ✦",
      es: "✦ ETAPA CINCO · DÍA 5 ✦",
      fr: "✦ ÉTAPE CINQ · JOUR 5 ✦",
      de: "✦ ETAPPE FÜNF · TAG 5 ✦",
      it: "✦ TAPPA CINQUE · GIORNO 5 ✦",
      ar: "✦ المرحلة الخامسة · اليوم 5 ✦"
    },
    title: {
      en: "Erg Chebbi · Sunset Dunes & Starlit Camp",
      es: "Erg Chebbi · Dunas al Atardecer y Campamento Bajo Estrellas",
      fr: "Erg Chebbi · Coucher de Soleil & Camp Étoilé",
      de: "Erg Chebbi · Dünensonnenuntergang & Sternencamp",
      it: "Erg Chebbi · Tramonto sulle Dune e Campo Sotto le Stelle",
      ar: "عرق الشبي · غروب الكثبان ومخيم تحت أضواء النجوم"
    },
    text: {
      en: "The emotional heart of the journey. We leave modern noise behind and ride gentle camels into the sea of golden sand at sunset. At night, traditional drums under stars.",
      es: "El epicentro emocional del viaje. Dejamos atrás todo ruido para adentrarnos en dromedario en el mar de arena al caer el sol. Noche de tambores y cielo abierto.",
      fr: "Le cœur émotionnel du voyage. Nous laissons le bruit moderne derrière nous pour chevaucher les dromadaires vers la mer de sable au couchant. Nuit de tambours sous les étoiles.",
      de: "Das emotionale Herzstück der Reise. Wir lassen die Hektik hinter uns und reiten auf Kamelen dem Sonnenuntergang im Sandmeer entgegen. Trommelklänge unterm Himmelszelt.",
      it: "Il cuore emozionale del viaggio. Lasciamo indietro il mondo quotidiano per addentrarci a dorso di dromedario nel mare di sabbia dorata. Tambori e volta stellata.",
      ar: "القلب النابض للرحلة ولحظتها الخالدة؛ نودع كل صخب حديث ونمتطي الجمال نحو بحر الرمال الذهبية وقت الغروب، تليها ليلة ساحرة على إيقاع طبوع كناوة تحت سماء تعج بالنجوم."
    },
    listItems: {
      en: [
        "Sunset camel trek across the crests of amber dunes",
        "Sandboarding and meditative silence on 150-meter dune peaks",
        "Night in a luxury desert glamping camp with real beds & private bathrooms",
        "Hypnotic Gnawa drum music around the crackling campfire under the Milky Way"
      ],
      es: [
        "Caravana de dromedarios al atardecer sobre las crestas doradas",
        "Sandboarding y silencio meditativo en la cima de dunas de 150 metros",
        "Noche en campamento de jaimas de lujo con camas reales y baño privado",
        "Música hipnótica de tambores gnawa junto al fuego bajo la Vía Láctea"
      ],
      fr: [
        "Caravane de dromadaires au soleil couchant sur les crêtes ocres",
        "Sandboarding et silence méditatif au sommet de dunes de 150 mètres",
        "Nuit dans un camp de tentes berbères de luxe avec literie douillette et salle de bain privée",
        "Musique hypnotique de tambours gnawa autour du feu sous la Voie Lactée"
      ],
      de: [
        "Kamelritt bei Sonnenuntergang über die Kämme der Bernsteindünen",
        "Sandboarding und meditative Stille auf 150 Meter hohen Dünenkuppen",
        "Übernachtung im luxuriösen Wüstencamp mit echten Betten und privatem Bad",
        "Hypnotische Gnawa-Trommelmusik am knisternden Lagerfeuer unter der Milchstraße"
      ],
      it: [
        "Carovana di dromedari al tramonto sulle creste dorate",
        "Sandboarding e silenzio meditativo in cima a dune di oltre 150 metri",
        "Notte in un accogliente glamping nel deserto con letti veri e bagno privato",
        "Musica ipnotica di tamburi gnawa attorno al fuoco sotto la Via Lattea"
      ],
      ar: [
        "مسير الجمال الهادئ عند الغروب فوق قمم الكثبان الرملية الذهبية",
        "تجربة التزلج على الرمال ولحظات تأمل وصمت مطلق على علو 150 متراً",
        "مبيت في مخيم صحراوي فاخر مزود بأسرّة مريحة وحمامات خاصة كاملة",
        "إيقاعات كناوة الروحية الساحرة حول لهب المخيم تحت مجرة درب التبانة"
      ]
    }
  },
  {
    stageIndex: 6,
    isReverse: true,
    image: "/images/side-mirror-sunset.jpg",
    badge: {
      en: "✦ STAGE SIX · DAY 6 ✦",
      es: "✦ ETAPA SEIS · DÍA 6 ✦",
      fr: "✦ ÉTAPE SIX · JOUR 6 ✦",
      de: "✦ ETAPPE SECHS · TAG 6 ✦",
      it: "✦ TAPPA SEI · GIORNO 6 ✦",
      ar: "✦ المرحلة السادسة · اليوم 6 ✦"
    },
    title: {
      en: "Sunrise Whispers & Living Nomad Culture",
      es: "Amanecer en las Dunas y Encuentro Nómada",
      fr: "Chuchotements de l'Aube & Culture Nomade",
      de: "Sonnenaufgang & Lebendige Nomadenkultur",
      it: "Alba nel Deserto e Incontro Nomade",
      ar: "همسات الفجر ولقاء الثقافة البدوية الرحل"
    },
    text: {
      en: "Watching the dawn paint the dunes in soft rose, apricot, and gold. Meeting local nomadic families who share their ancestral relationship with the desert.",
      es: "Ver amanecer mientras el sol tiñe las arenas en tonos rosa, albaricoque y oro. Encuentro con familias nómadas que comparten su vínculo sagrado con la inmensidad.",
      fr: "Voir l'aube peindre les dunes de nuances rose, abricot et or. Rencontre intime avec des familles nomades partageant leur lien séculaire avec le désert.",
      de: "Erleben, wie die Morgendämmerung den Sand in zarte Rosé-, Aprikosen- und Goldtöne taucht. Begegnung mit Nomadenfamilien und ihrer Naturverbundenheit.",
      it: "Ammirare l'alba che dipinge le dune di sfumature rosa, albicocca e oro. Incontro speciale con famiglie nomadi che condividono il loro legame con la terra.",
      ar: "مشاهدة الفجر وهو يرسم على الرمال تدرجات الوردي والمشمشي والذهب، يتبعه لقاء إنساني دافئ مع عائلات بدوية رحل تروي ارتباطها العريق بالأرض."
    },
    listItems: {
      en: [
        "Dawn meditation and contemplation from the highest dune",
        "Traditional Berber breakfast with warm bread, olive oil, and fresh date honey",
        "4×4 desert excursion visiting nomad encampments and fossil beds",
        "Scenic journey toward the fragrant Valley of Roses"
      ],
      es: [
        "Meditación y contemplación del amanecer desde la cresta más alta",
        "Desayuno tradicional bereber con pan recién horneado, aceite de oliva y miel de dátiles",
        "Excursión en 4×4 por antiguos lechos fósiles y campamentos nómadas",
        "Ruta escénica hacia el perfumado Valle de las Rosas"
      ],
      fr: [
        "Méditation à l'aube et contemplation depuis le sommet de la plus haute dune",
        "Petit-déjeuner berbère avec pain chaud, huile d'olive et miel de dattes",
        "Excursion en 4×4 à la rencontre des campements nomades et gisements de fossiles",
        "Route panoramique vers la parfumée Vallée des Roses"
      ],
      de: [
        "Morgenmeditation und Stille auf dem Kamm der höchsten Düne",
        "Traditionelles Berberfrühstück mit warmem Brot, Olivenöl und Dattelhonig",
        "4×4-Wüstenausflug zu Nomadenfamilien und uralten Fossilienbetten",
        "Malerische Fahrt in Richtung des duftenden Tals der Rosen"
      ],
      it: [
        "Meditazione all'alba e contemplazione dalla duna più alta",
        "Colazione tradizionale berbera con pane caldo, olio d'oliva e miele di datteri",
        "Escursione in 4×4 tra accampamenti nomadi e antichi letti fossili",
        "Viaggio panoramico verso la profumata Valle delle Rose"
      ],
      ar: [
        "جلسة تأمل صباحية واستقبال أنوار الفجر من أعلى قمة رملية",
        "إفطار بربري أصيل بالخبز الطازج وزيت الزيتون وعسل التمر الشهي",
        "جولة بدفع رباعي 4×4 لزيارة خيام البدو الرحل ومواقع الأحافير العريقة",
        "المسير عبر المناظر الطبيعية الخلابة نحو وادي الورود العطر"
      ]
    }
  },
  {
    stageIndex: 7,
    isReverse: false,
    image: "/images/rose-valley-kasbah.jpg",
    badge: {
      en: "✦ STAGE SEVEN · DAY 7 ✦",
      es: "✦ ETAPA SIETE · DÍA 7 ✦",
      fr: "✦ ÉTAPE SEPT · JOUR 7 ✦",
      de: "✦ ETAPPE SIEBEN · TAG 7 ✦",
      it: "✦ TAPPA SETTE · GIORNO 7 ✦",
      ar: "✦ المرحلة السابعة · اليوم 7 ✦"
    },
    title: {
      en: "Valley of Roses & The Road Home",
      es: "Valle de las Rosas y el Camino de Regreso",
      fr: "Vallée des Roses & Le Chemin du Retour",
      de: "Tal der Rosen & Der Weg nach Hause",
      it: "Valle delle Rose e il Ritorno",
      ar: "وادي الورود وطريق العودة"
    },
    text: {
      en: "We are no longer the same women who landed in Marrakech seven days ago. We cross the final mountain ridge carrying new perspectives, unbreakable bonds of sisterhood.",
      es: "Ya no somos las mismas mujeres que aterrizaron en Marrakech hace siete días. Cruzamos la última cordillera llevando una nueva mirada y lazos de hermandad.",
      fr: "Nous ne sommes plus les mêmes femmes qu'à notre arrivée à Marrakech il y a sept jours. Nous franchissons les crêtes avec un regard neuf et des liens fraternels indéfectibles.",
      de: "Wir sind nicht mehr dieselben Frauen, die vor sieben Tagen in Marrakesch landeten. Wir überqueren den Bergkamm mit neuen Perspektiven und tiefen Freundschaften.",
      it: "Non siamo più le stesse donne atterrate a Marrakech sette giorni fa. Valichiamo l'ultima cresta portando con noi nuove prospettive e legami indelebili.",
      ar: "لم نعد نفس النساء اللواتي وطأت أقدامهن مراكش قبل سبعة أيام؛ نعبر آخر قمم الجبال بنظرة جديدة للحياة وروابط أخوة وصداقة نسائية لا تنكسر."
    },
    listItems: {
      en: [
        "Visit to local women’s artisan rose water cooperatives",
        "Scenic descent through the High Atlas foothills",
        "Farewell celebration dinner & sisterhood closing circle in Marrakech",
        "Coordinated airport transfers for your return flights"
      ],
      es: [
        "Visita a cooperativas artesanales de agua de rosas gestionadas por mujeres",
        "Descenso panorámico por las faldas del Alto Atlas",
        "Cena de despedida y círculo de clausura entre hermanas en Marrakech",
        "Traslados coordinados al aeropuerto según el horario de tu vuelo"
      ],
      fr: [
        "Visite d'une coopérative artisanale d'eau de rose tenue par des femmes",
        "Descente panoramique à travers les contreforts du Haut Atlas",
        "Dîner de célébration et cercle de clôture entre femmes à Marrakech",
        "Transferts aéroport coordonnés pour vos vols retour"
      ],
      de: [
        "Besuch einer von Frauen geführten Rosenwasser-Kooperative",
        "Malerische Abfahrt durch die Ausläufer des Hohen Atlas",
        "Festliches Abschiedsessen und Abschlusskreis der Schwesternschaft in Marrakesch",
        "Koordinierter Flughafentransfer für Ihren Rückflug"
      ],
      it: [
        "Visita a una cooperativa artigianale di acqua di rose gestita da donne locali",
        "Discesa panoramica lungo i contrafforti dell'Alto Atlante",
        "Cena di celebrazione e cerchio conclusivo tra sorelle a Marrakech",
        "Trasferimenti coordinati all'aeroporto per i voli di rientro"
      ],
      ar: [
        "زيارة تعاونيات نسائية حرفية لتقطير ماء الورد الطبيعي",
        "هبوط بانورامي ممتع عبر سفوح جبال الأطلس الكبير",
        "عشاء ختامي احتفالي وحلقة وداع واعتزاز بالصداقة في مراكش",
        "خدمة التوصيل المنسقة إلى المطار حسب موعد رحلة العودة"
      ]
    }
  }
];

export default function ItineraryStages({
  currentLocale = "en"
}: {
  currentLocale?: Locale;
}) {
  return (
    <div className="wp-block-group alignwide mda-stages-container">
      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
        {STAGES_DATA.map((stage) => {
          const badge = stage.badge[currentLocale] || stage.badge.en || "";
          const title = stage.title[currentLocale] || stage.title.en || "";
          const text = stage.text[currentLocale] || stage.text.en || "";
          const list = stage.listItems[currentLocale] || stage.listItems.en || [];

          return (
            <div
              key={stage.stageIndex}
              className={`wp-block-group mda-stage-card ${
                stage.isReverse ? "mda-stage-card--reverse" : ""
              }`}
            >
              <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                {/* Media Column */}
                <div className="wp-block-group mda-stage-img-wrap">
                  <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                    <figure className="wp-block-image size-full">
                      <Image
                        src={stage.image}
                        alt={title}
                        width={600}
                        height={450}
                        className="object-cover w-full h-full"
                        priority={stage.stageIndex <= 2}
                      />
                    </figure>
                  </div>
                </div>

                {/* Content Column */}
                <div className="wp-block-group mda-stage-content">
                  <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                    <p className="mda-stage-badge">{badge}</p>
                    <h2 className="mda-stage-title">{title}</h2>
                    <p className="mda-stage-text">{text}</p>
                    <ul className="mda-stage-list">
                      {list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
