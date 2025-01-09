import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from "@/redux/reducers/counterSlice";
import boardColumnSlice from "@/redux/reducers/boardColumnSlice";

import { boardColumnsApi } from "@/services/columnApi";
import { cardApi } from "@/services/cardApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    board: boardColumnSlice,
    [boardColumnsApi.reducerPath]: boardColumnsApi.reducer,
    [cardApi.reducerPath]: cardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      boardColumnsApi.middleware,
      cardApi.middleware,
    ]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
