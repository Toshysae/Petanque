import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const signIn = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simuler une connexion
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Créer un utilisateur fictif
      const user = {
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
        bio: "Passionné de pétanque depuis toujours",
      };

      localStorage.setItem("user", JSON.stringify(user));
      toast({
        title: "Connexion réussie",
        description: "Bienvenue sur PétanqueSpot !",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de se connecter",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [navigate, toast]);

  const signUp = useCallback(async (email: string, password: string, nickname: string) => {
    setIsLoading(true);
    try {
      // Simuler une inscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user = {
        id: "new",
        userId: "new",
        nickname,
        level: "Débutant",
        yearsOfExperience: 0,
        statistics: {
          gamesPlayed: 0,
          gamesWon: 0,
          winRate: 0,
        },
      };

      localStorage.setItem("user", JSON.stringify(user));
      toast({
        title: "Inscription réussie",
        description: "Bienvenue sur PétanqueSpot !",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de créer le compte",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [navigate, toast]);

  const signOut = useCallback(() => {
    localStorage.removeItem("user");
    toast({
      title: "Déconnexion",
      description: "À bientôt !",
    });
    navigate("/auth");
  }, [navigate, toast]);

  return {
    signIn,
    signUp,
    signOut,
    isLoading,
  };
};