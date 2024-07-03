import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const thunkFetchBoardGamesList = createAsyncThunk(
  'FETCH_BOARDGAMES_LIST',
  async () => {
    try {
      const response = await axios.get(
        'http://virginie-prost.vpnuser.lan:8000/api/games/page/1'
      );
      // On récupère la liste de jeux
      return response.data;
    } catch (error) {}
  }
);
