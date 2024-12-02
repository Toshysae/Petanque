import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ads = [
  {
    title: "🌟 PAS DE PUBLICITÉ ! PASSEZ À PREMIUM ET LIBÉREZ TOUT LE POTENTIEL DE PÉTANQUESPOTS !",
    description: "PROFITEZ DE -50% SUR L'ABONNEMENT ANNUEL",
    bgColor: "bg-gradient-to-r from-primary/90 to-accent/90",
    link: "/premium",
    isPremium: true
  },
  {
    title: "Découvrez nos nouveaux accessoires",
    description: "Collection exclusive de sacs et accessoires de pétanque",
    bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    link: "https://www.obut.com/fr/accessoires",
    isPremium: false
  },
  {
    title: "École de pétanque",
    description: "Inscrivez-vous maintenant et profitez d'un cours gratuit",
    bgColor: "bg-gradient-to-r from-green-500 to-emerald-500",
    link: "/spots",
    isPremium: false
  }
];

const DynamicAdBanner = () => {
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

  return (
    <div 
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      className={`block mt-8 p-6 rounded-xl shadow-lg transition-all duration-500 ${ad.bgColor} hover:opacity-90 min-h-[250px] flex flex-col justify-between relative overflow-hidden cursor-pointer`}
    >
      <div className="relative z-10">
        <h3 className={`font-heading font-bold text-white ${ad.isPremium ? 'text-xl mb-6' : 'text-lg mb-3'} leading-tight`}>
          {ad.isPremium ? (
            <span className="inline-flex items-center flex-wrap gap-2">
              {ad.title}
              <img
                src="/lovable-uploads/f77fd89e-154b-46e4-b1a6-dae20c68ab2e.png"
                alt="PétanqueSpots"
                className="w-20 h-20 object-contain mx-2"
              />
            </span>
          ) : (
            ad.title
          )}
        </h3>
        <p className="text-white/90 text-base leading-relaxed">
          {ad.description}
        </p>
      </div>
      <button 
        className={`
          mt-4 px-6 py-2.5 rounded-full 
          transition-all duration-300 
          text-sm font-semibold 
          ${ad.isPremium 
            ? 'bg-white text-primary hover:bg-opacity-90 hover:scale-105 transform' 
            : 'bg-white/20 text-white hover:bg-white/30'
          } 
          backdrop-blur-sm
        `}
      >
        En savoir plus
      </button>
    </div>
  );
};

export default DynamicAdBanner;