import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const LOCALES = ["es", "en", "fr", "de", "it", "pt", "ru", "ar"];

function extractObject(code, constName) {
  const startIdx = code.indexOf(constName);
  if (startIdx === -1) return null;
  const equalsIdx = code.indexOf("=", startIdx);
  const openBrace = code.indexOf("{", equalsIdx);
  let depth = 0;
  let inString = false;
  let stringChar = "";
  let escape = false;
  for (let i = openBrace; i < code.length; i++) {
    const ch = code[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (ch === "\\") {
      escape = true;
      continue;
    }
    if (inString) {
      if (ch === stringChar) inString = false;
    } else {
      if (ch === '"' || ch === "'" || ch === "`") {
        inString = true;
        stringChar = ch;
      } else if (ch === "{") {
        depth++;
      } else if (ch === "}") {
        depth--;
        if (depth === 0) {
          const objStr = code.substring(openBrace, i + 1);
          return new Function("return " + objStr)();
        }
      }
    }
  }
  return null;
}

function extractArray(code, constName) {
  const startIdx = code.indexOf(constName);
  if (startIdx === -1) return null;
  const equalsIdx = code.indexOf("=", startIdx);
  const openBracket = code.indexOf("[", equalsIdx);
  let depth = 0;
  let inString = false;
  let stringChar = "";
  let escape = false;
  for (let i = openBracket; i < code.length; i++) {
    const ch = code[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (ch === "\\") {
      escape = true;
      continue;
    }
    if (inString) {
      if (ch === stringChar) inString = false;
    } else {
      if (ch === '"' || ch === "'" || ch === "`") {
        inString = true;
        stringChar = ch;
      } else if (ch === "[") {
        depth++;
      } else if (ch === "]") {
        depth--;
        if (depth === 0) {
          const arrStr = code.substring(openBracket, i + 1);
          return new Function("return " + arrStr)();
        }
      }
    }
  }
  return null;
}

// Read raw source files
const heroCode = fs.readFileSync(path.join(rootDir, "src/components/Hero.tsx"), "utf8");
const manifestoCode = fs.readFileSync(path.join(rootDir, "src/components/Manifesto.tsx"), "utf8");
const stagesHeaderCode = fs.readFileSync(path.join(rootDir, "src/data/homeStagesData.ts"), "utf8");
const saharaCode = fs.readFileSync(path.join(rootDir, "src/components/SaharaSection.tsx"), "utf8");
const nightCode = fs.readFileSync(path.join(rootDir, "src/components/NightSection.tsx"), "utf8");
const translationsCode = fs.readFileSync(path.join(rootDir, "src/data/translations.ts"), "utf8");
const reserveCode = fs.readFileSync(path.join(rootDir, "src/components/ReserveSection.tsx"), "utf8");
const faqCode = fs.readFileSync(path.join(rootDir, "src/components/FAQSection.tsx"), "utf8");
const practicalCode = fs.readFileSync(path.join(rootDir, "src/components/PracticalSection.tsx"), "utf8");
const campfireCode = fs.readFileSync(path.join(rootDir, "src/components/CampfireCTA.tsx"), "utf8");

const itineraryHeroCode = fs.readFileSync(path.join(rootDir, "src/components/itinerary/ItineraryHero.tsx"), "utf8");
const itineraryStagesCode = fs.readFileSync(path.join(rootDir, "src/components/itinerary/ItineraryStages.tsx"), "utf8");
const itineraryInclusionsCode = fs.readFileSync(path.join(rootDir, "src/components/itinerary/ItineraryInclusions.tsx"), "utf8");

const aboutCode = fs.readFileSync(path.join(rootDir, "src/views/AboutView.tsx"), "utf8");
const contactCode = fs.readFileSync(path.join(rootDir, "src/views/ContactView.tsx"), "utf8");

// Parse objects
const heroData = extractObject(heroCode, "HERO_CONTENT");
const manifestoData = extractObject(manifestoCode, "MANIFESTO_CONTENT");
const stagesHeaderData = extractObject(stagesHeaderCode, "STAGES_HEADER");
const saharaData = extractObject(saharaCode, "SAHARA_CONTENT");
const nightData = extractObject(nightCode, "NIGHT_CONTENT");
const translationsData = extractObject(translationsCode, "translations");
const reserveData = extractObject(reserveCode, "RESERVE_DATA");
const faqData = extractObject(faqCode, "FAQ_DATA");
const practicalData = extractObject(practicalCode, "PRACTICAL_DATA");
const campfireData = extractObject(campfireCode, "CAMPFIRE_CONTENT");

const itineraryHeroData = extractObject(itineraryHeroCode, "HERO_TEXT");
const itineraryStagesData = extractArray(itineraryStagesCode, "STAGES_DATA");
const inclusionsHeaderData = extractObject(itineraryInclusionsCode, "INCLUSIONS_HEADER");
const inclusionsIncludedData = extractObject(itineraryInclusionsCode, "INCLUDED_CARD");
const inclusionsExcludedData = extractObject(itineraryInclusionsCode, "NOT_INCLUDED_CARD");

const aboutContent = extractObject(aboutCode, "content");
const contactContent = extractObject(contactCode, "content");

// Output directory
const outputDir = path.join(rootDir, "src/data/content");
fs.mkdirSync(outputDir, { recursive: true });

for (const loc of LOCALES) {
  const trans = translationsData[loc] || translationsData.en;
  const hero = heroData[loc] || heroData.en;
  const man = manifestoData[loc] || manifestoData.en;
  const stgHead = stagesHeaderData[loc] || stagesHeaderData.en;
  const sah = saharaData[loc] || saharaData.en;
  const nite = nightData[loc] || nightData.en;
  const res = reserveData[loc] || reserveData.en;
  const faq = faqData[loc] || faqData.en;
  const prac = practicalData[loc] || practicalData.en;
  const camp = campfireData[loc] || campfireData.en;

  const itinHero = itineraryHeroData[loc] || itineraryHeroData.en;

  const itinStages = itineraryStagesData.map((stg) => ({
    badge: stg.badge[loc] || stg.badge.en,
    title: stg.title[loc] || stg.title.en,
    text: stg.text[loc] || stg.text.en,
    listItems: stg.listItems[loc] || stg.listItems.en,
    image: stg.image,
  }));

  const getAboutVal = (k) => aboutContent[k]?.[loc] || aboutContent[k]?.en || "";
  const getContactVal = (k) => contactContent[k]?.[loc] || contactContent[k]?.en || "";

  const siteDoc = {
    locale: loc,
    nav: trans.nav || {
      home: "Home",
      about: "About Us",
      itinerary: "Itinerary & Stays",
      reserve: "Reserve Spot",
      contact: "Contact"
    },
    home: {
      hero: {
        eyebrow: hero.eyebrow,
        taglineLine1: hero.taglineLine1,
        taglineLine2: hero.taglineLine2,
        btnReserve: hero.btnReserve,
        btnDiscover: hero.btnDiscover,
        marquee: hero.marquee,
      },
      manifesto: {
        manifestoEyebrow: man.manifestoEyebrow,
        quotePrefix: man.quotePrefix,
        quoteEm: man.quoteEm,
        aboutEyebrow: man.aboutEyebrow,
        aboutTitleLine1: man.aboutTitleLine1,
        aboutTitleEm: man.aboutTitleEm,
        aboutTitleLine2: man.aboutTitleLine2,
        aboutP1: man.aboutP1,
        aboutP2: man.aboutP2,
        aboutQuoteLine1: man.aboutQuoteLine1,
        aboutQuoteLine2: man.aboutQuoteLine2,
        aboutQuoteLine3: man.aboutQuoteLine3,
        aboutClosing: man.aboutClosing,
        aboutCaption: man.aboutCaption,
      },
      stages: {
        kicker: stgHead.kicker,
        title: stgHead.title,
        desc: stgHead.desc,
        btn: stgHead.btn,
      },
      sahara: {
        eyebrow: sah.eyebrow,
        titlePrefix: sah.titlePrefix,
        titleEm: sah.titleEm,
        text: sah.text,
        chips: sah.chips,
      },
      night: {
        eyebrow: nite.eyebrow,
        titlePrefix: nite.titlePrefix,
        titleEm: nite.titleEm,
        p1: nite.p1,
        p2: nite.p2,
      },
      stays: {
        tag: trans.stays?.tag || "",
        heading: trans.stays?.heading || "",
        subtitle: trans.stays?.subtitle || "",
        riadTitle: trans.stays?.riadTitle || "",
        riadDesc: trans.stays?.riadDesc || "",
        campTitle: trans.stays?.campTitle || "",
        campDesc: trans.stays?.campDesc || "",
        kasbahTitle: trans.stays?.kasbahTitle || "",
        kasbahDesc: trans.stays?.kasbahDesc || "",
      },
      hosts: {
        tag: trans.hosts?.tag || "",
        heading: trans.hosts?.heading || "",
        role: trans.hosts?.role || "",
        bio: trans.hosts?.bio || "",
        quote: trans.hosts?.quote || "",
        cta: trans.hosts?.cta || "",
      },
      reserve: {
        eyebrow: res.eyebrow,
        titlePrefix: res.titlePrefix,
        titleEm: res.titleEm,
        titleSuffix: res.titleSuffix,
        ticketLabel: res.ticketLabel,
        ticketNote: res.ticketNote,
        depositLabel: res.depositLabel,
        depositNote: res.depositNote,
        remainingLabel: res.remainingLabel,
        remainingNote: res.remainingNote,
        bookBtn: res.bookBtn,
        includedTitle: res.includedTitle,
        includedItems: res.includedItems,
        excludedTitle: res.excludedTitle,
        excludedItems: res.excludedItems,
      },
      faq: {
        eyebrow: faq.eyebrow,
        titlePrefix: faq.titlePrefix,
        titleEm: faq.titleEm,
        titleSuffix: faq.titleSuffix,
        items: faq.items,
      },
      practical: {
        eyebrow: prac.eyebrow,
        titlePrefix: prac.titlePrefix,
        titleEm: prac.titleEm,
        titleSuffix: prac.titleSuffix,
        cards: prac.cards,
      },
      campfire: {
        eyebrow: camp.eyebrow,
        titlePrefix: camp.titlePrefix,
        titleEm: camp.titleEm,
        text: camp.text,
        bookBtn: camp.bookBtn,
        contactBtn: camp.contactBtn,
      },
      footer: {
        tagline: trans.footer?.tagline || "",
        quickLinks: trans.footer?.quickLinks || "",
        contactTitle: trans.footer?.contactTitle || "",
        whatsapp: trans.footer?.whatsapp || "",
        email: trans.footer?.email || "",
        copyright: trans.footer?.copyright || "",
      },
    },
    itinerary: {
      hero: {
        eyebrow: itinHero.eyebrow,
        titlePrefix: itinHero.titlePrefix,
        titleEm: itinHero.titleEm,
        subtitle: itinHero.subtitle,
      },
      stages: itinStages,
      stays: {
        tag: trans.stays?.tag || "",
        heading: trans.stays?.heading || "",
        subtitle: trans.stays?.subtitle || "",
        riadTitle: trans.stays?.riadTitle || "",
        riadDesc: trans.stays?.riadDesc || "",
        campTitle: trans.stays?.campTitle || "",
        campDesc: trans.stays?.campDesc || "",
        kasbahTitle: trans.stays?.kasbahTitle || "",
        kasbahDesc: trans.stays?.kasbahDesc || "",
      },
      inclusions: {
        eyebrow: inclusionsHeaderData.eyebrow[loc] || inclusionsHeaderData.eyebrow.en,
        titlePrefix: inclusionsHeaderData.titlePrefix[loc] || inclusionsHeaderData.titlePrefix.en,
        titleEm: inclusionsHeaderData.titleEm[loc] || inclusionsHeaderData.titleEm.en,
        includedTitle: inclusionsIncludedData.title[loc] || inclusionsIncludedData.title.en,
        includedItems: inclusionsIncludedData.items[loc] || inclusionsIncludedData.items.en,
        excludedTitle: inclusionsExcludedData.title[loc] || inclusionsExcludedData.title.en,
        excludedItems: inclusionsExcludedData.items[loc] || inclusionsExcludedData.items.en,
      },
      campfire: {
        eyebrow: camp.eyebrow,
        titlePrefix: camp.titlePrefix,
        titleEm: camp.titleEm,
        text: camp.text,
        bookBtn: camp.bookBtn,
        contactBtn: camp.contactBtn,
      },
    },
    about: {
      eyebrow: getAboutVal("eyebrow"),
      titlePrefix: getAboutVal("titlePrefix"),
      titleEm: getAboutVal("titleEm"),
      subtitle: getAboutVal("subtitle"),
      storyEyebrow: getAboutVal("storyEyebrow"),
      storyTitle: getAboutVal("storyTitle"),
      p1: getAboutVal("p1"),
      p2: getAboutVal("p2"),
      quote: getAboutVal("quote"),
      joinBtn: getAboutVal("joinBtn"),
      contactBtn: getAboutVal("contactBtn"),
    },
    contact: {
      eyebrow: getContactVal("eyebrow"),
      titlePrefix: getContactVal("titlePrefix"),
      titleEm: getContactVal("titleEm"),
      subtitle: getContactVal("subtitle"),
      emailTitle: getContactVal("emailTitle"),
      emailDesc: getContactVal("emailDesc"),
      whatsappTitle: getContactVal("whatsappTitle"),
      whatsappDesc: getContactVal("whatsappDesc"),
      formTitle: getContactVal("formTitle"),
      formSubtitle: getContactVal("formSubtitle"),
      nameLabel: getContactVal("nameLabel"),
      emailLabel: getContactVal("emailLabel"),
      messageLabel: getContactVal("messageLabel"),
      submitBtn: getContactVal("submitBtn"),
      thankYouTitle: getContactVal("thankYouTitle"),
      thankYouText: getContactVal("thankYouText"),
    },
  };

  fs.writeFileSync(
    path.join(outputDir, `${loc}.json`),
    JSON.stringify(siteDoc, null, 2)
  );
}

console.log("Successfully generated all 8 content JSON files in src/data/content/!");
