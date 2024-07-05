import { ExecFileOptionsWithStringEncoding } from 'child_process';

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

export interface Root {
  game: Game;
  opinions: Opinion[];
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface Opinions {
  id: number;
  rating: number;
  comment: ExecFileOptionsWithStringEncoding;
  seen_price: number;
  created_at: string;
  pseudo: string;
}

export interface IconSvgProps {
  size: number;
  width: string | number | undefined;
  height: string | number | undefined;
}
