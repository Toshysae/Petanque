import { Card } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Boulodrome } from "@/types";

export interface SpotCardProps extends Boulodrome {
  onClick?: () => void;
}

const SpotCard = ({ id, name, address, images, rating, terrainCount, onClick }: SpotCardProps) => {
  return (
    <Link to={`/spots/${id}`} onClick={onClick}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative">
          <img
            src={images[0] || "/placeholder.svg"}
            alt={name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <h3 className="text-white font-semibold text-lg">{name}</h3>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-4 h-4" />
              <span className="text-sm truncate">{address}</span>
            </div>
            <div className="flex items-center gap-1 text-yellow-400 mt-1">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-white">{rating}</span>
              {terrainCount && (
                <span className="text-white text-sm ml-2">
                  ({terrainCount} terrains)
                </span>
              )}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default SpotCard;