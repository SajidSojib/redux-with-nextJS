import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "./counterSlice";

export const store = configureStore({
    reducer: {
        counters: countersReducer
    },
  });

// Infer the type of store
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
