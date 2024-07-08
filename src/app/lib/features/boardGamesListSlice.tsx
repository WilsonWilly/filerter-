import { createSlice } from "@reduxjs/toolkit";
import { IBoardGame } from "../../../types/boardGame";

// import { boardGamesList } from '@/assets/data2';

import { thunkFetchBoardGamesList } from "../middlewares/thunkFetchBoardGamesList";

interface BoardGamesState {
  boardGamesList: IBoardGame[] | [];
  error: string;
  isLoading: boolean;
}

// State initial sans jeux
const initialState: BoardGamesState = {
  boardGamesList: boardGamesList,
  error: "",
  isLoading: true,
};

export const boardGamesSlice = createSlice({
  name: "boardgames list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunkFetchBoardGamesList.pending, (state) => {
        // Action à faire pendant le chargement de la requête API
        state.isLoading = true;
      })
      .addCase(thunkFetchBoardGamesList.fulfilled, (state, action) => {
        // Action à faire si l'appel API est un succés
        state.boardGamesList = action.payload;
        state.isLoading = false;
      })
      .addCase(thunkFetchBoardGamesList.rejected, (state, action) => {
        // Action à faire si l'appel API est un échec
        console.log("erreur appel API : ", action);
        state.isLoading = false;
      });
  },
});

export default boardGamesSlice.reducer;
