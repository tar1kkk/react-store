import {configureStore} from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";

export const store = configureStore({
    reducer : {
        categoriesSlice,
    },
    devTools : true,
})