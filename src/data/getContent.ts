import { Locale } from "./translations";

import esContent from "./content/es.json";
import enContent from "./content/en.json";
import frContent from "./content/fr.json";
import deContent from "./content/de.json";
import itContent from "./content/it.json";
import ptContent from "./content/pt.json";
import ruContent from "./content/ru.json";
import arContent from "./content/ar.json";

export type SiteContent = typeof esContent;

const CONTENT_MAP: Record<Locale, SiteContent> = {
  es: esContent,
  en: enContent,
  fr: frContent,
  de: deContent,
  it: itContent,
  pt: ptContent,
  ru: ruContent,
  ar: arContent,
};

export function getSiteContent(locale: Locale = "es"): SiteContent {
  return CONTENT_MAP[locale] || CONTENT_MAP.en || esContent;
}
