import { configureStore } from "@reduxjs/toolkit";
// import productsSlice from "../redux-slices/productsSlice";
import cartSlice from "../redux-slices/cartSlice";
const store = configureStore({
    reducer: {
        // productsSlice
        cartSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;