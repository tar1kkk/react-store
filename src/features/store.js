import {configureStore} from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";

export const store = configureStore({
    reducer : {
        categoriesSlice,
        productsSlice
    },
    devTools : true,
})