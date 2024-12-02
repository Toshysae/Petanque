export interface Position {
  lat: number;
  lng: number;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  text: string;
  rating: number;
  createdAt: string;
}

export interface Boulodrome {
  id: string;
  name: string;
  address: string;
  city: string;
  position: Position;
  terrainCount: number;
  surfaceType: string;
  images: string[];
  rating: number;
  description?: string;
  comments: Comment[];
}

export interface UserProfile {
  id: string;
  userId: string;
  nickname: string;
  level?: string;
  yearsOfExperience?: number;
  preferredPosition?: string;
  avatarUrl?: string;
  bio?: string;
  favoriteTerrainId?: string;
  statistics?: {
    gamesPlayed: number;
    gamesWon: number;
    winRate: number;
  };
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  imageUrl?: string;
  createdAt: string;
  likesCount: number;
  comments: Comment[];
  user: {
    name: string;
    avatarUrl?: string;
  };
}