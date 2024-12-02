import { Search, Plus, Users, Building2, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocationMapIcon } from "@/components/icons/LocationMapIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const BottomNav = () => {
  const [radius, setRadius] = useState([5]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleNearMe = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Erreur",
        description: "La géolocalisation n'est pas supportée par votre navigateur",
        variant: "destructive",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        toast({
          title: "Localisation trouvée",
          description: `Recherche des terrains dans un rayon de ${radius[0]}km...`,
        });
        navigate(
          `/spots?lat=${position.coords.latitude}&lng=${position.coords.longitude}&radius=${radius[0]}`
        );
      },
      (error) => {
        toast({
          title: "Erreur",
          description: "Impossible d'obtenir votre position",
          variant: "destructive",
        });
      }
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/spots?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <TooltipProvider>
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-6">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="text-primary hover:bg-primary/10 p-6"
                  onClick={() => navigate('/premium')}
                >
                  <Crown className="h-8 w-8" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Passer Premium</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost"
                  size="lg"
                  className="text-primary hover:bg-primary/10 p-6"
                  onClick={() => navigate('/spots')}
                >
                  <Search className="h-8 w-8" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Rechercher</p>
              </TooltipContent>
            </Tooltip>

            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost"
                  size="lg"
                  className="text-primary hover:bg-primary/10 p-6"
                >
                  <LocationMapIcon className="h-8 w-8" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h4 className="font-medium">Rayon de recherche</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Distance</span>
                      <span className="text-sm font-medium">{radius[0]}km</span>
                    </div>
                    <Slider
                      value={radius}
                      onValueChange={setRadius}
                      max={50}
                      min={1}
                      step={1}
                    />
                  </div>
                  <Button onClick={handleNearMe} className="w-full">
                    Rechercher autour de moi
                  </Button>
                </div>
              </PopoverContent>
            </Popover>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost"
                  size="lg"
                  className="text-primary hover:bg-primary/10 p-6"
                  onClick={() => navigate('/spots/create')}
                >
                  <Plus className="h-8 w-8" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Ajouter un spot</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost"
                  size="lg"
                  className="text-primary hover:bg-primary/10 p-6"
                  onClick={() => navigate('/users')}
                >
                  <Users className="h-8 w-8" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Joueurs</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost"
                  size="lg"
                  className="text-primary hover:bg-primary/10 p-6"
                  onClick={() => navigate('/clubs')}
                >
                  <Building2 className="h-8 w-8" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Clubs</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </nav>
    </TooltipProvider>
  );
};