import { Post } from '@/types';

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
    content: "Premier carreau de la saison ! 🎯",
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
    content: "Nouveau terrain inauguré aujourd'hui ! 🎉",
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
    content: "Victoire en doublette au tournoi municipal 🏆",
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
    content: "Soirée pétanque et grillades entre amis 🍖",
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
    content: "Nouveau record personnel : 5 carreaux d'affilée ! 🎯",
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
    content: "Préparation du grand tournoi de dimanche prochain 🎲",
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