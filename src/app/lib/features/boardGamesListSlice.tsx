import { createSlice } from '@reduxjs/toolkit';
import { IBoardGame } from '@/@types/boardGame';

import { boardGamesList } from '@/assets/data2';
import { thunkFetchBoardGamesList } from '../middlewares/thunkFetchBoardGamesList';

interface BoardGamesState {
  boardGamesList: IBoardGame[];
  error: string;
}

// State initial sans jeux
const initialState: BoardGamesState = {
  boardGamesList: boardGamesList,
  error: '',
};

export const boardGamesSlice = createSlice({
  name: 'boardgames list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunkFetchBoardGamesList.pending, (state) => {
        // Action à faire pendant le chargement de la requête API
      })
      .addCase(thunkFetchBoardGamesList.fulfilled, (state, action) => {
        // Action à faire si l'appel API est un succés
      })
      .addCase(thunkFetchBoardGamesList.rejected, (state, action) => {
        // Action à faire si l'appel API est un échec
      });
  },
});

export default boardGamesSlice.reducer;
