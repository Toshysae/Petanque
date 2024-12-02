import { Bell } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Language, translations } from "@/utils/translations";

interface NotificationButtonProps {
  language: Language;
}

const NotificationButton = ({ language }: NotificationButtonProps) => {
  const { toast } = useToast();

  const handleNotificationClick = () => {
    toast({
      title: translations[language].notifications,
      description: "Fonctionnalité en cours de développement",
    });
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button 
          onClick={handleNotificationClick}
          className="text-white hover:text-white/80 transition-colors p-3 rounded-full hover:bg-white/10"
        >
          <Bell className="w-6 h-6" />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{translations[language].notifications}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default NotificationButton;