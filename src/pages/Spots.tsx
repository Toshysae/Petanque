import Header from "@/components/Header";
import Map from "@/Map";
import { Button } from "@/components/ui/button";
import { MapPin, Filter } from "lucide-react";

const Spots = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 relative">
        {/* Filter buttons */}
        <div className="absolute top-20 left-4 z-[1000] space-y-2">
          <Button variant="outline" className="bg-white w-10 h-10 p-0">
            <Filter className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="bg-white w-10 h-10 p-0">
            <MapPin className="h-5 w-5" />
          </Button>
        </div>

        {/* Map */}
        <div className="w-full h-[calc(100vh-4rem)]">
          <Map 
            initialCenter={[43.2965, 5.3698]}
            initialZoom={13}
          />
        </div>
      </div>
    </div>
  );
};

export default Spots;