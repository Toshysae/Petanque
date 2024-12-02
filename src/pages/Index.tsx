import Header from "@/components/Header";
import Map from "@/Map";
import { NearbySpots } from "@/components/sections/NearbySpots";
import { Sidebar } from "@/components/sections/Sidebar";
import { SocialFeed } from "@/components/SocialFeed";
import { BottomNav } from "@/components/map/BottomNav";
import SpotCarousel from "@/components/SpotCarousel";
import { SAMPLE_SPOTS } from "@/utils/constants";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <div className="mb-8">
          <Map 
            initialCenter={[43.2965, 5.3698]} 
            initialZoom={13}
          />
        </div>

        <div className="mb-8">
          <BottomNav />
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-heading font-semibold mb-6">Spots à proximité</h2>
          <SpotCarousel spots={SAMPLE_SPOTS} />
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <NearbySpots />
            <SocialFeed showNewsFeed={true} />
          </div>
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;