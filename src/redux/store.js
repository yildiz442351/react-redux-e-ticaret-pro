import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import Products from "../components/home/Products";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer: {
    categories : categorySlice,
    Products: productSlice,
    carts: cartSlice
},
})