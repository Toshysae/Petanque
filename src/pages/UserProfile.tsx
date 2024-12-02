import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail } from "lucide-react";

interface UserProfile {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
  role: "pointeur" | "tireur";
  favoriteSpot?: {
    id: string;
    name: string;
  };
}

const mockUser: UserProfile = {
  id: "1",
  username: "JeanPetanque",
  email: "jean@example.com",
  role: "tireur",
  favoriteSpot: {
    id: "1",
    name: "Boule du Canet"
  }
};

const UserProfile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src={mockUser.avatarUrl} />
              <AvatarFallback>{mockUser.username[0]}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">{mockUser.username}</CardTitle>
              <div className="flex items-center gap-2 text-gray-500 mt-1">
                <Mail className="w-4 h-4" />
                {mockUser.email}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Préférences</h3>
              <p>Rôle préféré: {mockUser.role}</p>
            </div>

            {mockUser.favoriteSpot && (
              <div>
                <h3 className="font-semibold mb-2">Terrain favori</h3>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {mockUser.favoriteSpot.name}
                </div>
              </div>
            )}

            <Button className="w-full">
              Inviter à une partie
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;