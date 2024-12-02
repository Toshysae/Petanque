import { Language } from './types';

const createTranslations = (language: string) => ({
  premium: {
    title: language === 'fr' 
      ? "PAS DE PUBLICITÉ ! PASSEZ À PREMIUM ET LIBÉREZ TOUT LE POTENTIEL DE PÉTANQUESPOTS !"
      : "NO ADS! GO PREMIUM AND UNLOCK THE FULL POTENTIAL OF PETANQUESPOTS!",
    description: language === 'fr'
      ? "PROFITEZ DE -50% SUR L'ABONNEMENT ANNUEL"
      : "GET 50% OFF ON ANNUAL SUBSCRIPTION"
  },
  obut: {
    title: language === 'fr'
      ? "OBUT, plus qu'une marque, une Aventure"
      : "OBUT, more than a brand, an Adventure",
    description: language === 'fr'
      ? "JE DÉCOUVRE !"
      : "DISCOVER NOW!"
  },
  equipment: {
    title: language === 'fr' ? "Équipement de qualité" : "Quality equipment",
    description: language === 'fr' ? "Trouvez vos boules" : "Find your boules"
  },
  tournament: {
    title: language === 'fr' ? "Tournois à venir" : "Upcoming tournaments",
    description: language === 'fr' ? "Participez aux compétitions" : "Join competitions"
  },
  school: {
    title: language === 'fr' ? "École de pétanque" : "Petanque school",
    description: language === 'fr' ? "Apprenez avec les meilleurs" : "Learn from the best"
  }
});

export const adsTranslations: Record<Language, ReturnType<typeof createTranslations>> = {
  fr: createTranslations('fr'),
  en: createTranslations('en'),
  de: createTranslations('de'),
  nl: createTranslations('nl'),
  es: createTranslations('es'),
  sv: createTranslations('sv'),
  "ar-DZ": createTranslations('ar'),
  "ar-MA": createTranslations('ar'),
  th: createTranslations('th'),
  ja: createTranslations('ja')
};