import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { authReducer } from "./auth";
import { productsReducer } from "./products";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    user: authReducer,
  },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
});
