import { configureStore } from '@reduxjs/toolkit';
import { boardGamesSlice } from './features/boardGamesListSlice';

const store = configureStore({
  reducer: {
    boardGames: boardGamesSlice.reducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
