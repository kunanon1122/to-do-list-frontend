import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from "@/redux/reducers/counterSlice";

import { boardColumnsApi } from "@/services/columnApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [boardColumnsApi.reducerPath]: boardColumnsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(boardColumnsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
