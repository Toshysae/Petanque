import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import { Boulodrome } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SpotCarouselProps {
  spots: Boulodrome[];
}

const SpotCarousel = ({ spots }: SpotCarouselProps) => {
  const navigate = useNavigate();

  return (
    <div className="w-full my-12 px-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-[95vw] mx-auto"
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {spots.map((spot, index) => (
            <CarouselItem key={spot.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      onClick={() => navigate(`/spots/${spot.id}`)}
                      className="cursor-pointer"
                    >
                      <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-0">
                          <div className="relative">
                            <img
                              src={spot.images[0] || "https://images.unsplash.com/photo-1501854140801-50d01698950b"}
                              alt={spot.name}
                              className="w-full h-72 object-cover rounded-t-lg"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                              <h3 className="text-white font-semibold text-xl mb-2">{spot.name}</h3>
                              <div className="flex items-center gap-2 text-white/90">
                                <MapPin className="w-5 h-5" />
                                <span className="text-base truncate">{spot.address}</span>
                              </div>
                              <div className="flex items-center gap-2 text-yellow-400 mt-2">
                                <Star className="w-5 h-5 fill-current" />
                                <span className="text-white text-lg">{spot.rating}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Voir les détails de {spot.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12" />
        <CarouselNext className="hidden md:flex -right-12 h-12 w-12" />
      </Carousel>
    </div>
  );
};

export default SpotCarousel;