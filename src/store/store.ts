import { configureStore } from "@reduxjs/toolkit";
import { emissionAPI } from "./services/api/api";
import modalReducer from "./features/modalSlice";
import chartReducer from "./features/chartsSlice";

export const store = configureStore({
   reducer: {
      [emissionAPI.reducerPath]: emissionAPI.reducer,
      input: modalReducer,
      chart: chartReducer
   },

   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emissionAPI.middleware)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;