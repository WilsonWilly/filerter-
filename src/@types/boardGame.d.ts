// Interface pour la liste des jeux
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
  min_age: number;
  max_age: any;
  time: number;
  views: any;
  trend: any;
  categories: Category[];
  difficulty: string;
  date_release: string;
  date_create: string;
}

// Interfaces pour le détail des jeux
export interface IBoardGameDetails {
  game: IBoardGame;
  opinions: Opinion[];
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface Opinion {
  id: number;
  comment: string;
  rating: number;
  price: number;
  opinion_date: string;
}
