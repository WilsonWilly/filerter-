export interface IBoardGame {
  id: number;
  name: string;
  slug: string;
  bar_code: number;
  description: string;
  rating: number;
  picture: string;
  min_players: number;
  max_players: number;
  date_release: string;
  date_create: string;
  min_age: number;
  // maxAge: null;
  time: number;
  // difficulty: string;
  // vue: number;
  // trend: boolean;
  // userId: number;
}
