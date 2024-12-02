import { Language } from './types';

export const contentTranslations: Record<Language, {
  pages: {
    home: {
      title: string;
      description: string;
    };
    spots: {
      title: string;
      description: string;
      addSpot: {
        title: string;
        description: string;
      };
    };
    profile: {
      title: string;
      description: string;
      stats: {
        gamesPlayed: string;
        winRate: string;
        favoriteSpot: string;
      };
    };
  };
  articles: {
    tips: {
      title: string;
      content: string;
    };
    rules: {
      title: string;
      content: string;
    };
  };
}> = {
  fr: {
    pages: {
      home: {
        title: "Bienvenue sur PétanqueSpots",
        description: "Découvrez les meilleurs terrains de pétanque près de chez vous"
      },
      spots: {
        title: "Terrains de Pétanque",
        description: "Trouvez le terrain idéal pour votre prochaine partie",
        addSpot: {
          title: "Ajouter un Terrain",
          description: "Partagez votre terrain favori avec la communauté"
        }
      },
      profile: {
        title: "Mon Profil",
        description: "Gérez votre profil et vos statistiques",
        stats: {
          gamesPlayed: "Parties jouées",
          winRate: "Taux de victoire",
          favoriteSpot: "Terrain favori"
        }
      }
    },
    articles: {
      tips: {
        title: "Conseils pour Progresser",
        content: "Découvrez nos meilleurs conseils pour améliorer votre jeu"
      },
      rules: {
        title: "Règles Officielles",
        content: "Tout ce que vous devez savoir sur les règles de la pétanque"
      }
    }
  },
  en: {
    pages: {
      home: {
        title: "Welcome to PétanqueSpots",
        description: "Discover the best petanque courts near you"
      },
      spots: {
        title: "Petanque Courts",
        description: "Find the perfect court for your next game",
        addSpot: {
          title: "Add a Court",
          description: "Share your favorite court with the community"
        }
      },
      profile: {
        title: "My Profile",
        description: "Manage your profile and statistics",
        stats: {
          gamesPlayed: "Games played",
          winRate: "Win rate",
          favoriteSpot: "Favorite court"
        }
      }
    },
    articles: {
      tips: {
        title: "Tips to Improve",
        content: "Discover our best tips to improve your game"
      },
      rules: {
        title: "Official Rules",
        content: "Everything you need to know about petanque rules"
      }
    }
  },
  de: {
    pages: {
      home: {
        title: "Willkommen bei PétanqueSpots",
        description: "Entdecken Sie die besten Boule-Plätze in Ihrer Nähe"
      },
      spots: {
        title: "Boules Plätze",
        description: "Finden Sie den perfekten Platz für Ihr nächstes Spiel",
        addSpot: {
          title: "Fügen Sie einen Platz hinzu",
          description: "Teilen Sie Ihren Lieblingsplatz mit der Community"
        }
      },
      profile: {
        title: "Mein Profil",
        description: "Verwalten Sie Ihr Profil und Ihre Statistiken",
        stats: {
          gamesPlayed: "Gespielte Spiele",
          winRate: "Gewinnquote",
          favoriteSpot: "Lieblingsplatz"
        }
      }
    },
    articles: {
      tips: {
        title: "Tipps zur Verbesserung",
        content: "Entdecken Sie unsere besten Tipps zur Verbesserung Ihres Spiels"
      },
      rules: {
        title: "Offizielle Regeln",
        content: "Alles, was Sie über die Regeln des Boules wissen müssen"
      }
    }
  },
  nl: {
    pages: {
      home: {
        title: "Welkom bij PétanqueSpots",
        description: "Ontdek de beste petanque banen bij jou in de buurt"
      },
      spots: {
        title: "Petanque Banen",
        description: "Vind de perfecte baan voor je volgende spel",
        addSpot: {
          title: "Voeg een Baan Toe",
          description: "Deel je favoriete baan met de gemeenschap"
        }
      },
      profile: {
        title: "Mijn Profiel",
        description: "Beheer je profiel en statistieken",
        stats: {
          gamesPlayed: "Gespeelde Spellen",
          winRate: "Winpercentage",
          favoriteSpot: "Favoriete baan"
        }
      }
    },
    articles: {
      tips: {
        title: "Tips om te Verbeteren",
        content: "Ontdek onze beste tips om je spel te verbeteren"
      },
      rules: {
        title: "Officiële Regels",
        content: "Alles wat je moet weten over de regels van petanque"
      }
    }
  },
  es: {
    pages: {
      home: {
        title: "Bienvenido a PétanqueSpots",
        description: "Descubre las mejores canchas de petanque cerca de ti"
      },
      spots: {
        title: "Canchas de Petanque",
        description: "Encuentra la cancha perfecta para tu próximo juego",
        addSpot: {
          title: "Añadir una Cancha",
          description: "Comparte tu cancha favorita con la comunidad"
        }
      },
      profile: {
        title: "Mi Perfil",
        description: "Gestiona tu perfil y estadísticas",
        stats: {
          gamesPlayed: "Juegos jugados",
          winRate: "Tasa de victorias",
          favoriteSpot: "Cancha favorita"
        }
      }
    },
    articles: {
      tips: {
        title: "Consejos para Mejorar",
        content: "Descubre nuestros mejores consejos para mejorar tu juego"
      },
      rules: {
        title: "Reglas Oficiales",
        content: "Todo lo que necesitas saber sobre las reglas de la petanca"
      }
    }
  },
  sv: {
    pages: {
      home: {
        title: "Välkommen till PétanqueSpots",
        description: "Upptäck de bästa petanquebanor nära dig"
      },
      spots: {
        title: "Petanquebanor",
        description: "Hitta den perfekta banan för ditt nästa spel",
        addSpot: {
          title: "Lägg till en Bana",
          description: "Dela din favoritbana med gemenskapen"
        }
      },
      profile: {
        title: "Min Profil",
        description: "Hantera din profil och statistik",
        stats: {
          gamesPlayed: "Spelade spel",
          winRate: "Vinstprocent",
          favoriteSpot: "Favoritbana"
        }
      }
    },
    articles: {
      tips: {
        title: "Tips för Att Förbättra",
        content: "Upptäck våra bästa tips för att förbättra ditt spel"
      },
      rules: {
        title: "Officiella Regler",
        content: "Allt du behöver veta om reglerna för petanque"
      }
    }
  },
  "ar-DZ": {
    pages: {
      home: {
        title: "مرحبًا بك في PétanqueSpots",
        description: "اكتشف أفضل ملاعب البيتانك بالقرب منك"
      },
      spots: {
        title: "ملاعب البيتانك",
        description: "ابحث عن الملعب المثالي للعبة القادمة",
        addSpot: {
          title: "إضافة ملعب",
          description: "شارك ملعبك المفضل مع المجتمع"
        }
      },
      profile: {
        title: "ملفي الشخصي",
        description: "إدارة ملفك الشخصي وإحصائياتك",
        stats: {
          gamesPlayed: "عدد الألعاب",
          winRate: "نسبة الفوز",
          favoriteSpot: "الملعب المفضل"
        }
      }
    },
    articles: {
      tips: {
        title: "نصائح للتحسين",
        content: "اكتشف أفضل نصائحنا لتحسين لعبتك"
      },
      rules: {
        title: "القواعد الرسمية",
        content: "كل ما تحتاج لمعرفته حول قواعد البيتانك"
      }
    }
  },
  "ar-MA": {
    pages: {
      home: {
        title: "مرحبا بك في PétanqueSpots",
        description: "اكتشف أفضل ملاعب البيتانك بالقرب منك"
      },
      spots: {
        title: "ملاعب البيتانك",
        description: "ابحث عن الملعب المثالي للعبتك القادمة",
        addSpot: {
          title: "إضافة ملعب",
          description: "شارك ملعبك المفضل مع المجتمع"
        }
      },
      profile: {
        title: "ملفي الشخصي",
        description: "إدارة ملفك الشخصي وإحصائياتك",
        stats: {
          gamesPlayed: "عدد الألعاب",
          winRate: "نسبة الفوز",
          favoriteSpot: "الملعب المفضل"
        }
      }
    },
    articles: {
      tips: {
        title: "نصائح للتحسين",
        content: "اكتشف أفضل نصائحنا لتحسين لعبتك"
      },
      rules: {
        title: "القواعد الرسمية",
        content: "كل ما تحتاج لمعرفته حول قواعد البيتانك"
      }
    }
  },
  th: {
    pages: {
      home: {
        title: "ยินดีต้อนรับสู่ PétanqueSpots",
        description: "ค้นพบสนามเปตองที่ดีที่สุดใกล้คุณ"
      },
      spots: {
        title: "สนามเปตอง",
        description: "ค้นหาสนามที่สมบูรณ์แบบสำหรับเกมถัดไปของคุณ",
        addSpot: {
          title: "เพิ่มสนาม",
          description: "แชร์สนามที่คุณชื่นชอบกับชุมชน"
        }
      },
      profile: {
        title: "โปรไฟล์ของฉัน",
        description: "จัดการโปรไฟล์และสถิติของคุณ",
        stats: {
          gamesPlayed: "เกมที่เล่น",
          winRate: "อัตราการชนะ",
          favoriteSpot: "สนามที่ชื่นชอบ"
        }
      }
    },
    articles: {
      tips: {
        title: "เคล็ดลับในการปรับปรุง",
        content: "ค้นหาเคล็ดลับที่ดีที่สุดในการปรับปรุงเกมของคุณ"
      },
      rules: {
        title: "กฎอย่างเป็นทางการ",
        content: "ทุกสิ่งที่คุณต้องรู้เกี่ยวกับกฎของเปตอง"
      }
    }
  },
  ja: {
    pages: {
      home: {
        title: "PétanqueSpotsへようこそ",
        description: "あなたの近くの最高のペタンクコートを見つけよう"
      },
      spots: {
        title: "ペタンクコート",
        description: "次のゲームに最適なコートを見つける",
        addSpot: {
          title: "コートを追加する",
          description: "あなたのお気に入りのコートをコミュニティと共有する"
        }
      },
      profile: {
        title: "マイプロフィール",
        description: "プロフィールと統計を管理する",
        stats: {
          gamesPlayed: "プレイしたゲーム",
          winRate: "勝率",
          favoriteSpot: "お気に入りのコート"
        }
      }
    },
    articles: {
      tips: {
        title: "改善のためのヒント",
        content: "ゲームを改善するための最高のヒントを発見する"
      },
      rules: {
        title: "公式ルール",
        content: "ペタンクのルールについて知っておくべきこと"
      }
    }
  }
};
