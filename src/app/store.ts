import { configureStore } from "@reduxjs/toolkit";
import { emissionAPI } from "./services/api";


export const store = configureStore({
   reducer: {
      [emissionAPI.reducerPath]: emissionAPI.reducer,
   },

   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emissionAPI.middleware)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;