import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IBoardGame } from '@/@types/boardGame';

export const thunkFetchBoardGameDetails = createAsyncThunk<
  IBoardGame, // Type du retour de la fonction
  string, // Type du paramètrer d'entrée (slug)
  {
    rejectValue: string; // Type de la valeur en cas d'erreur
  }
>('FETCH_BOARDGAME_DETAILS', async (slug) => {
  try {
    const response = await axios.get(
      `http://virginie-prost.vpnuser.lan:8000/api/games/${slug}`
    );
    return response.data;
  } catch (error) {}
});
