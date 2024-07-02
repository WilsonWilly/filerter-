import { createSlice } from '@reduxjs/toolkit';
import { IBoardGame } from '@/@types/boardGame';

import { boardGamesList } from '@/assets/data2';

interface BoardGamesState {
  boardGamesList: IBoardGame[];
}

// State initial sans jeux
const initialState: BoardGamesState = {
  boardGamesList: boardGamesList,
};

export const boardGamesSlice = createSlice({
  name: 'boardgames list',
  initialState,
  reducers: {},
});
