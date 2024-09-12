import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cartSlice";
import modalReducer from "./feature/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
