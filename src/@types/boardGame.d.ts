export interface BoardGame {
  id: number;
  name: string;
  slug: string;
  barCode: number;
  description: string;
  rating: number;
  picture: string;
  minPlayers: number;
  maxPlayers: number;
  dateRelease: string;
  minAge: number;
  maxAge: null;
  time: string;
  difficulty: string;
  vue: number;
  trend: boolean;
  userId: number;
}
