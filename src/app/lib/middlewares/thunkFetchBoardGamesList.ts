import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const thunkFetchBoardGamesList = createAsyncThunk(
  'FETCH_BOARDGAMES_LIST',
  async () => {
    const response = await axios.get('');
  }
);
