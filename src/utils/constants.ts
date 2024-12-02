import { Post, Boulodrome } from '@/types';

export const SAMPLE_SPOTS = [
  {
    id: "1",
    name: "Boulodrome du Parc Borély",
    address: "Avenue Borély, 13008 Marseille",
    city: "Marseille",
    position: { lat: 43.2614, lng: 5.3746 },
    terrainCount: 32,
    surfaceType: "Stabilisé",
    images: ["/lovable-uploads/24af02d3-ce35-46f2-b7bd-5ba92ddd85f8.png"],
    rating: 4.5,
    description: "Le plus grand boulodrome de Marseille, situé dans le magnifique Parc Borély",
    comments: []
  },
  {
    id: "2",
    name: "Amicale Bouliste du Vieux-Port",
    address: "Quai du Port, 13002 Marseille",
    city: "Marseille",
    position: { lat: 43.2951, lng: 5.3734 },
    terrainCount: 12,
    surfaceType: "Gravier",
    images: ["/lovable-uploads/73dfd78b-7ab0-435d-a988-9332b768757b.png"],
    rating: 4.2,
    description: "Boulodrome historique avec vue sur le Vieux-Port",
    comments: []
  },
  {
    id: "3",
    name: "Boulodrome Henri Salvador",
    address: "2 Rue Gustave Eiffel, 13010 Marseille",
    city: "Marseille",
    position: { lat: 43.2789, lng: 5.3967 },
    terrainCount: 16,
    surfaceType: "Stabilisé",
    images: ["/lovable-uploads/15d4f3bf-03b8-4921-9b40-b36ef7619b45.png"],
    rating: 4.0,
    description: "Boulodrome couvert idéal pour jouer toute l'année",
    comments: []
  },
  {
    id: "4",
    name: "La Boule Ferrée",
    address: "Place Jean Jaurès, 13001 Marseille",
    city: "Marseille",
    position: { lat: 43.2988, lng: 5.3843 },
    terrainCount: 8,
    surfaceType: "Terre battue",
    images: ["/lovable-uploads/a54826ce-10f2-4b01-8875-6a66ff866e39.png"],
    rating: 4.3,
    description: "Petit boulodrome convivial au cœur de Marseille",
    comments: []
  },
  {
    id: "5",
    name: "Boulodrome Municipal de La Valentine",
    address: "Avenue de la Valentine, 13011 Marseille",
    city: "Marseille",
    position: { lat: 43.2901, lng: 5.4789 },
    terrainCount: 24,
    surfaceType: "Stabilisé",
    images: ["/lovable-uploads/bef61342-2179-4469-adf7-80699ab5aadd.png"],
    rating: 4.1,
    description: "Grand boulodrome municipal avec parking",
    comments: []
  }
];

export const POPULAR_POSTS: Post[] = [
  {
    id: "1",
    userId: "user1",
    content: "Superbe partie aujourd'hui au boulodrome du Canet ! 🎯",
    imageUrl: "/lovable-uploads/24af02d3-ce35-46f2-b7bd-5ba92ddd85f8.png",
    createdAt: new Date().toISOString(),
    likesCount: 15,
    comments: [],
    user: {
      name: "Jean P.",
      avatarUrl: "/lovable-uploads/73dfd78b-7ab0-435d-a988-9332b768757b.png",
    }
  },
  {
    id: "2",
    userId: "user2",
    content: "Qui est partant pour une partie ce weekend ? ⚪",
    imageUrl: "/lovable-uploads/a54826ce-10f2-4b01-8875-6a66ff866e39.png",
    createdAt: new Date().toISOString(),
    likesCount: 8,
    comments: [],
    user: {
      name: "Marie D.",
      avatarUrl: "/lovable-uploads/8287843f-d016-423e-b546-a0d4185d38ab.png",
    }
  },
  {
    id: "3",
    userId: "user3",
    content: "Tournoi réussi hier soir ! 🏆",
    imageUrl: "/lovable-uploads/15d4f3bf-03b8-4921-9b40-b36ef7619b45.png",
    createdAt: new Date().toISOString(),
    likesCount: 25,
    comments: [],
    user: {
      name: "Pierre M.",
      avatarUrl: undefined,
    }
  },
  {
    id: "4",
    userId: "user4",
    content: "Belle ambiance au club ce soir 🌟",
    imageUrl: "/lovable-uploads/24af02d3-ce35-46f2-b7bd-5ba92ddd85f8.png",
    createdAt: new Date().toISOString(),
    likesCount: 12,
    comments: [],
    user: {
      name: "Sophie L.",
      avatarUrl: undefined,
    }
  },
  {
    id: "5",
    userId: "user5",
    content: "Entrainement intensif pour le championnat 💪",
    imageUrl: "/lovable-uploads/a54826ce-10f2-4b01-8875-6a66ff866e39.png",
    createdAt: new Date().toISOString(),
    likesCount: 18,
    comments: [],
    user: {
      name: "Michel R.",
      avatarUrl: undefined,
    }
  },
  {
    id: "6",
    userId: "user6",
    content: "Premier carreau de la saison ! 🎯",
    imageUrl: "/lovable-uploads/73dfd78b-7ab0-435d-a988-9332b768757b.png",
    createdAt: new Date().toISOString(),
    likesCount: 30,
    comments: [],
    user: {
      name: "Lucas B.",
      avatarUrl: undefined,
    }
  },
  {
    id: "7",
    userId: "user7",
    content: "Nouveau terrain inauguré aujourd'hui 🎉",
    imageUrl: "/lovable-uploads/15d4f3bf-03b8-4921-9b40-b36ef7619b45.png",
    createdAt: new Date().toISOString(),
    likesCount: 22,
    comments: [],
    user: {
      name: "Emma V.",
      avatarUrl: undefined,
    }
  },
  {
    id: "8",
    userId: "user8",
    content: "Préparation du concours du weekend 📋",
    imageUrl: "/lovable-uploads/24af02d3-ce35-46f2-b7bd-5ba92ddd85f8.png",
    createdAt: new Date().toISOString(),
    likesCount: 15,
    comments: [],
    user: {
      name: "Thomas D.",
      avatarUrl: undefined,
    }
  },
  {
    id: "9",
    userId: "user9",
    content: "Soirée pétanque sous les étoiles ✨",
    imageUrl: "/lovable-uploads/a54826ce-10f2-4b01-8875-6a66ff866e39.png",
    createdAt: new Date().toISOString(),
    likesCount: 28,
    comments: [],
    user: {
      name: "Julie M.",
      avatarUrl: undefined,
    }
  },
  {
    id: "10",
    userId: "user10",
    content: "Victoire en doublette ! 🏆",
    imageUrl: "/lovable-uploads/73dfd78b-7ab0-435d-a988-9332b768757b.png",
    createdAt: new Date().toISOString(),
    likesCount: 35,
    comments: [],
    user: {
      name: "Antoine P.",
      avatarUrl: undefined,
    }
  }
];

export const UPCOMING_EVENTS = [
  {
    id: "1",
    title: "Tournoi du Canet",
    date: "28 Mars 2024",
    participants: 24,
    location: "Boule du Canet"
  },
  {
    id: "2",
    title: "Concours Municipal",
    date: "15 Avril 2024",
    participants: 32,
    location: "Boulodrome Municipal"
  }
];

