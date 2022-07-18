import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { authReducer } from "./auth";
import { cartReducer } from "./cart";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productsReducer } from "./products";

const persistConfig = {
  key: "root",
  storage,
};

const productsPersistConfig = {
  key: "products",
  storage,
  blacklist: ["products", "brandIds", "brands", "isLoading"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  products: persistReducer(productsPersistConfig, productsReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
