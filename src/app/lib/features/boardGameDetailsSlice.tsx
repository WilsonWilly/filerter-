import { createSlice } from '@reduxjs/toolkit';
import { IBoardGameDetails } from '@/types/boardGame';
import { thunkFetchBoardGameDetails } from '../middlewares/thunkFetchBoardGameDetails';

interface BoardGameDetailsState {
  boardGameDetails: IBoardGameDetails | null;
  error: string;
  isLoading: boolean;
}

// State initial vide (pas de détails du jeu à l'initialisation)
const initialState: BoardGameDetailsState = {
  boardGameDetails: null,
  error: '',
  isLoading: true,
};

export const boardGameDetailsSlice = createSlice({
  name: 'boardgames list and details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunkFetchBoardGameDetails.pending, (state) => {
        // Action à faire pendant le chargement de la requête API
        state.isLoading = true;
      })
      .addCase(thunkFetchBoardGameDetails.fulfilled, (state, action) => {
        // Action à faire si l'appel API est un succés
        // On enregistre les données venant de l'API dans le store (ici les détails d'UN jeu, avec ses avis)
        state.boardGameDetails = action.payload;
        state.isLoading = false;
      })
      .addCase(thunkFetchBoardGameDetails.rejected, (state, action) => {
        // Action à faire si l'appel API est un échec
        console.log('erreur appel API : ', action);
        state.isLoading = false;
      });
  },
});

export default boardGameDetailsSlice.reducer;
