import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import { ImagePlus } from "lucide-react";

const EditProfile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [newAvatarUrl, setNewAvatarUrl] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      navigate("/auth");
      return;
    }
    setProfile(JSON.parse(userStr));
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;

    // Create a minimal version of the profile to store
    const minimalProfile = {
      ...profile,
      avatarUrl: newAvatarUrl || profile.avatarUrl,
    };

    try {
      // Convert to base64 if it's a data URL
      if (minimalProfile.avatarUrl?.startsWith('data:')) {
        const maxLength = 1024 * 50; // 50KB limit for the avatar
        if (minimalProfile.avatarUrl.length > maxLength) {
          minimalProfile.avatarUrl = minimalProfile.avatarUrl.substring(0, maxLength);
        }
      }

      localStorage.setItem("user", JSON.stringify(minimalProfile));
      toast({
        title: "Profil mis à jour",
        description: "Vos modifications ont été enregistrées avec succès",
      });
      navigate("/profile");
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder les modifications. L'image est peut-être trop volumineuse.",
        variant: "destructive",
      });
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewAvatarUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!profile) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Modifier mon profil</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="w-32 h-32">
                  <AvatarImage src={newAvatarUrl || profile.avatarUrl} />
                  <AvatarFallback>{profile.nickname[0]}</AvatarFallback>
                </Avatar>
                <div className="flex items-center space-x-2">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                    id="avatar-upload"
                  />
                  <label
                    htmlFor="avatar-upload"
                    className="cursor-pointer flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
                  >
                    <ImagePlus className="w-4 h-4" />
                    <span>Changer la photo</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Nom d'utilisateur</label>
                <Input
                  value={profile.nickname}
                  onChange={(e) =>
                    setProfile({ ...profile, nickname: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  value={profile.bio || ""}
                  onChange={(e) =>
                    setProfile({ ...profile, bio: e.target.value })
                  }
                  rows={4}
                />
              </div>

              <div className="flex space-x-4">
                <Button type="submit">Enregistrer</Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/profile")}
                >
                  Annuler
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EditProfile;
