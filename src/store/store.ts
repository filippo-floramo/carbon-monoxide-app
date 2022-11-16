import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist'
import { emissionAPI } from "./services/api/api";
import storage from 'redux-persist/lib/storage';
import modalReducer from "./features/modalSlice";
import mainChartReducer from "./features/mainChartSlice";
import totalChartReducer from "./features/totalChartSlice";

const persistConfig = {
   key: 'root',
   version: 1,
   storage,
}

const chartReducer = combineReducers({
   mainChart: mainChartReducer,
   totalChart: totalChartReducer
})


const persistedReducer = persistReducer(persistConfig, chartReducer)

export const store = configureStore({
   reducer: {
      [emissionAPI.reducerPath]: emissionAPI.reducer,
      input: modalReducer,
      chart: persistedReducer
   },

   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }).concat(emissionAPI.middleware),
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;