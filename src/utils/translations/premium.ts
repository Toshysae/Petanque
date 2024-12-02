import { Language } from './types';

export const premiumTranslations: Record<Language, {
  title: string;
  description: string;
  cta: string;
  features: string[];
  pricing: {
    monthly: string;
    yearly: string;
    lifetime: string;
  };
}> = {
  fr: {
    title: "PAS DE PUBLICITÉ ! PASSEZ À PREMIUM ET LIBÉREZ TOUT LE POTENTIEL DE PÉTANQUESPOTS !",
    description: "PROFITEZ DE -50% SUR L'ABONNEMENT ANNUEL",
    cta: "JE PASSE À PREMIUM",
    features: [
      "Accès illimité à tous les terrains",
      "Pas de publicité",
      "Support prioritaire",
      "Statistiques avancées"
    ],
    pricing: {
      monthly: "0,99€/mois",
      yearly: "9,99€/an",
      lifetime: "99,99€"
    }
  },
  en: {
    title: "NO ADS! GO PREMIUM AND UNLOCK THE FULL POTENTIAL OF PETANQUESPOTS!",
    description: "GET 50% OFF ON ANNUAL SUBSCRIPTION",
    cta: "GO PREMIUM",
    features: [
      "Unlimited access to all courts",
      "No ads",
      "Priority support",
      "Advanced statistics"
    ],
    pricing: {
      monthly: "€0.99/month",
      yearly: "€9.99/year",
      lifetime: "€99.99"
    }
  },
  de: {
    title: "KEINE WERBUNG! WERDEN SIE PREMIUM UND NUTZEN SIE DAS VOLLE POTENZIAL VON PETANQUESPOTS!",
    description: "50% RABATT AUF DAS JAHRESABO",
    cta: "PREMIUM WERDEN",
    features: [
      "Unbegrenzter Zugang zu allen Plätzen",
      "Keine Werbung",
      "Prioritätsupport",
      "Fortgeschrittene Statistiken"
    ],
    pricing: {
      monthly: "0,99€/Monat",
      yearly: "9,99€/Jahr",
      lifetime: "99,99€"
    }
  },
  nl: {
    title: "GEEN ADVERTENTIES! WORD PREMIUM EN ONTGRENDEL HET VOLLEDIGE POTENTIEEL VAN PETANQUESPOTS!",
    description: "50% KORTING OP JAARABONNEMENT",
    cta: "PREMIUM WORDEN",
    features: [
      "Onbeperkte toegang tot alle banen",
      "Geen advertenties",
      "Prioriteitsupport",
      "Geavanceerde statistieken"
    ],
    pricing: {
      monthly: "€0,99/maand",
      yearly: "€9,99/jaar",
      lifetime: "€99,99"
    }
  },
  es: {
    title: "¡SIN ANUNCIOS! ¡HAZTE PREMIUM Y DESBLOQUEA TODO EL POTENCIAL DE PETANQUESPOTS!",
    description: "50% DE DESCUENTO EN LA SUSCRIPCIÓN ANUAL",
    cta: "HAZTE PREMIUM",
    features: [
      "Acceso ilimitado a todas las canchas",
      "Sin anuncios",
      "Soporte prioritario",
      "Estadísticas avanzadas"
    ],
    pricing: {
      monthly: "€0.99/mes",
      yearly: "€9.99/año",
      lifetime: "€99.99"
    }
  },
  sv: {
    title: "INGA ANNONSER! BLI PREMIUM OCH LÅS UPP HELA POTENTIALEN I PETANQUESPOTS!",
    description: "50% RABATT PÅ ÅRSABONNEMANG",
    cta: "BLI PREMIUM",
    features: [
      "Obegränsad tillgång till alla banor",
      "Inga annonser",
      "Prioritetsupport",
      "Avancerad statistik"
    ],
    pricing: {
      monthly: "0,99€/månad",
      yearly: "9,99€/år",
      lifetime: "99,99€"
    }
  },
  "ar-DZ": {
    title: "بدون إعلانات! احصل على بريميوم واكتشف الإمكانات الكاملة لبيتانك سبوتس!",
    description: "خصم 50٪ على الاشتراك السنوي",
    cta: "احصل على بريميوم",
    features: [
      "دخول غير محدود إلى جميع الملاعب",
      "بدون إعلانات",
      "دعم أولوية",
      "إحصائيات متقدمة"
    ],
    pricing: {
      monthly: "0.99€/شهر",
      yearly: "9.99€/سنة",
      lifetime: "99.99€"
    }
  },
  "ar-MA": {
    title: "بدون إعلانات! احصل على بريميوم واكتشف الإمكانات الكاملة لبيتانك سبوتس!",
    description: "خصم 50٪ على الاشتراك السنوي",
    cta: "احصل على بريميوم",
    features: [
      "دخول غير محدود إلى جميع الملاعب",
      "بدون إعلانات",
      "دعم أولوية",
      "إحصائيات متقدمة"
    ],
    pricing: {
      monthly: "0.99€/شهر",
      yearly: "9.99€/سنة",
      lifetime: "99.99€"
    }
  },
  th: {
    title: "ไม่มีโฆษณา! สมัครพรีเมียมและปลดล็อกศักยภาพทั้งหมดของ PETANQUESPOTS!",
    description: "รับส่วนลด 50% สำหรับการสมัครสมาชิกรายปี",
    cta: "สมัครพรีเมียม",
    features: [
      "เข้าถึงสนามทั้งหมดได้ไม่จำกัด",
      "ไม่มีโฆษณา",
      "การสนับสนุนระดับสูง",
      "สถิติขั้นสูง"
    ],
    pricing: {
      monthly: "0.99€/เดือน",
      yearly: "9.99€/ปี",
      lifetime: "99.99€"
    }
  },
  ja: {
    title: "広告なし！プレミアムに登録してPETANQUESPOTSの全機能を解放しよう！",
    description: "年間サブスクリプションが50%オフ",
    cta: "プレミアムに登録",
    features: [
      "すべてのコートに無制限にアクセス",
      "広告なし",
      "優先サポート",
      "高度な統計"
    ],
    pricing: {
      monthly: "€0.99/月",
      yearly: "€9.99/年",
      lifetime: "€99.99"
    }
  }
};
