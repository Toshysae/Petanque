import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { UserProfile } from "@/types";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Logo from "./header/Logo";
import NotificationButton from "./header/NotificationButton";
import UserMenu from "./header/UserMenu";
import AdBanner from "./AdBanner";
import LanguageSelector from "./header/LanguageSelector";
import { Language, translations } from "@/utils/translations";

const Header = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [language, setLanguage] = useState<Language>("fr");

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
  }, []);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white">
      <div className="bg-primary shadow-sm border-b border-primary/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Logo />
              <h1 className="text-white text-lg md:text-xl font-heading hidden md:block whitespace-nowrap">
                {translations[language].tagline}
              </h1>
            </div>

            <div className="flex items-center gap-6">
              <LanguageSelector 
                currentLanguage={language}
                onLanguageChange={handleLanguageChange}
              />
              <NotificationButton language={language} />
              
              {user ? (
                <UserMenu user={user} language={language} />
              ) : (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link to="/auth">
                      <Button variant="secondary" className="hidden md:flex items-center gap-2 text-lg py-6">
                        <User className="w-5 h-5" />
                        {translations[language].login}
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{translations[language].login}</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>
        </div>
      </div>
      <AdBanner language={language} />
    </header>
  );
};

export default Header;