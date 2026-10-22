export type Locale = "es" | "en" | "fr" | "de" | "it" | "pt" | "ru" | "ar";

export const translations: Record<Locale, any> = {
  "es": {
    "name": "Español",
    "flag": "🇪🇸",
    "dir": "ltr",
    "nav": {
      "home": "Inicio",
      "about": "Sobre Nosotras",
      "itinerary": "Itinerario y Alojamientos",
      "reserve": "Reservar Plaza",
      "contact": "Contacto"
    },
    "hero": {
      "tag": "Expedición Íntima al Sahara · 12 Mujeres",
      "title": "MUJERES DE ARENA",
      "subtitle": "No es un viaje organizado. Es una travesía creada desde el corazón para reconectar con lo esencial en el desierto de Marruecos.",
      "ctaReserve": "Reserva tu Plaza",
      "ctaItinerary": "Descubre el Itinerario",
      "badge": "12 mujeres · un viaje compartido"
    },
    "manifesto": {
      "tag": "El Alma del Viaje",
      "heading": "No es un viaje organizado. Es una travesía creada desde el corazón.",
      "p1": "Un viaje pensado para mujeres que sienten la llamada del silencio, el vasto horizonte y la complicidad de compartir camino con otras mujeres conscientes.",
      "p2": "Desde las callejuelas doradas de Marrakech hasta las dunas de Erg Chebbi, te invitamos a desacelerar, respirar y dejar que el desierto haga su magia."
    },
    "stages": {
      "heading": "Siete etapas, una misma historia",
      "subtitle": "Un recorrido pausado a través de los paisajes más sobrecogedores del sur de Marruecos.",
      "items": [
        {
          "day": "01",
          "title": "Marrakech",
          "desc": "La bienvenida, aromas a jazmín y canela, y el sosiego de nuestro riad privado."
        },
        {
          "day": "02",
          "title": "Alto Atlas",
          "desc": "Cruzando el mítico paso de Tizi n'Tichka entre montañas ocres y aldeas bereberes."
        },
        {
          "day": "03",
          "title": "Valle del Draa",
          "desc": "El oasis de palmeras más extenso de Marruecos y sus ancestrales kasbahs de adobe."
        },
        {
          "day": "04",
          "title": "El Sahara",
          "desc": "Llegada al mar de dunas de Erg Chebbi y caravana en dromedario hacia el atardecer dorado."
        },
        {
          "day": "05",
          "title": "Bajo las Estrellas",
          "desc": "Noche en campamento nómada de lujo, música bereber junto a la hoguera y silencio infinito."
        },
        {
          "day": "06",
          "title": "Valles & Kasbahs",
          "desc": "Pueblos fortificados de Ait Ben Haddou, herencia milenaria y miradas profundas."
        },
        {
          "day": "07",
          "title": "El Regreso",
          "desc": "Cierre del círculo en Marrakech, celebrando los lazos creados en el camino."
        }
      ]
    },
    "magic": {
      "heading": "Allí donde algo se despierta",
      "subtitle": "La magia que no aparece en las fotografías",
      "text": "El verdadero valor de esta travesía reside en las conversaciones junto a la hoguera, el té a la menta compartido sin prisa, y la mirada cómplice entre doce mujeres que comenzaron como desconocidas y regresan como hermanas."
    },
    "stays": {
      "tag": "Refugios de Paz",
      "heading": "Lugares elegidos para acompañar la experiencia",
      "subtitle": "Espacios auténticos donde el descanso y la belleza conviven en perfecta armonía.",
      "riadTitle": "Riad de Paz en Marrakech",
      "riadDesc": "Un remanso de calma con patio andalusí, alberca fresca y habitaciones impregnadas de artesanía local y calma.",
      "campTitle": "Campamento de Lujo en Erg Chebbi",
      "campDesc": "Jaimas privadas con comodidades exclusivas, alfombras bereberes y el manto de la Vía Láctea sobre tu cama.",
      "kasbahTitle": "Kasbah Tradicional en el Atlas",
      "kasbahDesc": "Arquitectura de tierra cocida con vistas panorámicas a los valles y terrazas donde contemplar la caída del sol."
    },
    "hosts": {
      "tag": "Tus Anfitrionas",
      "heading": "Vanessa & Ana",
      "role": "Guías, creadoras y compañeras de camino",
      "bio": "Hemos recorrido y sentido el desierto durante años. Creamos 'Mujeres de Arena' no para mostrarte Marruecos desde la ventanilla de un autobús, sino para abrirte la puerta a una experiencia íntima, segura, humana y transformadora.",
      "quote": "El desierto no te pide que hagas nada; solo te invita a ser quien eres.",
      "cta": "Contactar con Vanessa y Ana"
    },
    "reserve": {
      "heading": "Una experiencia reservada para 12 mujeres",
      "subtitle": "Plazas estrictamente limitadas para preservar la intimidad y el cuidado en cada detalle.",
      "includesTitle": "Tu Travesía Incluye",
      "includes": [
        "Todos los traslados privados en vehículos 4x4 de alta gama con chóferes locales certificados",
        "Alojamiento completo en riads boutique y campamento de lujo privado en las dunas",
        "Pensión completa con gastronomía marroquí cuidada y opciones vegetarianas/celíacas",
        "Paseo en dromedario al atardecer y amanecer en las dunas de Erg Chebbi",
        "Acompañamiento personal y cuidado cercano durante todo el viaje por Vanessa y Ana",
        "Círculos de encuentro, ceremonias de bienvenida y talleres de introspección al atardecer"
      ],
      "excludesTitle": "No incluye",
      "excludes": [
        "Vuelos internacionales hasta/desde Marrakech",
        "Seguro de viaje obligatorio (te asesoramos en la elección)",
        "Gastos personales y propinas voluntarias"
      ],
      "cta": "Solicitar Información y Reservar Plaza"
    },
    "practical": {
      "heading": "Detalles Prácticos",
      "subtitle": "Todo previsto para que viajes con total serenidad",
      "passportTitle": "Pasaporte & Visado",
      "passportDesc": "Pasaporte con al menos 6 meses de vigencia. No se requiere visado para la Unión Europea.",
      "currencyTitle": "Moneda y Pagos",
      "currencyDesc": "El dírham marroquí (MAD). Podrás cambiar fácilmente divisa en el aeropuerto o utilizar cajeros locales.",
      "luggageTitle": "Equipaje y Clima",
      "luggageDesc": "Te enviaremos una guía completa con prendas recomendadas: lino fresco para el día y capas abrigadas para la noche en el desierto."
    },
    "footer": {
      "tagline": "Expedición íntima al desierto de Marruecos reservada exclusivamente para mujeres conscientes.",
      "quickLinks": "Explora",
      "contactTitle": "Contacto y Concierge",
      "whatsapp": "Habla con nosotras por WhatsApp",
      "email": "contacto@mujeresdearena.com",
      "copyright": "© 2026 Mujeres de Arena. Todos los derechos reservados."
    }
  },
  "en": {
    "name": "English",
    "flag": "🇬🇧",
    "dir": "ltr",
    "nav": {
      "home": "Home",
      "about": "About Us",
      "itinerary": "Itinerary & Stays",
      "reserve": "Reserve Spot",
      "contact": "Contact"
    },
    "hero": {
      "tag": "Intimate Sahara Expedition · 12 Women",
      "title": "MUJERES DE ARENA",
      "subtitle": "It isn't an organized tour. It is a soulful journey created from the heart to reconnect with what truly matters in the Moroccan desert.",
      "ctaReserve": "Reserve Your Spot",
      "ctaItinerary": "Explore the Itinerary",
      "badge": "12 women · one shared journey"
    },
    "manifesto": {
      "tag": "The Soul of the Journey",
      "heading": "It isn't an organized trip. It is a journey created from the heart.",
      "p1": "A journey crafted for women who feel the quiet calling of vast horizons, open silence, and the meaningful bond of walking alongside conscious women.",
      "p2": "From the amber-lit alleys of Marrakech to the golden dunes of Erg Chebbi, we invite you to slow down, breathe deeply, and let the desert work its gentle magic."
    },
    "stages": {
      "heading": "Seven stages, one single story",
      "subtitle": "A tranquil journey through the most breathtaking landscapes of southern Morocco.",
      "items": [
        {
          "day": "01",
          "title": "Marrakech",
          "desc": "Warm welcome, sweet scents of jasmine and cinnamon, and the soothing courtyard of our private riad."
        },
        {
          "day": "02",
          "title": "High Atlas",
          "desc": "Crossing the legendary Tizi n'Tichka pass through ochre mountains and remote Berber hamlets."
        },
        {
          "day": "03",
          "title": "Draa Valley",
          "desc": "Morocco's grandest palm grove and its ancient, sun-baked clay kasbahs."
        },
        {
          "day": "04",
          "title": "The Sahara",
          "desc": "Entering the ocean of dunes at Erg Chebbi with a gentle camel ride towards the sunset."
        },
        {
          "day": "05",
          "title": "Under the Stars",
          "desc": "A night in an exclusive desert camp, acoustic fireside music, and boundless stillness."
        },
        {
          "day": "06",
          "title": "Valleys & Kasbahs",
          "desc": "Exploring historic Ait Ben Haddou, ancient heritage, and heartfelt local encounters."
        },
        {
          "day": "07",
          "title": "The Return",
          "desc": "Closing the circle back in Marrakech, honoring the friendships born along the road."
        }
      ]
    },
    "magic": {
      "heading": "Where something awakens",
      "subtitle": "The magic that never shows up in photos",
      "text": "The true essence of this retreat lives in the unhurried campfire conversations, slow cups of fresh mint tea, and the knowing smiles shared among twelve women who arrived as strangers and depart as sisters."
    },
    "stays": {
      "tag": "Sanctuaries of Calm",
      "heading": "Handpicked stays chosen to accompany your experience",
      "subtitle": "Authentic boutique spaces where comfort and heritage live in balance.",
      "riadTitle": "Peaceful Boutique Riad in Marrakech",
      "riadDesc": "A serene sanctuary with a traditional garden courtyard, dipping pool, and calm rooms.",
      "campTitle": "Exclusive Luxury Camp in Erg Chebbi",
      "campDesc": "Private luxury tents with plush bedding, en-suite bathrooms, and the Milky Way as your ceiling.",
      "kasbahTitle": "Traditional Atlas Kasbah",
      "kasbahDesc": "Earthen architecture with sweeping mountain views and sun-drenched terrace decks."
    },
    "hosts": {
      "tag": "Your Hosts",
      "heading": "Vanessa & Ana",
      "role": "Guides, creators, and fellow travelers",
      "bio": "We have explored and cherished the desert for years. We created 'Mujeres de Arena' not to show you Morocco through a tour bus window, but to open the door to an intimate, safe, human, and transformative voyage.",
      "quote": "The desert asks nothing of you; it simply gives you permission to be yourself.",
      "cta": "Connect with Vanessa & Ana"
    },
    "reserve": {
      "heading": "An experience reserved for 12 women",
      "subtitle": "Strictly limited spaces to ensure closeness, serenity, and care in every single detail.",
      "includesTitle": "What Is Included",
      "includes": [
        "All private 4x4 ground transfers with experienced local drivers",
        "Complete accommodation in handpicked boutique riads and private luxury desert camp",
        "Full board with fresh Moroccan culinary dining (vegetarian/special diets accommodated)",
        "Sunset and sunrise camel rides over the majestic dunes of Erg Chebbi",
        "Personal accompaniment and gentle guidance by Vanessa and Ana throughout",
        "Evening reflection circles, welcome rituals, and outdoor mindfulness moments"
      ],
      "excludesTitle": "Not Included",
      "excludes": [
        "International flights to and from Marrakech",
        "Mandatory travel insurance (we provide recommendations)",
        "Personal expenses and optional gratuities"
      ],
      "cta": "Inquire & Reserve Your Spot"
    },
    "practical": {
      "heading": "Practical Details",
      "subtitle": "Everything planned so you travel with complete peace of mind",
      "passportTitle": "Passport & Visas",
      "passportDesc": "Valid passport with at least 6 months validity. No visa required for EU, UK, US, and many other nations.",
      "currencyTitle": "Currency & Cash",
      "currencyDesc": "Moroccan Dirham (MAD). Easily exchanged at the airport or withdrawn from city ATMs.",
      "luggageTitle": "Packing & Weather",
      "luggageDesc": "We send a complete packing checklist: breathable linen for warm days and warm cozy layers for desert nights."
    },
    "footer": {
      "tagline": "An intimate desert retreat in Morocco reserved exclusively for conscious women.",
      "quickLinks": "Explore",
      "contactTitle": "Contact & Concierge",
      "whatsapp": "Message us on WhatsApp",
      "email": "contacto@mujeresdearena.com",
      "copyright": "© 2026 Mujeres de Arena. All rights reserved."
    }
  },
  "fr": {
    "name": "Français",
    "flag": "🇫🇷",
    "dir": "ltr",
    "nav": {
      "home": "Accueil",
      "about": "À Propos",
      "itinerary": "Itinéraire & Séjours",
      "reserve": "Réserver",
      "contact": "Contact"
    },
    "hero": {
      "tag": "Expédition Intime au Sahara · 12 Femmes",
      "title": "MUJERES DE ARENA",
      "subtitle": "Ce n'est pas un voyage organisé. C'est un chemin créé avec le cœur pour renouer avec l'essentiel dans le désert marocain.",
      "ctaReserve": "Réserver votre Place",
      "ctaItinerary": "Découvrir l'Itinéraire",
      "badge": "12 femmes · un voyage partagé"
    },
    "manifesto": {
      "tag": "L'Âme du Voyage",
      "heading": "Ce n'est pas un voyage organisé. C'est un chemin créé avec le cœur.",
      "p1": "Un voyage pensé pour des femmes qui ressentent l'appel du silence, du grand horizon et de la bienveillance d'un groupe uni.",
      "p2": "Des ruelles dorées de Marrakech aux dunes de l'Erg Chebbi, nous vous invitons à ralentir, respirer et laisser le désert opérer sa magie."
    },
    "stages": {
      "heading": "Sept étapes, une seule histoire",
      "subtitle": "Une traversée au rythme doux à travers les paysages les plus majestueux du sud marocain.",
      "items": [
        {
          "day": "01",
          "title": "Marrakech",
          "desc": "L'accueil chaleureux, parfums de jasmin et quiétude de notre riad privé."
        },
        {
          "day": "02",
          "title": "Haut Atlas",
          "desc": "Passage par le col légendaire du Tizi n'Tichka entre monts ocres et villages berbères."
        },
        {
          "day": "03",
          "title": "Vallée du Drâa",
          "desc": "La plus vaste palmeraie du Maroc et ses kasbahs d'argile séculaire."
        },
        {
          "day": "04",
          "title": "Le Sahara",
          "desc": "Arrivée aux dunes dorées de l'Erg Chebbi et caravane de dromadaires au coucher du soleil."
        },
        {
          "day": "05",
          "title": "Sous les Étoiles",
          "desc": "Nuit en bivouac de luxe, mélodies au coin du feu et silence absolu."
        },
        {
          "day": "06",
          "title": "Vallées & Kasbahs",
          "desc": "Village fortifié d'Aït-ben-Haddou, héritage millénaire et partages authentiques."
        },
        {
          "day": "07",
          "title": "Le Retour",
          "desc": "Clôture du voyage à Marrakech, célébrant les liens précieux tissés sur la route."
        }
      ]
    },
    "magic": {
      "heading": "Là où quelque chose s'éveille",
      "subtitle": "La magie qui n'apparaît jamais sur les photographies",
      "text": "La véritable richesse de cette traversée réside dans les conversations autour du feu, le thé à la menthe savouré sans hâte, et les regards complices entre douze femmes réunies par le destin."
    },
    "stays": {
      "tag": "Havres de Paix",
      "heading": "Des demeures choisies pour accompagner votre voyage",
      "subtitle": "Des hébergements d'exception où l'authenticité et le confort se rejoignent.",
      "riadTitle": "Riad de Paix à Marrakech",
      "riadDesc": "Une oasis paisible avec patio ombragé, bassin d'eau fraîche et atmosphère apaisante.",
      "campTitle": "Bivouac de Charme à Erg Chebbi",
      "campDesc": "Tentes luxueuses nichées entre les dunes avec lits confortables et la voûte céleste.",
      "kasbahTitle": "Kasbah Berbère de l'Atlas",
      "kasbahDesc": "Architecture traditionnelle en pisé offrant une vue imprenable sur la vallée."
    },
    "hosts": {
      "tag": "Vos Hôtesses",
      "heading": "Vanessa & Ana",
      "role": "Guides, créatrices et complices de route",
      "bio": "Nous arpentons le désert depuis des années. Nous avons imaginé 'Mujeres de Arena' pour vous offrir une aventure intime, sécurisante, profondément humaine et transformatrice.",
      "quote": "Le désert ne vous demande rien ; il vous invite simplement à être vous-même.",
      "cta": "Échanger avec Vanessa et Ana"
    },
    "reserve": {
      "heading": "Une expérience réservée à 12 femmes",
      "subtitle": "Places strictement limitées pour préserver l'intimité et le soin apporté à chaque détail.",
      "includesTitle": "Ce qui est inclus",
      "includes": [
        "Tous les transferts privés en véhicules 4x4 tout confort avec chauffeurs locaux expérimentés",
        "Hébergement complet en riads d'exception et campement de luxe privatisé",
        "Pension complète avec une gastronomie marocaine raffinée (adaptée aux régimes alimentaires)",
        "Balade en dromadaires au lever et coucher du soleil dans l'Erg Chebbi",
        "Accompagnement bienveillant et présence constante de Vanessa et Ana",
        "Cercles de parole, rituels de bienvenue et moments d'introspection au crépuscule"
      ],
      "excludesTitle": "Non inclus",
      "excludes": [
        "Vols internationaux aller-retour pour Marrakech",
        "Assurance voyage obligatoire (nous vous conseillons volontiers)",
        "Dépenses personnelles et pourboires discrétionnaires"
      ],
      "cta": "Demander des Renseignements & Réserver"
    },
    "practical": {
      "heading": "Détails Pratiques",
      "subtitle": "Tout est organisé pour un voyage en toute sérénité",
      "passportTitle": "Passeport & Visa",
      "passportDesc": "Passeport valide au moins 6 mois après la date de retour. Pas de visa requis pour les ressortissants de l'UE.",
      "currencyTitle": "Monnaie & Dépenses",
      "currencyDesc": "Le dirham marocain (MAD). Change aisé à l'aéroport ou retraits dans les distributeurs.",
      "luggageTitle": "Bagages & Tenues",
      "luggageDesc": "Un guide complet vous sera transmis : vêtements légers en lin le jour et vestes douillettes pour les nuits fraîches du désert."
    },
    "footer": {
      "tagline": "Une retraite intime dans le désert marocain réservée exclusivement aux femmes.",
      "quickLinks": "Explorer",
      "contactTitle": "Contact & Conciergerie",
      "whatsapp": "Écrivez-nous sur WhatsApp",
      "email": "contacto@mujeresdearena.com",
      "copyright": "© 2026 Mujeres de Arena. Tous droits réservés."
    }
  },
  "ar": {
    "name": "العربية",
    "flag": "🇲🇦",
    "dir": "rtl",
    "nav": {
      "home": "الرئيسية",
      "about": "من نحن",
      "itinerary": "برنامج الرحلة والإقامة",
      "reserve": "احجز مكانك",
      "contact": "اتصل بنا"
    },
    "hero": {
      "tag": "رحلة استكشافية حميمة إلى الصحراء · ١٢ امرأة",
      "title": "نساء الرمال",
      "subtitle": "إنها ليست رحلة سياحية تقليدية. إنها رحلة خُلقت من القلب لإعادة الاتصال بالجوهر في صحراء المغرب الساحرة.",
      "ctaReserve": "احجز مكانك الآن",
      "ctaItinerary": "اكتشف مسار الرحلة",
      "badge": "١٢ امرأة · رحلة واحدة مشتركة"
    },
    "manifesto": {
      "tag": "روح الرحلة",
      "heading": "إنها ليست رحلة منظّمة. إنها رحلة خُلقت من القلب.",
      "p1": "رحلة مصممة للنساء اللواتي يشعرن بنداء الصمت والسكينة، والأفق الواسع والروابط الإنسانية الصادقة.",
      "p2": "من أزقة مراكش العتيقة إلى رمال عرق الشبي الذهبية، ندعوكِ إلى التباطؤ، والتنفس بعمق، وترك الصحراء تصنع سحرها."
    },
    "stages": {
      "heading": "سبع مراحل، قصة واحدة",
      "subtitle": "رحلة هادئة عبر أكثر المناظر الطبيعية سحراً وإلهاماً في جنوب المغرب.",
      "items": [
        {
          "day": "٠١",
          "title": "مراكش",
          "desc": "الاستقبال الدافئ، روائح الياسمين والقرفة، وهدوء رياضنا الخاص."
        },
        {
          "day": "٠٢",
          "title": "الأطلس الكبير",
          "desc": "عبور ممر تيزي نتيشكا التاريخي بين الجبال والقرى الأمازيغية العريقة."
        },
        {
          "day": "٠٣",
          "title": "وادي درعة",
          "desc": "أكبر واحة نخيل في المغرب وقصبات الطين التاريخية العريقة."
        },
        {
          "day": "٠٤",
          "title": "الصحراء الكبرى",
          "desc": "الوصول إلى كثبان عرق الشبي الذهبية وقافلة الجمال نحو غروب الشمس."
        },
        {
          "day": "٠٥",
          "title": "تحت النجوم",
          "desc": "ليلة في مخيم صحراوي فاخر، موسيقى أمازيغية دافئة حول النار وصمت مطلق."
        },
        {
          "day": "٠٦",
          "title": "الوديان والقصبات",
          "desc": "قصر آيت بن حدو التاريخي، التراث الإنساني الأصيل وجمال البناء العتيق."
        },
        {
          "day": "٠٧",
          "title": "طريق العودة",
          "desc": "إكمال الدائرة في مراكش، والاحتفاء بالروابط العميقة التي وُلدت في الطريق."
        }
      ]
    },
    "magic": {
      "heading": "حيث يستيقظ شيء ما في الأعماق",
      "subtitle": "السحر الذي لا تلتقطه عدسات الكاميرا",
      "text": "القيمة الحقيقية لهذه الرحلة تكمن في الأحاديث العميقة بجانب النار، وكؤوس الشاي بالنعناع، والنظرات الصادقة بين نساء بدأْنَ الرحلة كغريبات ويعدن كأخوات."
    },
    "stays": {
      "tag": "ملاذات السكينة",
      "heading": "أماكن إقامة اختيرت بعناية لترافق تجربتكِ",
      "subtitle": "مساحات أصيلة يجتمع فيها الهدوء والأناقة والراحة التامة.",
      "riadTitle": "رياض هادئ في قلب مراكش",
      "riadDesc": "واحة سلام بفناء أندلسي، حوض ماء منعش، وغرف تتنفس الحرفية والراحة المغربية.",
      "campTitle": "مخيم فاخر بين كثبان عرق الشبي",
      "campDesc": "خيام خاصة مجهزة بأرقى وسائل الراحة وسماء مرصعة بالنجوم المضيئة.",
      "kasbahTitle": "قصبة أطلسية تقليدية",
      "kasbahDesc": "عمارة ترابية ساحرة مع إطلالات بانورامية على الوديان والجبال الخلابة."
    },
    "hosts": {
      "tag": "مضيفاتكِ",
      "heading": "فانيسا وآنا",
      "role": "مرشداتكِ ورفيقات دربكِ",
      "bio": "لقد زرنا الصحراء وعشنا سحرها لسنوات طويلة. أسسنا 'نساء الرمال' لنمنحك تجربة إنسانية حقيقية ومتحولة.",
      "quote": "الصحراء لا تطلب منك شيئاً؛ إنها فقط تدعوكِ لتكوني على طبيعتكِ.",
      "cta": "تواصل مع فانيسا وآنا"
    },
    "reserve": {
      "heading": "تجربة حصرية مخصصة لـ ١٢ امرأة فقط",
      "subtitle": "الأماكن محدودة جداً للحفاظ على حميمية المجموعة والاهتمام بكافة التفاصيل.",
      "includesTitle": "ما تشمله الرحلة",
      "includes": [
        "كافة التنقلات بسيارات دفع رباعي 4x4 حديثة مع سائقين محليين ذوي خبرة",
        "إقامة كاملة في رياضات بوتيك راقية ومخيم صحراوي خاص بين الكثبان",
        "وجبات كاملة من أشهى أطباق المطبخ المغربي الأصيل",
        "ركوب الجمال عند شروق وغروب الشمس في عرق الشبي",
        "مرافقة شخصية وإرشاد مستمر طوال الرحلة من قِبل فانيسا وآنا",
        "حلقات حوار تأملية وورش استرخاء في الهواء الطلق"
      ],
      "excludesTitle": "لا تشمل",
      "excludes": [
        "تذاكر الطيران الدولية من وإلى مراكش",
        "تأمين السفر الإلزامي (نقدم لكِ المشورة المناسبة)",
        "المصاريف الشخصية والإكراميات الاختيارية"
      ],
      "cta": "طلب تفاصيل الحجز والاستفسار"
    },
    "practical": {
      "heading": "تفاصيل عملية",
      "subtitle": "كل شيء مرتب مسبقاً لتسافري براحة واطمئنان",
      "passportTitle": "جواز السفر والتأشيرة",
      "passportDesc": "جواز سفر ساري المفعول لمدة لا تقل عن 6 أشهر.",
      "currencyTitle": "العملة والمصاريف",
      "currencyDesc": "الدرهم المغربي (MAD). يمكنك تحويل العملة بسهولة في المطار أو استخدام أجهزة الصراف الآلي.",
      "luggageTitle": "الأمتعة والملابس",
      "luggageDesc": "سنرسل لك دليلاً كاملاً: ملابس قطنية خفيفة للنهار وملابس دافئة لليالي الصحراء العليلة."
    },
    "footer": {
      "tagline": "رحلة صحراوية حميمة في المغرب مخصصة حصرياً للنساء الواعيات الباحثات عن السكينة.",
      "quickLinks": "استكشف",
      "contactTitle": "التواصل والكونسيرج",
      "whatsapp": "تحدثي معنا عبر واتساب",
      "email": "contacto@mujeresdearena.com",
      "copyright": "© ٢٠٢٦ نساء الرمال. جميع الحقوق محفوظة."
    }
  },
  "de": {
    "name": "Deutsch",
    "flag": "🇩🇪",
    "dir": "ltr",
    "nav": {
      "home": "Startseite",
      "about": "Über Uns",
      "itinerary": "Reiseplan & Unterkünfte",
      "reserve": "Platz reservieren",
      "contact": "Kontakt"
    },
    "hero": {
      "tag": "Intime Sahara-Expedition · 12 Frauen",
      "title": "MUJERES DE ARENA",
      "subtitle": "Keine organisierte Gruppenreise. Eine Reise von Herzen, um das Wesentliche in der marokkanischen Wüste wiederzuentdecken.",
      "ctaReserve": "Platz reservieren",
      "ctaItinerary": "Reiseplan ansehen",
      "badge": "12 Frauen · ein gemeinsamer Weg"
    },
    "manifesto": {
      "tag": "El Alma del Viaje",
      "heading": "No es un viaje organizado. Es una travesía creada desde el corazón.",
      "p1": "Un viaje pensado para mujeres que sienten la llamada del silencio, el vasto horizonte y la complicidad de compartir camino con otras mujeres conscientes.",
      "p2": "Desde las callejuelas doradas de Marrakech hasta las dunas de Erg Chebbi, te invitamos a desacelerar, respirar y dejar que el desierto haga su magia."
    },
    "stages": {
      "heading": "Siete etapas, una misma historia",
      "subtitle": "Un recorrido pausado a través de los paisajes más sobrecogedores del sur de Marruecos.",
      "items": [
        {
          "day": "01",
          "title": "Marrakech",
          "desc": "La bienvenida, aromas a jazmín y canela, y el sosiego de nuestro riad privado."
        },
        {
          "day": "02",
          "title": "Alto Atlas",
          "desc": "Cruzando el mítico paso de Tizi n'Tichka entre montañas ocres y aldeas bereberes."
        },
        {
          "day": "03",
          "title": "Valle del Draa",
          "desc": "El oasis de palmeras más extenso de Marruecos y sus ancestrales kasbahs de adobe."
        },
        {
          "day": "04",
          "title": "El Sahara",
          "desc": "Llegada al mar de dunas de Erg Chebbi y caravana en dromedario hacia el atardecer dorado."
        },
        {
          "day": "05",
          "title": "Bajo las Estrellas",
          "desc": "Noche en campamento nómada de lujo, música bereber junto a la hoguera y silencio infinito."
        },
        {
          "day": "06",
          "title": "Valles & Kasbahs",
          "desc": "Pueblos fortificados de Ait Ben Haddou, herencia milenaria y miradas profundas."
        },
        {
          "day": "07",
          "title": "El Regreso",
          "desc": "Cierre del círculo en Marrakech, celebrando los lazos creados en el camino."
        }
      ]
    },
    "magic": {
      "heading": "Allí donde algo se despierta",
      "subtitle": "La magia que no aparece en las fotografías",
      "text": "El verdadero valor de esta travesía reside en las conversaciones junto a la hoguera, el té a la menta compartido sin prisa, y la mirada cómplice entre doce mujeres que comenzaron como desconocidas y regresan como hermanas."
    },
    "stays": {
      "tag": "Refugios de Paz",
      "heading": "Lugares elegidos para acompañar la experiencia",
      "subtitle": "Espacios auténticos donde el descanso y la belleza conviven en perfecta armonía.",
      "riadTitle": "Riad de Paz en Marrakech",
      "riadDesc": "Un remanso de calma con patio andalusí, alberca fresca y habitaciones impregnadas de artesanía local y calma.",
      "campTitle": "Campamento de Lujo en Erg Chebbi",
      "campDesc": "Jaimas privadas con comodidades exclusivas, alfombras bereberes y el manto de la Vía Láctea sobre tu cama.",
      "kasbahTitle": "Kasbah Tradicional en el Atlas",
      "kasbahDesc": "Arquitectura de tierra cocida con vistas panorámicas a los valles y terrazas donde contemplar la caída del sol."
    },
    "hosts": {
      "tag": "Tus Anfitrionas",
      "heading": "Vanessa & Ana",
      "role": "Guías, creadoras y compañeras de camino",
      "bio": "Hemos recorrido y sentido el desierto durante años. Creamos 'Mujeres de Arena' no para mostrarte Marruecos desde la ventanilla de un autobús, sino para abrirte la puerta a una experiencia íntima, segura, humana y transformadora.",
      "quote": "El desierto no te pide que hagas nada; solo te invita a ser quien eres.",
      "cta": "Contactar con Vanessa y Ana"
    },
    "reserve": {
      "heading": "Una experiencia reservada para 12 mujeres",
      "subtitle": "Plazas estrictamente limitadas para preservar la intimidad y el cuidado en cada detalle.",
      "includesTitle": "Tu Travesía Incluye",
      "includes": [
        "Todos los traslados privados en vehículos 4x4 de alta gama con chóferes locales certificados",
        "Alojamiento completo en riads boutique y campamento de lujo privado en las dunas",
        "Pensión completa con gastronomía marroquí cuidada y opciones vegetarianas/celíacas",
        "Paseo en dromedario al atardecer y amanecer en las dunas de Erg Chebbi",
        "Acompañamiento personal y cuidado cercano durante todo el viaje por Vanessa y Ana",
        "Círculos de encuentro, ceremonias de bienvenida y talleres de introspección al atardecer"
      ],
      "excludesTitle": "No incluye",
      "excludes": [
        "Vuelos internacionales hasta/desde Marrakech",
        "Seguro de viaje obligatorio (te asesoramos en la elección)",
        "Gastos personales y propinas voluntarias"
      ],
      "cta": "Solicitar Información y Reservar Plaza"
    },
    "practical": {
      "heading": "Detalles Prácticos",
      "subtitle": "Todo previsto para que viajes con total serenidad",
      "passportTitle": "Pasaporte & Visado",
      "passportDesc": "Pasaporte con al menos 6 meses de vigencia. No se requiere visado para la Unión Europea.",
      "currencyTitle": "Moneda y Pagos",
      "currencyDesc": "El dírham marroquí (MAD). Podrás cambiar fácilmente divisa en el aeropuerto o utilizar cajeros locales.",
      "luggageTitle": "Equipaje y Clima",
      "luggageDesc": "Te enviaremos una guía completa con prendas recomendadas: lino fresco para el día y capas abrigadas para la noche en el desierto."
    },
    "footer": {
      "tagline": "Expedición íntima al desierto de Marruecos reservada exclusivamente para mujeres conscientes.",
      "quickLinks": "Explora",
      "contactTitle": "Contacto y Concierge",
      "whatsapp": "Habla con nosotras por WhatsApp",
      "email": "contacto@mujeresdearena.com",
      "copyright": "© 2026 Mujeres de Arena. Todos los derechos reservados."
    }
  },
  "it": {
    "name": "Italiano",
    "flag": "🇮🇹",
    "dir": "ltr",
    "nav": {
      "home": "Home",
      "about": "Chi Siamo",
      "itinerary": "Itinerario & Soggiorni",
      "reserve": "Prenota il tuo posto",
      "contact": "Contatti"
    },
    "hero": {
      "tag": "Spedizione intima nel Sahara · 12 Donne",
      "title": "MUJERES DE ARENA",
      "subtitle": "Non è un viaggio organizzato. È un cammino nato dal cuore per ritrovare l'essenziale nel deserto del Marocco.",
      "ctaReserve": "Prenota il tuo posto",
      "ctaItinerary": "Scopri l'Itinerario",
      "badge": "12 donne · un viaggio condiviso"
    },
    "manifesto": {
      "tag": "El Alma del Viaje",
      "heading": "No es un viaje organizado. Es una travesía creada desde el corazón.",
      "p1": "Un viaje pensado para mujeres que sienten la llamada del silencio, el vasto horizonte y la complicidad de compartir camino con otras mujeres conscientes.",
      "p2": "Desde las callejuelas doradas de Marrakech hasta las dunas de Erg Chebbi, te invitamos a desacelerar, respirar y dejar que el desierto haga su magia."
    },
    "stages": {
      "heading": "Siete etapas, una misma historia",
      "subtitle": "Un recorrido pausado a través de los paisajes más sobrecogedores del sur de Marruecos.",
      "items": [
        {
          "day": "01",
          "title": "Marrakech",
          "desc": "La bienvenida, aromas a jazmín y canela, y el sosiego de nuestro riad privado."
        },
        {
          "day": "02",
          "title": "Alto Atlas",
          "desc": "Cruzando el mítico paso de Tizi n'Tichka entre montañas ocres y aldeas bereberes."
        },
        {
          "day": "03",
          "title": "Valle del Draa",
          "desc": "El oasis de palmeras más extenso de Marruecos y sus ancestrales kasbahs de adobe."
        },
        {
          "day": "04",
          "title": "El Sahara",
          "desc": "Llegada al mar de dunas de Erg Chebbi y caravana en dromedario hacia el atardecer dorado."
        },
        {
          "day": "05",
          "title": "Bajo las Estrellas",
          "desc": "Noche en campamento nómada de lujo, música bereber junto a la hoguera y silencio infinito."
        },
        {
          "day": "06",
          "title": "Valles & Kasbahs",
          "desc": "Pueblos fortificados de Ait Ben Haddou, herencia milenaria y miradas profundas."
        },
        {
          "day": "07",
          "title": "El Regreso",
          "desc": "Cierre del círculo en Marrakech, celebrando los lazos creados en el camino."
        }
      ]
    },
    "magic": {
      "heading": "Allí donde algo se despierta",
      "subtitle": "La magia que no aparece en las fotografías",
      "text": "El verdadero valor de esta travesía reside en las conversaciones junto a la hoguera, el té a la menta compartido sin prisa, y la mirada cómplice entre doce mujeres que comenzaron como desconocidas y regresan como hermanas."
    },
    "stays": {
      "tag": "Refugios de Paz",
      "heading": "Lugares elegidos para acompañar la experiencia",
      "subtitle": "Espacios auténticos donde el descanso y la belleza conviven en perfecta armonía.",
      "riadTitle": "Riad de Paz en Marrakech",
      "riadDesc": "Un remanso de calma con patio andalusí, alberca fresca y habitaciones impregnadas de artesanía local y calma.",
      "campTitle": "Campamento de Lujo en Erg Chebbi",
      "campDesc": "Jaimas privadas con comodidades exclusivas, alfombras bereberes y el manto de la Vía Láctea sobre tu cama.",
      "kasbahTitle": "Kasbah Tradicional en el Atlas",
      "kasbahDesc": "Arquitectura de tierra cocida con vistas panorámicas a los valles y terrazas donde contemplar la caída del sol."
    },
    "hosts": {
      "tag": "Tus Anfitrionas",
      "heading": "Vanessa & Ana",
      "role": "Guías, creadoras y compañeras de camino",
      "bio": "Hemos recorrido y sentido el desierto durante años. Creamos 'Mujeres de Arena' no para mostrarte Marruecos desde la ventanilla de un autobús, sino para abrirte la puerta a una experiencia íntima, segura, humana y transformadora.",
      "quote": "El desierto no te pide que hagas nada; solo te invita a ser quien eres.",
      "cta": "Contactar con Vanessa y Ana"
    },
    "reserve": {
      "heading": "Una experiencia reservada para 12 mujeres",
      "subtitle": "Plazas estrictamente limitadas para preservar la intimidad y el cuidado en cada detalle.",
      "includesTitle": "Tu Travesía Incluye",
      "includes": [
        "Todos los traslados privados en vehículos 4x4 de alta gama con chóferes locales certificados",
        "Alojamiento completo en riads boutique y campamento de lujo privado en las dunas",
        "Pensión completa con gastronomía marroquí cuidada y opciones vegetarianas/celíacas",
        "Paseo en dromedario al atardecer y amanecer en las dunas de Erg Chebbi",
        "Acompañamiento personal y cuidado cercano durante todo el viaje por Vanessa y Ana",
        "Círculos de encuentro, ceremonias de bienvenida y talleres de introspección al atardecer"
      ],
      "excludesTitle": "No incluye",
      "excludes": [
        "Vuelos internacionales hasta/desde Marrakech",
        "Seguro de viaje obligatorio (te asesoramos en la elección)",
        "Gastos personales y propinas voluntarias"
      ],
      "cta": "Solicitar Información y Reservar Plaza"
    },
    "practical": {
      "heading": "Detalles Prácticos",
      "subtitle": "Todo previsto para que viajes con total serenidad",
      "passportTitle": "Pasaporte & Visado",
      "passportDesc": "Pasaporte con al menos 6 meses de vigencia. No se requiere visado para la Unión Europea.",
      "currencyTitle": "Moneda y Pagos",
      "currencyDesc": "El dírham marroquí (MAD). Podrás cambiar fácilmente divisa en el aeropuerto o utilizar cajeros locales.",
      "luggageTitle": "Equipaje y Clima",
      "luggageDesc": "Te enviaremos una guía completa con prendas recomendadas: lino fresco para el día y capas abrigadas para la noche en el desierto."
    },
    "footer": {
      "tagline": "Expedición íntima al desierto de Marruecos reservada exclusivamente para mujeres conscientes.",
      "quickLinks": "Explora",
      "contactTitle": "Contacto y Concierge",
      "whatsapp": "Habla con nosotras por WhatsApp",
      "email": "contacto@mujeresdearena.com",
      "copyright": "© 2026 Mujeres de Arena. Todos los derechos reservados."
    }
  },
  "pt": {
    "name": "Português",
    "flag": "🇵🇹",
    "dir": "ltr",
    "nav": {
      "home": "Início",
      "about": "Sobre Nós",
      "itinerary": "Itinerário & Alojamentos",
      "reserve": "Reservar Lugar",
      "contact": "Contato"
    },
    "hero": {
      "tag": "Expedição Íntima ao Saara · 12 Mulheres",
      "title": "MUJERES DE ARENA",
      "subtitle": "Não é uma viagem organizada. É uma jornada criada a partir do coração para se reconectar com o essencial no deserto marroquino.",
      "ctaReserve": "Reservar Lugar",
      "ctaItinerary": "Explorar Itinerário",
      "badge": "12 mulheres · uma jornada partilhada"
    },
    "manifesto": {
      "tag": "El Alma del Viaje",
      "heading": "No es un viaje organizado. Es una travesía creada desde el corazón.",
      "p1": "Un viaje pensado para mujeres que sienten la llamada del silencio, el vasto horizonte y la complicidad de compartir camino con otras mujeres conscientes.",
      "p2": "Desde las callejuelas doradas de Marrakech hasta las dunas de Erg Chebbi, te invitamos a desacelerar, respirar y dejar que el desierto haga su magia."
    },
    "stages": {
      "heading": "Siete etapas, una misma historia",
      "subtitle": "Un recorrido pausado a través de los paisajes más sobrecogedores del sur de Marruecos.",
      "items": [
        {
          "day": "01",
          "title": "Marrakech",
          "desc": "La bienvenida, aromas a jazmín y canela, y el sosiego de nuestro riad privado."
        },
        {
          "day": "02",
          "title": "Alto Atlas",
          "desc": "Cruzando el mítico paso de Tizi n'Tichka entre montañas ocres y aldeas bereberes."
        },
        {
          "day": "03",
          "title": "Valle del Draa",
          "desc": "El oasis de palmeras más extenso de Marruecos y sus ancestrales kasbahs de adobe."
        },
        {
          "day": "04",
          "title": "El Sahara",
          "desc": "Llegada al mar de dunas de Erg Chebbi y caravana en dromedario hacia el atardecer dorado."
        },
        {
          "day": "05",
          "title": "Bajo las Estrellas",
          "desc": "Noche en campamento nómada de lujo, música bereber junto a la hoguera y silencio infinito."
        },
        {
          "day": "06",
          "title": "Valles & Kasbahs",
          "desc": "Pueblos fortificados de Ait Ben Haddou, herencia milenaria y miradas profundas."
        },
        {
          "day": "07",
          "title": "El Regreso",
          "desc": "Cierre del círculo en Marrakech, celebrando los lazos creados en el camino."
        }
      ]
    },
    "magic": {
      "heading": "Allí donde algo se despierta",
      "subtitle": "La magia que no aparece en las fotografías",
      "text": "El verdadero valor de esta travesía reside en las conversaciones junto a la hoguera, el té a la menta compartido sin prisa, y la mirada cómplice entre doce mujeres que comenzaron como desconocidas y regresan como hermanas."
    },
    "stays": {
      "tag": "Refugios de Paz",
      "heading": "Lugares elegidos para acompañar la experiencia",
      "subtitle": "Espacios auténticos donde el descanso y la belleza conviven en perfecta armonía.",
      "riadTitle": "Riad de Paz en Marrakech",
      "riadDesc": "Un remanso de calma con patio andalusí, alberca fresca y habitaciones impregnadas de artesanía local y calma.",
      "campTitle": "Campamento de Lujo en Erg Chebbi",
      "campDesc": "Jaimas privadas con comodidades exclusivas, alfombras bereberes y el manto de la Vía Láctea sobre tu cama.",
      "kasbahTitle": "Kasbah Tradicional en el Atlas",
      "kasbahDesc": "Arquitectura de tierra cocida con vistas panorámicas a los valles y terrazas donde contemplar la caída del sol."
    },
    "hosts": {
      "tag": "Tus Anfitrionas",
      "heading": "Vanessa & Ana",
      "role": "Guías, creadoras y compañeras de camino",
      "bio": "Hemos recorrido y sentido el desierto durante años. Creamos 'Mujeres de Arena' no para mostrarte Marruecos desde la ventanilla de un autobús, sino para abrirte la puerta a una experiencia íntima, segura, humana y transformadora.",
      "quote": "El desierto no te pide que hagas nada; solo te invita a ser quien eres.",
      "cta": "Contactar con Vanessa y Ana"
    },
    "reserve": {
      "heading": "Una experiencia reservada para 12 mujeres",
      "subtitle": "Plazas estrictamente limitadas para preservar la intimidad y el cuidado en cada detalle.",
      "includesTitle": "Tu Travesía Incluye",
      "includes": [
        "Todos los traslados privados en vehículos 4x4 de alta gama con chóferes locales certificados",
        "Alojamiento completo en riads boutique y campamento de lujo privado en las dunas",
        "Pensión completa con gastronomía marroquí cuidada y opciones vegetarianas/celíacas",
        "Paseo en dromedario al atardecer y amanecer en las dunas de Erg Chebbi",
        "Acompañamiento personal y cuidado cercano durante todo el viaje por Vanessa y Ana",
        "Círculos de encuentro, ceremonias de bienvenida y talleres de introspección al atardecer"
      ],
      "excludesTitle": "No incluye",
      "excludes": [
        "Vuelos internacionales hasta/desde Marrakech",
        "Seguro de viaje obligatorio (te asesoramos en la elección)",
        "Gastos personales y propinas voluntarias"
      ],
      "cta": "Solicitar Información y Reservar Plaza"
    },
    "practical": {
      "heading": "Detalles Prácticos",
      "subtitle": "Todo previsto para que viajes con total serenidad",
      "passportTitle": "Pasaporte & Visado",
      "passportDesc": "Pasaporte con al menos 6 meses de vigencia. No se requiere visado para la Unión Europea.",
      "currencyTitle": "Moneda y Pagos",
      "currencyDesc": "El dírham marroquí (MAD). Podrás cambiar fácilmente divisa en el aeropuerto o utilizar cajeros locales.",
      "luggageTitle": "Equipaje y Clima",
      "luggageDesc": "Te enviaremos una guía completa con prendas recomendadas: lino fresco para el día y capas abrigadas para la noche en el desierto."
    },
    "footer": {
      "tagline": "Expedición íntima al desierto de Marruecos reservada exclusivamente para mujeres conscientes.",
      "quickLinks": "Explora",
      "contactTitle": "Contacto y Concierge",
      "whatsapp": "Habla con nosotras por WhatsApp",
      "email": "contacto@mujeresdearena.com",
      "copyright": "© 2026 Mujeres de Arena. Todos los derechos reservados."
    }
  },
  "ru": {
    "name": "Русский",
    "flag": "🇷🇺",
    "dir": "ltr",
    "nav": {
      "home": "Главная",
      "about": "О нас",
      "itinerary": "Маршрут и проживание",
      "reserve": "Забронировать",
      "contact": "Контакты"
    },
    "hero": {
      "tag": "Камерная экспедиция в Сахару · 12 Женщин",
      "title": "MUJERES DE ARENA",
      "subtitle": "Это не обычный тур. Это путешествие от чистого сердца, чтобы обрести гармонию в пустыне Марокко.",
      "ctaReserve": "Забронировать место",
      "ctaItinerary": "Посмотреть маршрут",
      "badge": "12 женщин · один общий путь"
    },
    "manifesto": {
      "tag": "El Alma del Viaje",
      "heading": "No es un viaje organizado. Es una travesía creada desde el corazón.",
      "p1": "Un viaje pensado para mujeres que sienten la llamada del silencio, el vasto horizonte y la complicidad de compartir camino con otras mujeres conscientes.",
      "p2": "Desde las callejuelas doradas de Marrakech hasta las dunas de Erg Chebbi, te invitamos a desacelerar, respirar y dejar que el desierto haga su magia."
    },
    "stages": {
      "heading": "Siete etapas, una misma historia",
      "subtitle": "Un recorrido pausado a través de los paisajes más sobrecogedores del sur de Marruecos.",
      "items": [
        {
          "day": "01",
          "title": "Marrakech",
          "desc": "La bienvenida, aromas a jazmín y canela, y el sosiego de nuestro riad privado."
        },
        {
          "day": "02",
          "title": "Alto Atlas",
          "desc": "Cruzando el mítico paso de Tizi n'Tichka entre montañas ocres y aldeas bereberes."
        },
        {
          "day": "03",
          "title": "Valle del Draa",
          "desc": "El oasis de palmeras más extenso de Marruecos y sus ancestrales kasbahs de adobe."
        },
        {
          "day": "04",
          "title": "El Sahara",
          "desc": "Llegada al mar de dunas de Erg Chebbi y caravana en dromedario hacia el atardecer dorado."
        },
        {
          "day": "05",
          "title": "Bajo las Estrellas",
          "desc": "Noche en campamento nómada de lujo, música bereber junto a la hoguera y silencio infinito."
        },
        {
          "day": "06",
          "title": "Valles & Kasbahs",
          "desc": "Pueblos fortificados de Ait Ben Haddou, herencia milenaria y miradas profundas."
        },
        {
          "day": "07",
          "title": "El Regreso",
          "desc": "Cierre del círculo en Marrakech, celebrando los lazos creados en el camino."
        }
      ]
    },
    "magic": {
      "heading": "Allí donde algo se despierta",
      "subtitle": "La magia que no aparece en las fotografías",
      "text": "El verdadero valor de esta travesía reside en las conversaciones junto a la hoguera, el té a la menta compartido sin prisa, y la mirada cómplice entre doce mujeres que comenzaron como desconocidas y regresan como hermanas."
    },
    "stays": {
      "tag": "Refugios de Paz",
      "heading": "Lugares elegidos para acompañar la experiencia",
      "subtitle": "Espacios auténticos donde el descanso y la belleza conviven en perfecta armonía.",
      "riadTitle": "Riad de Paz en Marrakech",
      "riadDesc": "Un remanso de calma con patio andalusí, alberca fresca y habitaciones impregnadas de artesanía local y calma.",
      "campTitle": "Campamento de Lujo en Erg Chebbi",
      "campDesc": "Jaimas privadas con comodidades exclusivas, alfombras bereberes y el manto de la Vía Láctea sobre tu cama.",
      "kasbahTitle": "Kasbah Tradicional en el Atlas",
      "kasbahDesc": "Arquitectura de tierra cocida con vistas panorámicas a los valles y terrazas donde contemplar la caída del sol."
    },
    "hosts": {
      "tag": "Tus Anfitrionas",
      "heading": "Vanessa & Ana",
      "role": "Guías, creadoras y compañeras de camino",
      "bio": "Hemos recorrido y sentido el desierto durante años. Creamos 'Mujeres de Arena' no para mostrarte Marruecos desde la ventanilla de un autobús, sino para abrirte la puerta a una experiencia íntima, segura, humana y transformadora.",
      "quote": "El desierto no te pide que hagas nada; solo te invita a ser quien eres.",
      "cta": "Contactar con Vanessa y Ana"
    },
    "reserve": {
      "heading": "Una experiencia reservada para 12 mujeres",
      "subtitle": "Plazas estrictamente limitadas para preservar la intimidad y el cuidado en cada detalle.",
      "includesTitle": "Tu Travesía Incluye",
      "includes": [
        "Todos los traslados privados en vehículos 4x4 de alta gama con chóferes locales certificados",
        "Alojamiento completo en riads boutique y campamento de lujo privado en las dunas",
        "Pensión completa con gastronomía marroquí cuidada y opciones vegetarianas/celíacas",
        "Paseo en dromedario al atardecer y amanecer en las dunas de Erg Chebbi",
        "Acompañamiento personal y cuidado cercano durante todo el viaje por Vanessa y Ana",
        "Círculos de encuentro, ceremonias de bienvenida y talleres de introspección al atardecer"
      ],
      "excludesTitle": "No incluye",
      "excludes": [
        "Vuelos internacionales hasta/desde Marrakech",
        "Seguro de viaje obligatorio (te asesoramos en la elección)",
        "Gastos personales y propinas voluntarias"
      ],
      "cta": "Solicitar Información y Reservar Plaza"
    },
    "practical": {
      "heading": "Detalles Prácticos",
      "subtitle": "Todo previsto para que viajes con total serenidad",
      "passportTitle": "Pasaporte & Visado",
      "passportDesc": "Pasaporte con al menos 6 meses de vigencia. No se requiere visado para la Unión Europea.",
      "currencyTitle": "Moneda y Pagos",
      "currencyDesc": "El dírham marroquí (MAD). Podrás cambiar fácilmente divisa en el aeropuerto o utilizar cajeros locales.",
      "luggageTitle": "Equipaje y Clima",
      "luggageDesc": "Te enviaremos una guía completa con prendas recomendadas: lino fresco para el día y capas abrigadas para la noche en el desierto."
    },
    "footer": {
      "tagline": "Expedición íntima al desierto de Marruecos reservada exclusivamente para mujeres conscientes.",
      "quickLinks": "Explora",
      "contactTitle": "Contacto y Concierge",
      "whatsapp": "Habla con nosotras por WhatsApp",
      "email": "contacto@mujeresdearena.com",
      "copyright": "© 2026 Mujeres de Arena. Todos los derechos reservados."
    }
  }
};
