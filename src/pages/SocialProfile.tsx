import { useQuery } from "@tanstack/react-query";
import { UserProfileCard } from "@/components/UserProfileCard";
import { SocialFeed } from "@/components/SocialFeed";
import { UserProfile } from "@/types";

const fetchUserProfile = async (userId: string): Promise<UserProfile> => {
  // TODO: Implement API call
  return {
    id: "1",
    userId: "1",
    nickname: "Jean Pétanque",
    level: "Confirmé",
    yearsOfExperience: 5,
    preferredPosition: "Tireur",
    statistics: {
      gamesPlayed: 150,
      gamesWon: 89,
      winRate: 59,
    },
    bio: "Passionné de pétanque depuis toujours, je participe régulièrement aux tournois locaux et j'aime partager mon expérience avec les autres joueurs.",
  };
};

const SocialProfile = () => {
  const { data: profile, isLoading } = useQuery({
    queryKey: ["user-profile"],
    queryFn: () => fetchUserProfile("1"), // TODO: Get actual user ID
  });

  if (isLoading) return <div>Chargement du profil...</div>;
  if (!profile) return <div>Profil non trouvé</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <UserProfileCard profile={profile} />
        </div>
        <div className="md:col-span-2">
          <SocialFeed userId={profile.userId} />
        </div>
      </div>
    </div>
  );
};

export default SocialProfile;