import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Language } from "@/utils/translations";
import { adsTranslations } from "@/utils/translations/ads";

interface AdBannerProps {
  language: Language;
}

const ads = [
  {
    title: "premium",
    titleEnd: "PÉTANQUESPOTS !",
    description: "premium",
    bgImage: "/lovable-uploads/ce5ed5f5-cad2-4632-ae6f-f3472545a8e1.png",
    isObut: false,
    isPremium: true,
    link: "/premium"
  },
  {
    title: "obut",
    description: "",
    bgImage: "/lovable-uploads/ccc83974-d309-4157-95a5-d2c6f8f7012b.png",
    isObut: true,
    isPremium: false,
    link: "https://www.obut.com/fr/"
  },
  {
    title: "equipment",
    description: "equipment",
    bgImage: "/lovable-uploads/0e932c30-1ba0-4425-b43d-6e85dd1ce358.png",
    isObut: false,
    isPremium: false,
    link: "https://www.obut.com/fr/boules-de-petanque"
  },
  {
    title: "tournament",
    description: "tournament",
    bgImage: "/lovable-uploads/7c4be345-a20c-45b3-9549-3121a0a64691.png",
    isObut: false,
    isPremium: false,
    link: "/spots"
  },
  {
    title: "school",
    description: "school",
    bgImage: "/lovable-uploads/4dfb1f7a-0930-4931-b208-1da463405ebc.png",
    isObut: false,
    isPremium: false,
    link: "/spots"
  },
];

const AdBanner = ({ language }: AdBannerProps) => {
  const [currentAd, setCurrentAd] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const ad = ads[currentAd];

  const handleClick = () => {
    if (ad.link.startsWith('http')) {
      window.open(ad.link, '_blank');
    } else {
      navigate(ad.link);
    }
  };

  const getAdTitle = () => {
    if (ad.isObut) return '';
    const translations = adsTranslations[language];
    if (!translations) return '';
    
    switch (ad.title) {
      case "premium": return translations.premium.title;
      case "obut": return translations.obut.title;
      case "equipment": return translations.equipment.title;
      case "tournament": return translations.tournament.title;
      case "school": return translations.school.title;
      default: return ad.title;
    }
  };

  const getAdDescription = () => {
    if (ad.isObut) return '';
    const translations = adsTranslations[language];
    if (!translations) return '';
    
    switch (ad.description) {
      case "premium": return translations.premium.description;
      case "obut": return translations.obut.description;
      case "equipment": return translations.equipment.description;
      case "tournament": return translations.tournament.description;
      case "school": return translations.school.description;
      default: return ad.description;
    }
  };

  return (
    <div 
      className="w-full transition-all duration-500 relative cursor-pointer hover:opacity-95"
      style={{
        backgroundImage: `url(${ad.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: ad.isObut || ad.isPremium ? '400px' : '76px',
      }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      <div className={`absolute inset-0 ${ad.isPremium ? 'bg-gradient-to-r from-primary/10 to-primary/10' : ad.isObut ? 'bg-black/20' : 'bg-black/50'}`} />
      <div className="container mx-auto px-4 relative h-full">
        {!ad.isObut && (
          <div className={`flex flex-col items-center justify-center h-full ${!ad.isPremium ? 'md:flex-row md:text-left space-y-2 md:space-y-0' : 'text-center space-y-4'}`}>
            {ad.isPremium ? (
              <>
                <div className="flex flex-col items-center space-y-6">
                  <h3 className="text-4xl font-heading font-bold text-white max-w-3xl leading-tight animate-fade-up">
                    {getAdTitle()}
                    {ad.isPremium && (
                      <div className="flex items-center justify-center gap-3 mt-2">
                        <img
                          src="/lovable-uploads/f77fd89e-154b-46e4-b1a6-dae20c68ab2e.png"
                          alt="PétanqueSpots"
                          className="w-12 h-12 object-contain"
                        />
                        {ad.titleEnd}
                      </div>
                    )}
                  </h3>
                  <button 
                    className="px-8 py-3 rounded-full font-semibold text-lg transition-transform hover:scale-105 bg-white text-primary"
                  >
                    {getAdDescription()}
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg font-heading font-semibold text-white">
                  {getAdTitle()}
                </h3>
                <span className="hidden md:block mx-4 text-white">|</span>
                <p className="text-sm text-white/90">
                  {getAdDescription()}
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdBanner;