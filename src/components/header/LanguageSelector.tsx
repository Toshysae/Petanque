import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Language, languageNames } from "@/utils/translations";

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const languageFlags: Record<Language, string> = {
  fr: "🇫🇷",
  en: "🇬🇧",
  de: "🇩🇪",
  nl: "🇳🇱",
  es: "🇪🇸",
  sv: "🇸🇪",
  "ar-DZ": "🇩🇿",
  "ar-MA": "🇲🇦",
  th: "🇹🇭",
  ja: "🇯🇵"
};

const LanguageSelector = ({ currentLanguage, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative border border-white/20 hover:bg-white/10 text-white"
        >
          <span className="text-2xl">{languageFlags[currentLanguage]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {(Object.keys(languageNames) as Language[]).map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => onLanguageChange(lang)}
            className={`cursor-pointer ${currentLanguage === lang ? "bg-primary/10" : ""}`}
          >
            <span className="mr-2">{languageFlags[lang]}</span>
            {languageNames[lang]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;