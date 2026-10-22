import { Locale } from './translations';

export interface StageHeader {
  kicker: string;
  title: string;
  desc: string;
  btn: string;
}

export interface HomeStageItem {
  num: string;
  kicker: string;
  title: string;
  sub: string;
  text: string;
  list: string[];
  image: string;
  alt: string;
}

export const STAGES_HEADER: Record<Locale, StageHeader> = {
  "en": {
    "kicker": "The itinerary · 23 — 29 Sep 2026",
    "title": "Seven stages, one single story",
    "desc": "From the bustle of Marrakech to the immensity of the Sahara — and back. Every stage opens a new way of seeing.",
    "btn": "View Complete Itinerary & Stays Guide"
  },
  "es": {
    "kicker": "El itinerario · 23 — 29 Sep 2026",
    "title": "Siete etapas, una misma historia",
    "desc": "Del bullicio de Marrakech a la inmensidad del Sahara — y de vuelta. Cada etapa abre una nueva forma de mirar.",
    "btn": "Ver itinerario detallado"
  },
  "fr": {
    "kicker": "L'itinéraire · 23 — 29 sep 2026",
    "title": "Sept étapes, une seule histoire",
    "desc": "De l'agitation de Marrakech à l'immensité du Sahara — et retour. Chaque étape ouvre une nouvelle façon de regarder.",
    "btn": "Voir l'itinéraire détaillé"
  },
  "de": {
    "kicker": "Die Reiseroute · 23. — 29. Sept. 2026",
    "title": "Sieben Etappen, eine einzige Geschichte",
    "desc": "Vom Trubel Marrakeschs bis zur Weite der Sahara — und zurück. Jede Etappe öffnet eine neue Art zu sehen.",
    "btn": "Detaillierten Reiseplan ansehen"
  },
  "it": {
    "kicker": "L'itinerario · 23 — 29 set 2026",
    "title": "Sette tappe, una sola storia",
    "desc": "Dal trambusto di Marrakech all'immensità del Sahara — e ritorno. Ogni tappa apre un nuovo modo di guardare.",
    "btn": "Vedi itinerario dettagliato"
  },
  "pt": {
    "kicker": "O itinerário · 23 — 29 set 2026",
    "title": "Sete etapas, uma mesma história",
    "desc": "Do bulício de Marraquexe à imensidão do Sara — e de volta. Cada etapa abre uma nova forma de olhar.",
    "btn": "Ver itinerário detalhado"
  },
  "ar": {
    "kicker": "المسار · 23 — 29 سبتمبر 2026",
    "title": "سبع مراحل، قصة واحدة",
    "desc": "من صخب مراكش إلى امتداد الصحراء — وعودة. كل مرحلة تفتح طريقة جديدة في النظر.",
    "btn": "عرض خط سير الرحلة الكامل"
  },
  "ru": {
    "kicker": "Маршрут · 23 — 29 сент. 2026",
    "title": "Семь этапов, одна общая история",
    "desc": "От суеты Марракеша до безграничной Сахары — и обратно. Каждый этап открывает новый взгляд.",
    "btn": "Посмотреть подробный маршрут"
  }
};

