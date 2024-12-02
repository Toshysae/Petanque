import { User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UserProfile } from "@/types";
import { Language, translations } from "@/utils/translations";

interface UserMenuProps {
  user: UserProfile | null;
  language: Language;
}

const UserMenu = ({ user, language }: UserMenuProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast({
      title: translations[language].logout,
      description: "À bientôt sur Pétanque Connect !",
    });
    navigate("/auth");
  };

  if (!user) return null;

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 text-white cursor-pointer">
              <Avatar className="w-8 h-8">
                <AvatarImage src={user.avatarUrl} />
                <AvatarFallback>{user.nickname[0]}</AvatarFallback>
              </Avatar>
              <span className="hidden md:inline">{user.nickname}</span>
            </div>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>{translations[language].userMenu}</p>
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link to="/profile" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {translations[language].myProfile}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout} className="text-red-600 hover:text-red-700 hover:bg-red-50">
          <LogOut className="w-4 h-4 mr-2" />
          {translations[language].logout}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;