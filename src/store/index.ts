import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./global.slice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type ROOT_STORE_TYPE = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type ROOT_STORE_DISPATCH_TYPE = typeof store.dispatch;

export { store };
