import { useEffect, useState } from "react";
import { UserProfile } from "@/types";
import { useNavigate } from "react-router-dom";
import { UserProfileCard } from "@/components/UserProfileCard";
import Header from "@/components/Header";

const Profile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      navigate("/auth");
      return;
    }
    setProfile(JSON.parse(userStr));
  }, [navigate]);

  if (!profile) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <UserProfileCard profile={profile} isOwnProfile={true} />
    </div>
  );
};

export default Profile;