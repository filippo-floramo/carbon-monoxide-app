import { configureStore } from "@reduxjs/toolkit";
import { emissionAPI } from "./services/api/api";
import InputReducer from "./features/inputSlice";

export const store = configureStore({
   reducer: {
      [emissionAPI.reducerPath]: emissionAPI.reducer,
      input: InputReducer
   },

   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emissionAPI.middleware)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;