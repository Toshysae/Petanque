import { UserProfile } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Target, UserPlus, PencilIcon, ImagePlus, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { SocialFeed } from "./SocialFeed";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface UserProfileCardProps {
  profile: UserProfile;
  isOwnProfile?: boolean;
}

export const UserProfileCard = ({ profile, isOwnProfile = false }: UserProfileCardProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState("");
  const [postImage, setPostImage] = useState<string | null>(null);

  const handleAddFriend = () => {
    toast({
      title: "Demande d'ami envoyée",
      description: `Une demande d'ami a été envoyée à ${profile.nickname}`,
    });
  };

  const handleInviteToPlay = () => {
    toast({
      title: "Invitation envoyée",
      description: `Une invitation à jouer a été envoyée à ${profile.nickname}`,
    });
  };

  const handleViewFavoriteSpot = () => {
    if (profile.favoriteTerrainId) {
      navigate(`/spots/${profile.favoriteTerrainId}`);
    } else {
      toast({
        title: "Aucun terrain favori",
        description: "Ce joueur n'a pas encore choisi de terrain favori",
        variant: "destructive",
      });
    }
  };

  const handleEditProfile = () => {
    navigate("/profile/edit");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePublishPost = () => {
    if (!newPost.trim() && !postImage) return;
    
    // TODO: Implement actual post creation
    toast({
      title: "Publication créée",
      description: "Votre message a été publié avec succès",
    });
    
    setNewPost("");
    setPostImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="relative mb-8">
        <div className="h-48 bg-gradient-to-r from-primary/20 to-accent/20 rounded-t-lg" />
        <CardContent className="-mt-24 relative">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col items-start">
              <Avatar className="w-40 h-40 border-4 border-white shadow-lg">
                <AvatarImage src={profile.avatarUrl} />
                <AvatarFallback className="text-4xl">{profile.nickname[0]}</AvatarFallback>
              </Avatar>
              
              <div className="mt-4">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-bold">{profile.nickname}</h2>
                  {isOwnProfile && (
                    <Button onClick={handleEditProfile} variant="outline" size="sm">
                      <PencilIcon className="w-4 h-4 mr-2" />
                      Modifier mon profil
                    </Button>
                  )}
                </div>
                <p className="text-muted-foreground text-lg">{profile.preferredPosition}</p>
              </div>
            </div>

            {!isOwnProfile && (
              <div className="mt-6 md:mt-0 flex flex-col gap-3">
                <Button onClick={handleAddFriend} className="w-full" variant="outline">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Ajouter en ami
                </Button>
                <Button onClick={handleInviteToPlay} variant="outline" className="w-full">
                  Inviter à jouer
                </Button>
              </div>
            )}
          </div>

          <div className="mt-6 flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-lg text-muted-foreground">
              <Target className="w-5 h-5" />
              <span className="font-medium text-primary">
                {profile.level}
              </span>
            </div>
            {profile.favoriteTerrainId && (
              <div 
                className="flex items-center gap-2 text-lg text-muted-foreground cursor-pointer hover:text-primary transition-colors"
                onClick={handleViewFavoriteSpot}
              >
                <MapPin className="w-5 h-5" />
                <span>Terrain favori</span>
              </div>
            )}
          </div>

          {profile.bio && (
            <p className="mt-6 text-lg text-muted-foreground">
              {profile.bio}
            </p>
          )}
        </CardContent>
      </Card>

      {isOwnProfile && (
        <Card className="mb-8">
          <CardContent className="pt-6">
            <Textarea
              placeholder="Quoi de neuf ?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="mb-4"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="post-image"
                />
                <label
                  htmlFor="post-image"
                  className="cursor-pointer flex items-center space-x-2 text-primary hover:text-primary/80"
                >
                  <ImagePlus className="w-5 h-5" />
                  <span>Ajouter une image</span>
                </label>
              </div>
              <Button onClick={handlePublishPost} className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Publier
              </Button>
            </div>
            {postImage && (
              <div className="mt-4">
                <img src={postImage} alt="Preview" className="max-h-64 rounded-lg object-cover" />
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <div className="mt-8">
        <SocialFeed userId={profile.userId} showNewsFeed={true} />
      </div>
    </div>
  );
};