export * from './types';
export * from './ui';
export * from './premium';
export * from './ads';
export * from './content';

import { Language } from './types';
import { uiTranslations } from './ui';
import { premiumTranslations } from './premium';
import { adsTranslations } from './ads';
import { contentTranslations } from './content';

export const translations: Record<Language, {
  ui: typeof uiTranslations.fr;
  premium: typeof premiumTranslations.fr;
  ads: typeof adsTranslations.fr;
  content: typeof contentTranslations.fr;
}> = {
  fr: {
    ui: uiTranslations.fr,
    premium: premiumTranslations.fr,
    ads: adsTranslations.fr,
    content: contentTranslations.fr
  },
  en: {
    ui: uiTranslations.en,
    premium: premiumTranslations.en,
    ads: adsTranslations.en,
    content: contentTranslations.en
  },
  de: {
    ui: uiTranslations.de,
    premium: premiumTranslations.de,
    ads: adsTranslations.de,
    content: contentTranslations.de
  },
  nl: {
    ui: uiTranslations.nl,
    premium: premiumTranslations.nl,
    ads: adsTranslations.nl,
    content: contentTranslations.nl
  },
  es: {
    ui: uiTranslations.es,
    premium: premiumTranslations.es,
    ads: adsTranslations.es,
    content: contentTranslations.es
  },
  sv: {
    ui: uiTranslations.sv,
    premium: premiumTranslations.sv,
    ads: adsTranslations.sv,
    content: contentTranslations.sv
  },
  "ar-DZ": {
    ui: uiTranslations["ar-DZ"],
    premium: premiumTranslations["ar-DZ"],
    ads: adsTranslations["ar-DZ"],
    content: contentTranslations["ar-DZ"]
  },
  "ar-MA": {
    ui: uiTranslations["ar-MA"],
    premium: premiumTranslations["ar-MA"],
    ads: adsTranslations["ar-MA"],
    content: contentTranslations["ar-MA"]
  },
  th: {
    ui: uiTranslations.th,
    premium: premiumTranslations.th,
    ads: adsTranslations.th,
    content: contentTranslations.th
  },
  ja: {
    ui: uiTranslations.ja,
    premium: premiumTranslations.ja,
    ads: adsTranslations.ja,
    content: contentTranslations.ja
  }
};