export const STAGES_BY_LOCALE: Record<Locale, HomeStageItem[]> = {
  "en": [
    {
      "num": "01",
      "kicker": "Stage one · Day 1",
      "title": "Marrakech",
      "sub": "Where the journey begins",
      "text": "Marrakech isn't visited. It's felt. The city welcomes us with the scent of spices, the colours of the medina and an energy that is hard to explain and impossible to miss from the very first moment.",
      "list": [
        "Group meeting at Marrakech airport",
        "Transfer to the riad and our first shared moments",
        "Free time to let the city surprise you",
        "First night in Marrakech"
      ],
      "image": "/images/marrakech-city.jpg",
      "alt": "Marrakech medina"
    },
    {
      "num": "02",
      "kicker": "Stage two · On the road",
      "title": "High Atlas",
      "sub": "From the bustle to the immensity",
      "text": "There is a moment in every adventure when something shifts: the city slowly disappears in the rear-view mirror and conversations grow deeper. Ahead of us vast mountains unfold, and horizons that invite us to recover our capacity for wonder.",
      "list": [
        "We will cross the High Atlas over its mountain passes",
        "We will discover ancient Berber villages",
        "We will visit Ait Ben Haddou, a UNESCO World Heritage Site",
        "We will draw close to the gates of the desert"
      ],
      "image": "/images/atlas-mountains.jpg",
      "alt": "High Atlas mountains"
    },
    {
      "num": "03",
      "kicker": "Stage three · Oasis",
      "title": "Draa Valley",
      "sub": "Towards the horizon",
      "text": "Palm groves appear out of the arid land. Ancient villages keep telling stories of generations past. And the horizon seems to widen with every kilometre. We know the desert is waiting for us.",
      "list": [
        "We will travel through the largest oasis in Morocco",
        "We will discover Rissani, a centuries-old market in North Africa",
        "We will pass through Berber villages on the road to the Sahara",
        "<strong>Tonight we sleep in the desert</strong>"
      ],
      "image": "/images/draa-valley.jpg",
      "alt": "Draa valley palm oasis"
    },
    {
      "num": "04",
      "kicker": "Stage four · Erg Chebbi",
      "title": "The Sahara",
      "sub": "There, where something awakens",
      "text": "Some places impress you. And some places stay with you long after you have returned. Nothing compares to seeing for the first time a horizon made of nothing but dunes and silence.",
      "list": [
        "Walking among the dunes of Erg Chebbi",
        "4×4 adventure through impossible landscapes",
        "Oases and hidden corners off the beaten track",
        "Sunset over the dunes"
      ],
      "image": "/images/sahara-dunes.jpg",
      "alt": "Sahara desert dunes"
    },
    {
      "num": "05",
      "kicker": "Stage five · Night",
      "title": "Under the stars",
      "sub": "The magic that never shows up in photographs",
      "text": "When the sun disappears behind the dunes, conversations stretch out and the sky fills with more stars than many of us have ever seen. Around the fire we will share stories, silences, music and moments that need no planning at all.",
      "list": [
        "A night in a luxury camp in the Sahara",
        "Traditional Moroccan dinner",
        "Music and drums around the fire",
        "One of the most impressive starry skies in the world"
      ],
      "image": "/images/night-campfire.jpg",
      "alt": "Night campfire under stars"
    },
    {
      "num": "06",
      "kicker": "Stage six · Valley of Roses",
      "title": "Valleys & kasbahs",
      "sub": "The journey continues",
      "text": "After the intensity of the desert, the journey continues through valleys, kasbahs and villages that seem to belong to another time. By now we are not only discovering Morocco: we are learning to look at things differently.",
      "list": [
        "The spectacular Todra Gorge",
        "The Route of a Thousand Kasbahs",
        "Traditional villages almost untouched for generations",
        "A night in the Valley of Roses"
      ],
      "image": "/images/rose-valley-kasbah.jpg",
      "alt": "Valley of Roses kasbah"
    },
    {
      "num": "07",
      "kicker": "Stage seven · Return",
      "title": "The road home",
      "sub": "The treasure we take with us",
      "text": "We are no longer the same women who arrived in Marrakech. Some journeys end when we get home, and others stay with us for a long time afterwards. This is one of the latter.",
      "list": [
        "A traditional kasbah and Berber life",
        "The legendary film studios of Ouarzazate",
        "Back over the High Atlas, landscapes of the journey",
        "Free morning in Marrakech and transfer to the airport"
      ],
      "image": "/images/desert-mountains.jpg",
      "alt": "Desert mountains road"
    }
  ],
  "es": [
    {
      "num": "01",
      "kicker": "Etapa uno · Día 1",
      "title": "Marrakech",
      "sub": "El comienzo de la travesía",
      "text": "Marrakech no se visita. Se siente. La ciudad nos recibe con el aroma de las especias, los colores de la medina y esa energía difícil de explicar que se percibe desde el primer momento.",
      "list": [
        "Encuentro del grupo en el aeropuerto de Marrakech",
        "Traslado al riad y primeros momentos compartidos",
        "Tiempo libre para dejarse sorprender por la ciudad",
        "Primera noche en Marrakech"
      ],
      "image": "/images/marrakech-city.jpg",
      "alt": "Marrakech medina"
    },
    {
      "num": "02",
      "kicker": "Etapa dos · En camino",
      "title": "Alto Atlas",
      "sub": "Del bullicio a la inmensidad",
      "text": "Hay un momento en toda aventura en el que algo cambia: cuando la ciudad desaparece poco a poco en el retrovisor y las conversaciones se vuelven más profundas. Frente a nosotras se despliegan montañas inmensas y horizontes que invitan a recuperar la capacidad de asombro.",
      "list": [
        "Cruzaremos el Alto Atlas por sus puertos de montaña",
        "Descubriremos antiguos pueblos bereberes",
        "Visitaremos Ait Ben Haddou, Patrimonio de la Humanidad",
        "Nos acercaremos a las puertas del desierto"
      ],
      "image": "/images/atlas-mountains.jpg",
      "alt": "High Atlas mountains"
    },
    {
      "num": "03",
      "kicker": "Etapa tres · Oasis",
      "title": "Valle del Draa",
      "sub": "Hacia el horizonte",
      "text": "Los palmerales aparecen entre la tierra árida. Los antiguos pueblos siguen contando historias de generaciones pasadas. Y el horizonte parece hacerse cada vez más amplio. Sabemos que el desierto nos espera.",
      "list": [
        "Recorreremos el oasis más extenso de Marruecos",
        "Descubriremos Rissani, mercado centenario del norte de África",
        "Atravesaremos pueblos bereberes camino del Sahara",
        "<strong>Esta noche dormiremos en el desierto</strong>"
      ],
      "image": "/images/draa-valley.jpg",
      "alt": "Draa valley palm oasis"
    },
    {
      "num": "04",
      "kicker": "Etapa cuatro · Erg Chebbi",
      "title": "El Sahara",
      "sub": "Allí donde algo se despierta",
      "text": "Hay lugares que impresionan. Y hay lugares que permanecen contigo mucho después de haber regresado. Nada se parece a contemplar por primera vez un horizonte formado únicamente por dunas y silencio.",
      "list": [
        "Paseo entre las dunas de Erg Chebbi",
        "Aventura en 4×4 por paisajes imposibles",
        "Oasis y rincones escondidos fuera de las rutas",
        "Atardecer sobre las dunas"
      ],
      "image": "/images/sahara-dunes.jpg",
      "alt": "Sahara desert dunes"
    },
    {
      "num": "05",
      "kicker": "Etapa cinco · Noche",
      "title": "Bajo las estrellas",
      "sub": "La magia que no aparece en las fotografías",
      "text": "Cuando el sol desaparece tras las dunas, las conversaciones se alargan y el cielo se llena de más estrellas de las que muchas hemos visto nunca. Alrededor del fuego compartiremos historias, silencios, música y momentos que no necesitan ser planificados.",
      "list": [
        "Noche en campamento de lujo en el Sahara",
        "Cena tradicional marroquí",
        "Música y tambores alrededor del fuego",
        "Uno de los cielos estrellados más impresionantes del mundo"
      ],
      "image": "/images/night-campfire.jpg",
      "alt": "Night campfire under stars"
    },
    {
      "num": "06",
      "kicker": "Etapa seis · Valle de las Rosas",
      "title": "Valles & kasbahs",
      "sub": "El viaje continúa",
      "text": "Después de la intensidad del desierto, el viaje continúa entre valles, kasbahs y pueblos que parecen habitar otro tiempo. A estas alturas ya no solo estamos descubriendo Marruecos: estamos aprendiendo a mirar de otra manera.",
      "list": [
        "Las impresionantes Gargantas del Todra",
        "La Ruta de las Mil Kasbahs",
        "Pueblos tradicionales casi intactos durante generaciones",
        "Noche en el Valle de las Rosas"
      ],
      "image": "/images/rose-valley-kasbah.jpg",
      "alt": "Valley of Roses kasbah"
    },
    {
      "num": "07",
      "kicker": "Etapa siete · Regreso",
      "title": "El camino de regreso",
      "sub": "El tesoro que nos llevamos",
      "text": "Ya no somos las mismas mujeres que llegaron a Marrakech. Hay viajes que terminan cuando regresamos a casa, y otros que nos acompañan durante mucho tiempo después. Este es de los segundos.",
      "list": [
        "Kasbah tradicional y vida bereber",
        "Los míticos estudios de cine de Ouarzazate",
        "Alto Atlas de regreso, paisajes del viaje",
        "Mañana libre en Marrakech y traslado al aeropuerto"
      ],
      "image": "/images/desert-mountains.jpg",
      "alt": "Desert mountains road"
    }
  ],
  "fr": [
    {
      "num": "01",
      "kicker": "Étape une · Jour 1",
      "title": "Marrakech",
      "sub": "Le début du voyage",
      "text": "Marrakech ne se visite pas. Elle se ressent. La ville nous accueille avec le parfum des épices, les couleurs de la médina et une énergie difficile à expliquer, perceptible dès le premier instant.",
      "list": [
        "Rendez-vous du groupe à l'aéroport de Marrakech",
        "Transfert au riad et premiers moments partagés",
        "Temps libre pour se laisser surprendre par la ville",
        "Première nuit à Marrakech"
      ],
      "image": "/images/marrakech-city.jpg",
      "alt": "Marrakech medina"
    },
    {
      "num": "02",
      "kicker": "Étape deux · En chemin",
      "title": "Haut Atlas",
      "sub": "De l'agitation à l'immensité",
      "text": "Il y a un moment, dans toute aventure, où quelque chose change : la ville disparaît peu à peu dans le rétroviseur et les conversations deviennent plus profondes. Devant nous se déploient des montagnes immenses et des horizons qui invitent à retrouver la capacité d'émerveillement.",
      "list": [
        "Nous traverserons le Haut Atlas par ses cols de montagne",
        "Nous découvrirons d'anciens villages berbères",
        "Nous visiterons Ait Ben Haddou, patrimoine mondial de l'humanité",
        "Nous approcherons des portes du désert"
      ],
      "image": "/images/atlas-mountains.jpg",
      "alt": "High Atlas mountains"
    },
    {
      "num": "03",
      "kicker": "Étape trois · Oasis",
      "title": "Vallée du Draa",
      "sub": "Vers l'horizon",
      "text": "Les palmeraies apparaissent dans la terre aride. Les villages anciens continuent de raconter l'histoire des générations passées. Et l'horizon semble s'élargir à chaque kilomètre. Nous savons que le désert nous attend.",
      "list": [
        "Nous parcourrons la plus vaste oasis du Maroc",
        "Nous découvrirons Rissani, marché centenaire du nord de l'Afrique",
        "Nous traverserons des villages berbères sur la route du Sahara",
        "<strong>Cette nuit, nous dormons dans le désert</strong>"
      ],
      "image": "/images/draa-valley.jpg",
      "alt": "Draa valley palm oasis"
    },
    {
      "num": "04",
      "kicker": "Étape quatre · Erg Chebbi",
      "title": "Le Sahara",
      "sub": "Là où quelque chose s'éveille",
      "text": "Il y a des lieux qui impressionnent. Et il y a des lieux qui restent avec vous bien après le retour. Rien ne ressemble à la contemplation, pour la première fois, d'un horizon fait uniquement de dunes et de silence.",
      "list": [
        "Marche entre les dunes d'Erg Chebbi",
        "Aventure en 4×4 dans des paysages impossibles",
        "Oasis et recoins cachés hors des sentiers battus",
        "Coucher de soleil sur les dunes"
      ],
      "image": "/images/sahara-dunes.jpg",
      "alt": "Sahara desert dunes"
    },
    {
      "num": "05",
      "kicker": "Étape cinq · Nuit",
      "title": "Sous les étoiles",
      "sub": "La magie qui n'apparaît pas sur les photographies",
      "text": "Quand le soleil disparaît derrière les dunes, les conversations s'allongent et le ciel se remplit de plus d'étoiles que beaucoup d'entre nous n'en ont jamais vues. Autour du feu, nous partagerons des histoires, des silences, de la musique et des moments qui n'ont pas besoin d'être planifiés.",
      "list": [
        "Une nuit en campement de luxe dans le Sahara",
        "Dîner traditionnel marocain",
        "Musique et tambours autour du feu",
        "L'un des ciels étoilés les plus impressionnants du monde"
      ],
      "image": "/images/night-campfire.jpg",
      "alt": "Night campfire under stars"
    },
    {
      "num": "06",
      "kicker": "Étape six · Vallée des Roses",
      "title": "Vallées & kasbahs",
      "sub": "Le voyage continue",
      "text": "Après l'intensité du désert, le voyage se poursuit entre vallées, kasbahs et villages qui semblent appartenir à un autre temps. À ce stade, nous ne découvrons plus seulement le Maroc : nous apprenons à regarder autrement.",
      "list": [
        "Les impressionnantes gorges du Todra",
        "La route des mille kasbahs",
        "Villages traditionnels presque intacts depuis des générations",
        "Nuit dans la vallée des Roses"
      ],
      "image": "/images/rose-valley-kasbah.jpg",
      "alt": "Valley of Roses kasbah"
    },
    {
      "num": "07",
      "kicker": "Étape sept · Retour",
      "title": "Le chemin du retour",
      "sub": "Le trésor que nous emportons",
      "text": "Nous ne sommes plus les mêmes femmes qui sont arrivées à Marrakech. Certains voyages se terminent quand on rentre à la maison, et d'autres nous accompagnent longtemps après. Celui-ci fait partie des seconds.",
      "list": [
        "Kasbah traditionnelle et vie berbère",
        "Les mythiques studios de cinéma d'Ouarzazate",
        "Retour par le Haut Atlas, paysages du voyage",
        "Matinée libre à Marrakech et transfert à l'aéroport"
      ],
      "image": "/images/desert-mountains.jpg",
      "alt": "Desert mountains road"
    }
  ],
  "de": [
    {
      "num": "01",
      "kicker": "Etappe eins · Tag 1",
      "title": "Marrakesch",
      "sub": "Der Beginn der Reise",
      "text": "Marrakesch besucht man nicht. Man spürt es. Die Stadt empfängt uns mit dem Duft der Gewürze, den Farben der Medina und einer Energie, die sich schwer erklären lässt und vom ersten Moment an spürbar ist.",
      "list": [
        "Treffen der Gruppe am Flughafen von Marrakesch",
        "Transfer zum Riad und erste gemeinsame Momente",
        "Freie Zeit, um sich von der Stadt überraschen zu lassen",
        "Erste Nacht in Marrakesch"
      ],
      "image": "/images/marrakech-city.jpg",
      "alt": "Marrakech medina"
    },
    {
      "num": "02",
      "kicker": "Etappe zwei · Unterwegs",
      "title": "Hoher Atlas",
      "sub": "Vom Trubel in die Weite",
      "text": "Es gibt in jedem Abenteuer einen Moment, in dem sich etwas verändert: Die Stadt verschwindet nach und nach im Rückspiegel und die Gespräche werden tiefer. Vor uns entfalten sich gewaltige Berge und Horizonte, die einladen, die Fähigkeit zum Staunen wiederzufinden.",
      "list": [
        "Wir überqueren den Hohen Atlas über seine Bergpässe",
        "Wir entdecken alte Berberdörfer",
        "Wir besuchen Ait Ben Haddou, UNESCO-Weltkulturerbe",
        "Wir nähern uns den Toren der Wüste"
      ],
      "image": "/images/atlas-mountains.jpg",
      "alt": "High Atlas mountains"
    },
    {
      "num": "03",
      "kicker": "Etappe drei · Oase",
      "title": "Draa-Tal",
      "sub": "Dem Horizont entgegen",
      "text": "Die Palmenhaine tauchen aus der kargen Erde auf. Die alten Dörfer erzählen weiter von vergangenen Generationen. Und der Horizont scheint mit jedem Kilometer weiter zu werden. Wir wissen, dass die Wüste auf uns wartet.",
      "list": [
        "Wir durchqueren die größte Oase Marokkos",
        "Wir entdecken Rissani, einen jahrhundertealten Markt Nordafrikas",
        "Wir fahren durch Berberdörfer auf dem Weg zur Sahara",
        "<strong>Heute Nacht schlafen wir in der Wüste</strong>"
      ],
      "image": "/images/draa-valley.jpg",
      "alt": "Draa valley palm oasis"
    },
    {
      "num": "04",
      "kicker": "Etappe vier · Erg Chebbi",
      "title": "Die Sahara",
      "sub": "Dort, wo etwas erwacht",
      "text": "Es gibt Orte, die beeindrucken. Und es gibt Orte, die bleiben, lange nachdem man zurückgekehrt ist. Nichts gleicht dem ersten Anblick eines Horizonts, der nur aus Dünen und Stille besteht.",
      "list": [
        "Spaziergang zwischen den Dünen von Erg Chebbi",
        "4×4-Abenteuer durch unmögliche Landschaften",
        "Oasen und versteckte Winkel abseits der Routen",
        "Sonnenuntergang über den Dünen"
      ],
      "image": "/images/sahara-dunes.jpg",
      "alt": "Sahara desert dunes"
    },
    {
      "num": "05",
      "kicker": "Etappe fünf · Nacht",
      "title": "Unter den Sternen",
      "sub": "Die Magie, die auf keinem Foto erscheint",
      "text": "Wenn die Sonne hinter den Dünen verschwindet, werden die Gespräche länger und der Himmel füllt sich mit mehr Sternen, als viele von uns je gesehen haben. Am Feuer teilen wir Geschichten, Stille, Musik und Momente, die keine Planung brauchen.",
      "list": [
        "Nacht in einem Luxuscamp in der Sahara",
        "Traditionelles marokkanisches Abendessen",
        "Musik und Trommeln am Feuer",
        "Einer der eindrucksvollsten Sternenhimmel der Welt"
      ],
      "image": "/images/night-campfire.jpg",
      "alt": "Night campfire under stars"
    },
    {
      "num": "06",
      "kicker": "Etappe sechs · Rosental",
      "title": "Täler & Kasbahs",
      "sub": "Die Reise geht weiter",
      "text": "Nach der Intensität der Wüste setzt sich die Reise zwischen Tälern, Kasbahs und Dörfern fort, die einer anderen Zeit anzugehören scheinen. Inzwischen entdecken wir nicht mehr nur Marokko: Wir lernen, anders zu schauen.",
      "list": [
        "Die imposanten Todra-Schluchten",
        "Die Straße der tausend Kasbahs",
        "Traditionelle Dörfer, seit Generationen fast unverändert",
        "Nacht im Rosental"
      ],
      "image": "/images/rose-valley-kasbah.jpg",
      "alt": "Valley of Roses kasbah"
    },
    {
      "num": "07",
      "kicker": "Etappe sieben · Rückkehr",
      "title": "Der Weg zurück",
      "sub": "Der Schatz, den wir mitnehmen",
      "text": "Wir sind nicht mehr dieselben Frauen, die in Marrakesch angekommen sind. Manche Reisen enden, wenn wir nach Hause kommen, andere begleiten uns noch lange danach. Diese gehört zu den zweiten.",
      "list": [
        "Traditionelle Kasbah und Berberleben",
        "Die legendären Filmstudios von Ouarzazate",
        "Zurück über den Hohen Atlas, Landschaften der Reise",
        "Freier Vormittag in Marrakesch und Transfer zum Flughafen"
      ],
      "image": "/images/desert-mountains.jpg",
      "alt": "Desert mountains road"
    }
  ],
  "it": [
    {
      "num": "01",
      "kicker": "Tappa uno · Giorno 1",
      "title": "Marrakech",
      "sub": "L'inizio del viaggio",
      "text": "Marrakech non si visita. Si sente. La città ci accoglie con il profumo delle spezie, i colori della medina e un'energia difficile da spiegare, percepibile fin dal primo istante.",
      "list": [
        "Ritrovo del gruppo all'aeroporto di Marrakech",
        "Trasferimento al riad e primi momenti condivisi",
        "Tempo libero per lasciarsi sorprendere dalla città",
        "Prima notte a Marrakech"
      ],
      "image": "/images/marrakech-city.jpg",
      "alt": "Marrakech medina"
    },
    {
      "num": "02",
      "kicker": "Tappa due · In cammino",
      "title": "Alto Atlante",
      "sub": "Dal trambusto all'immensità",
      "text": "C'è un momento, in ogni avventura, in cui qualcosa cambia: la città scompare poco a poco nello specchietto retrovisore e le conversazioni diventano più profonde. Davanti a noi si aprono montagne immense e orizzonti che invitano a ritrovare la capacità di stupirsi.",
      "list": [
        "Attraverseremo l'Alto Atlante attraverso i suoi passi di montagna",
        "Scopriremo antichi villaggi berberi",
        "Visiteremo Ait Ben Haddou, patrimonio dell'umanità",
        "Ci avvicineremo alle porte del deserto"
      ],
      "image": "/images/atlas-mountains.jpg",
      "alt": "High Atlas mountains"
    },
    {
      "num": "03",
      "kicker": "Tappa tre · Oasi",
      "title": "Valle del Draa",
      "sub": "Verso l'orizzonte",
      "text": "Le palmete emergono dalla terra arida. Gli antichi villaggi continuano a raccontare storie di generazioni passate. E l'orizzonte sembra allargarsi chilometro dopo chilometro. Sappiamo che il deserto ci aspetta.",
      "list": [
        "Percorreremo la più vasta oasi del Marocco",
        "Scopriremo Rissani, mercato centenario del nord Africa",
        "Attraverseremo villaggi berberi sulla strada del Sahara",
        "<strong>Questa notte dormiamo nel deserto</strong>"
      ],
      "image": "/images/draa-valley.jpg",
      "alt": "Draa valley palm oasis"
    },
    {
      "num": "04",
      "kicker": "Tappa quattro · Erg Chebbi",
      "title": "Il Sahara",
      "sub": "Là dove qualcosa si risveglia",
      "text": "Ci sono luoghi che impressionano. E ci sono luoghi che restano con te molto dopo il ritorno. Nulla è paragonabile al contemplare per la prima volta un orizzonte fatto solo di dune e silenzio.",
      "list": [
        "Passeggiata tra le dune di Erg Chebbi",
        "Avventura in 4×4 tra paesaggi impossibili",
        "Oasi e angoli nascosti fuori dai percorsi battuti",
        "Tramonto sulle dune"
      ],
      "image": "/images/sahara-dunes.jpg",
      "alt": "Sahara desert dunes"
    },
    {
      "num": "05",
      "kicker": "Tappa cinque · Notte",
      "title": "Sotto le stelle",
      "sub": "La magia che non compare nelle fotografie",
      "text": "Quando il sole scompare dietro le dune, le conversazioni si allungano e il cielo si riempie di più stelle di quante molte di noi abbiano mai visto. Intorno al fuoco condivideremo storie, silenzi, musica e momenti che non hanno bisogno di essere pianificati.",
      "list": [
        "Notte in un campo di lusso nel Sahara",
        "Cena tradizionale marocchina",
        "Musica e tamburi intorno al fuoco",
        "Uno dei cieli stellati più impressionanti del mondo"
      ],
      "image": "/images/night-campfire.jpg",
      "alt": "Night campfire under stars"
    },
    {
      "num": "06",
      "kicker": "Tappa sei · Valle delle Rose",
      "title": "Valli & kasbah",
      "sub": "Il viaggio continua",
      "text": "Dopo l'intensità del deserto, il viaggio prosegue tra valli, kasbah e villaggi che sembrano appartenere a un altro tempo. A questo punto non stiamo più solo scoprendo il Marocco: stiamo imparando a guardare in modo diverso.",
      "list": [
        "Le impressionanti Gole del Todra",
        "La strada delle mille kasbah",
        "Villaggi tradizionali quasi intatti da generazioni",
        "Notte nella Valle delle Rose"
      ],
      "image": "/images/rose-valley-kasbah.jpg",
      "alt": "Valley of Roses kasbah"
    },
    {
      "num": "07",
      "kicker": "Tappa sette · Ritorno",
      "title": "La strada del ritorno",
      "sub": "Il tesoro che portiamo con noi",
      "text": "Non siamo più le stesse donne che sono arrivate a Marrakech. Alcuni viaggi finiscono quando torniamo a casa, altri ci accompagnano a lungo dopo. Questo è tra i secondi.",
      "list": [
        "Kasbah tradizionale e vita berbera",
        "I mitici studi cinematografici di Ouarzazate",
        "Ritorno attraverso l'Alto Atlante, paesaggi del viaggio",
        "Mattina libera a Marrakech e trasferimento all'aeroporto"
      ],
      "image": "/images/desert-mountains.jpg",
      "alt": "Desert mountains road"
    }
  ],
  "pt": [
    {
      "num": "01",
      "kicker": "Etapa um · Dia 1",
      "title": "Marraquexe",
      "sub": "O início da viagem",
      "text": "Marraquexe não se visita. Sente-se. A cidade recebe-nos com o aroma das especiarias, as cores da medina e uma energia difícil de explicar, que se percebe desde o primeiro momento.",
      "list": [
        "Encontro do grupo no aeroporto de Marraquexe",
        "Transfer para o riad e primeiros momentos partilhados",
        "Tempo livre para se deixar surpreender pela cidade",
        "Primeira noite em Marraquexe"
      ],
      "image": "/images/marrakech-city.jpg",
      "alt": "Marrakech medina"
    },
    {
      "num": "02",
      "kicker": "Etapa dois · A caminho",
      "title": "Alto Atlas",
      "sub": "Do bulício à imensidão",
      "text": "Há um momento em qualquer aventura em que algo muda: a cidade desaparece pouco a pouco no retrovisor e as conversas tornam-se mais profundas. À nossa frente abrem-se montanhas imensas e horizontes que convidam a recuperar a capacidade de nos surpreendermos.",
      "list": [
        "Atravessaremos o Alto Atlas pelos seus desfiladeiros de montanha",
        "Descobriremos antigas aldeias berberes",
        "Visitaremos Ait Ben Haddou, Património Mundial da Humanidade",
        "Aproximar-nos-emos das portas do deserto"
      ],
      "image": "/images/atlas-mountains.jpg",
      "alt": "High Atlas mountains"
    },
    {
      "num": "03",
      "kicker": "Etapa três · Oásis",
      "title": "Vale do Drá",
      "sub": "Em direção ao horizonte",
      "text": "Os palmeirais surgem na terra árida. As aldeias antigas continuam a contar histórias de gerações passadas. E o horizonte parece tornar-se cada vez mais amplo. Sabemos que o deserto nos espera.",
      "list": [
        "Percorreremos o oásis mais extenso de Marrocos",
        "Descobriremos Rissani, mercado centenário do norte de África",
        "Atravessaremos aldeias berberes a caminho do Sara",
        "<strong>Esta noite dormimos no deserto</strong>"
      ],
      "image": "/images/draa-valley.jpg",
      "alt": "Draa valley palm oasis"
    },
    {
      "num": "04",
      "kicker": "Etapa quatro · Erg Chebbi",
      "title": "O Sara",
      "sub": "Lá onde algo desperta",
      "text": "Há lugares que impressionam. E há lugares que ficam contigo muito depois de regressares. Nada se compara a contemplar pela primeira vez um horizonte feito apenas de dunas e silêncio.",
      "list": [
        "Passeio entre as dunas de Erg Chebbi",
        "Aventura em 4×4 por paisagens impossíveis",
        "Oásis e recantos escondidos fora das rotas",
        "Pôr do sol sobre as dunas"
      ],
      "image": "/images/sahara-dunes.jpg",
      "alt": "Sahara desert dunes"
    },
    {
      "num": "05",
      "kicker": "Etapa cinco · Noite",
      "title": "Sob as estrelas",
      "sub": "A magia que não aparece nas fotografias",
      "text": "Quando o sol desaparece atrás das dunas, as conversas alongam-se e o céu enche-se de mais estrelas do que muitas de nós alguma vez vimos. À volta do fogo partilharemos histórias, silêncios, música e momentos que não precisam de ser planeados.",
      "list": [
        "Noite em campo de luxo no Sara",
        "Jantar tradicional marroquino",
        "Música e tambores à volta do fogo",
        "Um dos céus estrelados mais impressionantes do mundo"
      ],
      "image": "/images/night-campfire.jpg",
      "alt": "Night campfire under stars"
    },
    {
      "num": "06",
      "kicker": "Etapa seis · Vale das Rosas",
      "title": "Vales & kasbahs",
      "sub": "A viagem continua",
      "text": "Depois da intensidade do deserto, a viagem continua entre vales, kasbahs e aldeias que parecem habitar outro tempo. A esta altura já não estamos apenas a descobrir Marrocos: estamos a aprender a olhar de outra maneira.",
      "list": [
        "As impressionantes Gargantas do Todra",
        "A Rota das Mil Kasbahs",
        "Aldeias tradicionais quase intactas durante gerações",
        "Noite no Vale das Rosas"
      ],
      "image": "/images/rose-valley-kasbah.jpg",
      "alt": "Valley of Roses kasbah"
    },
    {
      "num": "07",
      "kicker": "Etapa sete · Regresso",
      "title": "O caminho de regresso",
      "sub": "O tesouro que levamos connosco",
      "text": "Já não somos as mesmas mulheres que chegaram a Marraquexe. Há viagens que terminam quando voltamos a casa, e outras que nos acompanham durante muito tempo depois. Esta é das segundas.",
      "list": [
        "Kasbah tradicional e vida berbere",
        "Os míticos estúdios de cinema de Ouarzazate",
        "Alto Atlas de regresso, paisagens da viagem",
        "Manhã livre em Marraquexe e transfer para o aeroporto"
      ],
      "image": "/images/desert-mountains.jpg",
      "alt": "Desert mountains road"
    }
  ],
  "ar": [
    {
      "num": "01",
      "kicker": "المرحلة الأولى · اليوم 1",
      "title": "مراكش",
      "sub": "بداية الرحلة",
      "text": "مراكش لا تُزار. بل تُحسّ. تستقبلنا المدينة بعبير التوابل وألوان المدينة العتيقة وطاقة يصعب تفسيرها، تُلمس من اللحظة الأولى.",
      "list": [
        "لقاء المجموعة في مطار مراكش",
        "الانتقال إلى الرياض وأول لحظات مشتركة",
        "وقت حر لتتركي المدينة تفاجئك",
        "أول ليلة في مراكش"
      ],
      "image": "/images/marrakech-city.jpg",
      "alt": "Marrakech medina"
    },
    {
      "num": "02",
      "kicker": "المرحلة الثانية · في الطريق",
      "title": "الأطلس الكبير",
      "sub": "من الصخب إلى الامتداد",
      "text": "في كل مغامرة لحظة يتغيّر فيها شيء: تختفي المدينة شيئًا فشيئًا في المرآة، وتصبح الأحاديث أعمق. أمامنا تمتد جبال شامخة وآفاق تدعونا إلى استعادة القدرة على الدهشة.",
      "list": [
        "سنعبر الأطلس الكبير عبر ممراته الجبلية",
        "سنكتشف قرى أمازيغية قديمة",
        "سنزور آيت بن حدو، تراث عالمي للإنسانية",
        "سنقترب من أبواب الصحراء"
      ],
      "image": "/images/atlas-mountains.jpg",
      "alt": "High Atlas mountains"
    },
    {
      "num": "03",
      "kicker": "المرحلة الثالثة · واحة",
      "title": "وادي درعة",
      "sub": "نحو الأفق",
      "text": "تظهر بساتين النخيل بين الأرض الجدباء. وما زالت القرى القديمة تروي حكايات أجيال مضت. ويبدو الأفق يتّسع مع كل كيلومتر. نعلم أن الصحراء تنتظرنا.",
      "list": [
        "سنعبر أكبر واحة في المغرب",
        "سنكتشف الريصاني، سوق عمره قرون في شمال إفريقيا",
        "سنعبر قرى أمازيغية في الطريق إلى الصحراء",
        "<strong>هذه الليلة ننام في الصحراء</strong>"
      ],
      "image": "/images/draa-valley.jpg",
      "alt": "Draa valley palm oasis"
    },
    {
      "num": "04",
      "kicker": "المرحلة الرابعة · عرق الشبّي",
      "title": "الصحراء",
      "sub": "هناك حيث يستيقظ شيء ما",
      "text": "هناك أماكن تُبهرك. وهناك أماكن تبقى معك طويلًا بعد العودة. لا شيء يشبه أن تتأملي للمرة الأولى أفقًا لا يتكوّن إلا من كثبان وصمت.",
      "list": [
        "جولة بين كثبان عرق الشبّي",
        "مغامرة على متن 4×4 عبر مشاهد مستحيلة",
        "واحات وزوايا خفية بعيدًا عن المسارات المعتادة",
        "غروب الشمس فوق الكثبان"
      ],
      "image": "/images/sahara-dunes.jpg",
      "alt": "Sahara desert dunes"
    },
    {
      "num": "05",
      "kicker": "المرحلة الخامسة · الليل",
      "title": "تحت النجوم",
      "sub": "السحر الذي لا يظهر في الصور",
      "text": "حين تختفي الشمس خلف الكثبان، تطول الأحاديث وتُملأ السماء بنجوم أكثر مما رأته كثيرات منا. حول النار سنتشارك الحكايات والصمت والموسيقى ولحظات لا تحتاج إلى أي تخطيط.",
      "list": [
        "ليلة في مخيّم فاخر في الصحراء",
        "عشاء مغربي تقليدي",
        "موسيقى وطبول حول النار",
        "من أروع السماء المرصّعة بالنجوم في العالم"
      ],
      "image": "/images/night-campfire.jpg",
      "alt": "Night campfire under stars"
    },
    {
      "num": "06",
      "kicker": "المرحلة السادسة · وادي الورود",
      "title": "وديان & قصبات",
      "sub": "الرحلة مستمرة",
      "text": "بعد كثافة الصحراء، تستمر الرحلة بين وديان وقصبات وقرى تبدو من زمن آخر. في هذه المرحلة لم نعد نكتشف المغرب فقط: بل نتعلم أن ننظر بطريقة أخرى.",
      "list": [
        "مضائق تودغى المهيبة",
        "طريق الألف قصبة",
        "قرى تقليدية بقيت شبه سليمة عبر أجيال",
        "ليلة في وادي الورود"
      ],
      "image": "/images/rose-valley-kasbah.jpg",
      "alt": "Valley of Roses kasbah"
    },
    {
      "num": "07",
      "kicker": "المرحلة السابعة · العودة",
      "title": "طريق العودة",
      "sub": "الكنز الذي نحمله معنا",
      "text": "لم نعد النساء أنفسهن اللواتي وصلن إلى مراكش. هناك رحلات تنتهي حين نعود إلى البيت، وأخرى ترافقنا طويلًا بعد ذلك. هذه من النوع الثاني.",
      "list": [
        "قصبة تقليدية وحياة أمازيغية",
        "استوديوهات السينما الأسطورية في ورزازات",
        "العودة عبر الأطلس الكبير، مشاهد الرحلة",
        "صباح حر في مراكش والانتقال إلى المطار"
      ],
      "image": "/images/desert-mountains.jpg",
      "alt": "Desert mountains road"
    }
  ],
  "ru": [
    {
      "num": "01",
      "kicker": "Этап первый · День 1",
      "title": "Марракеш",
      "sub": "Начало путешествия",
      "text": "Марракеш не осматривают. Его чувствуют. Город встречает нас ароматом специй, красками медины и той энергией, которую трудно объяснить и которая ощущается с первой минуты.",
      "list": [
        "Встреча группы в аэропорту Марракеша",
        "Трансфер в риад и первые общие моменты",
        "Свободное время, чтобы город удивил тебя",
        "Первая ночь в Марракеше"
      ],
      "image": "/images/marrakech-city.jpg",
      "alt": "Marrakech medina"
    },
    {
      "num": "02",
      "kicker": "Этап второй · В пути",
      "title": "Высокий Атлас",
      "sub": "От суеты к просторам",
      "text": "В любом приключении наступает момент, когда что-то меняется: город медленно исчезает в зеркале заднего вида, а разговоры становятся глубже. Перед нами раскрываются огромные горы и горизонты, возвращающие способность удивляться.",
      "list": [
        "Мы пересечём Высокий Атлас через горные перевалы",
        "Откроем древние берберские деревни",
        "Побываем в Айт-Бен-Хадду, объекте Всемирного наследия",
        "Подойдём к вратам пустыни"
      ],
      "image": "/images/atlas-mountains.jpg",
      "alt": "High Atlas mountains"
    },
    {
      "num": "03",
      "kicker": "Этап третий · Оазис",
      "title": "Долина Драа",
      "sub": "К горизонту",
      "text": "Среди сухой земли появляются пальмовые рощи. Старые деревни продолжают рассказывать истории прошлых поколений. А горизонт будто становится всё шире. Мы знаем: пустыня ждёт нас.",
      "list": [
        "Проедем через крупнейший оазис Марокко",
        "Откроем Риссани — рынок с многовековой историей на севере Африки",
        "Проедем через берберские деревни по дороге к Сахаре",
        "<strong>Этой ночью мы спим в пустыне</strong>"
      ],
      "image": "/images/draa-valley.jpg",
      "alt": "Draa valley palm oasis"
    },
    {
      "num": "04",
      "kicker": "Этап четвёртый · Эрг-Шебби",
      "title": "Сахара",
      "sub": "Там, где что-то просыпается",
      "text": "Есть места, которые впечатляют. А есть те, что остаются с тобой надолго после возвращения. Ничто не сравнится с первым взглядом на горизонт, состоящий только из дюн и тишины.",
      "list": [
        "Прогулка среди дюн Эрг-Шебби",
        "Приключение на 4×4 по невозможным пейзажам",
        "Оазисы и скрытые уголки вдали от проторённых маршрутов",
        "Закат над дюнами"
      ],
      "image": "/images/sahara-dunes.jpg",
      "alt": "Sahara desert dunes"
    },
    {
      "num": "05",
      "kicker": "Этап пятый · Ночь",
      "title": "Под звёздами",
      "sub": "Волшебство, которого не бывает на фотографиях",
      "text": "Когда солнце исчезает за дюнами, разговоры становятся длиннее, а небо наполняется большим числом звёзд, чем многие из нас когда-либо видели. У костра мы будем делиться историями, тишиной, музыкой и моментами, которые не нужно планировать.",
      "list": [
        "Ночь в роскошном лагере в Сахаре",
        "Традиционный марокканский ужин",
        "Музыка и барабаны у костра",
        "Одно из самых впечатляющих звёздных небес в мире"
      ],
      "image": "/images/night-campfire.jpg",
      "alt": "Night campfire under stars"
    },
    {
      "num": "06",
      "kicker": "Этап шестой · Долина Роз",
      "title": "Долины & касбы",
      "sub": "Путешествие продолжается",
      "text": "После насыщенности пустыни путешествие продолжается среди долин, касб и деревень, будто живущих в другом времени. Сейчас мы не только открываем Марокко: мы учимся смотреть иначе.",
      "list": [
        "Впечатляющее ущелье Тодра",
        "Дорога тысячи касб",
        "Традиционные деревни, почти не изменившиеся за поколения",
        "Ночь в Долине Роз"
      ],
      "image": "/images/rose-valley-kasbah.jpg",
      "alt": "Valley of Roses kasbah"
    },
    {
      "num": "07",
      "kicker": "Этап седьмой · Возвращение",
      "title": "Дорога домой",
      "sub": "Сокровище, которое мы увозим с собой",
      "text": "Мы уже не те женщины, что приехали в Марракеш. Есть путешествия, которые заканчиваются с возвращением домой, а есть те, что остаются с нами надолго. Это из вторых.",
      "list": [
        "Традиционная касба и берберский быт",
        "Легендарные киностудии Уарзазата",
        "Обратно через Высокий Атлас, пейзажи путешествия",
        "Свободное утро в Марракеше и трансфер в аэропорт"
      ],
      "image": "/images/desert-mountains.jpg",
      "alt": "Desert mountains road"
    }
  ]
};
