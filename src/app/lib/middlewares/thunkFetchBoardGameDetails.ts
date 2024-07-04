import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const thunkFetchBoardGameDetails = createAsyncThunk(
  'FETCH_BOARDGAME_DETAILS',
  async () => {
    try {
      const response = await axios.get(
        `http://virginie-prost.vpnuser.lan:8000/api/games/${slug}`
      );
      return response.data;
    } catch (error) {}
  }
);
