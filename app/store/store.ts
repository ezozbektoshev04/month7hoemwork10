import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
// import { type } from "os";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
