import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const thunkFetchBoardGamesList = createAsyncThunk(
  'FETCH_BOARDGAMES_LIST',
  async () => {
    try {
      const response = await axios.get('');
      return response.data;
    } catch (error) {}
  }
);
