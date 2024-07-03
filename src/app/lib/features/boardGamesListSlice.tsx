import { createSlice } from '@reduxjs/toolkit';
import { IBoardGame } from '@/@types/boardGame';

import { boardGamesList } from '@/assets/data2';
import { thunkFetchBoardGamesList } from '../middlewares/thunkFetchBoardGamesList';

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
  extraReducers: (builder) => {
    thunkFetchBoardGamesList;
  },
});

export default boardGamesSlice.reducer;
