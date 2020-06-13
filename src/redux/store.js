import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "../features/Product/productSlice";
const rootReducer = combineReducers({
  products: productReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
