import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux-store/store";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;
}

interface CartProduct extends Product{
    amount: number;
}


const localStoredCard = localStorage.getItem("cartItems");
const initialState = localStoredCard ? JSON.parse(localStoredCard) : []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => { 
            // loop and get the productIndex that satisfies condition in state array
            const productIndex = state.findIndex((product:Product) => product.id === action.payload.id);
            // !== -1 --> exist | === -1  --> not exist
            if (productIndex !== -1) {
                state[productIndex].amount += 1;
                toast.info(`${action.payload.name} increased one`)

            } else {
                state.push({...action.payload, amount: 1});
                toast.success(`${action.payload.name} added one`)
            }
            // set localStorage | ("key ta tự đặt tên", chuyển cart sang chuỗi JSON )
            localStorage.setItem("cartItems", JSON.stringify(state))

        },
        decreaseFromCart: (state, action: PayloadAction<number>) => {
            const productIndex = state.findIndex((product:Product) => product.id === action.payload);
            if (state[productIndex].amount > 1) {
                state[productIndex].amount -= 1;
                toast.warning(`${state[productIndex].name} decreased one `)
            } else {
                toast.warning(`${state[productIndex].name} removed`)
                const nextCart = state.filter((product: Product) => product.id !== action.payload);
                state = nextCart;
            }
            localStorage.setItem("cartItems", JSON.stringify(state))
            return state;
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const productIndex = state.findIndex((product:Product) => product.id === action.payload);
                toast.warning(`${state[productIndex].name} removed`)
            const nextCart = state.filter((product: Product) => product.id !== action.payload)
            state = nextCart;
            localStorage.setItem("cartItems", JSON.stringify(state))
            return state;
        },
        checkOut: (state, action: PayloadAction<undefined>) => {
            state = [];
            localStorage.setItem("cartItems", JSON.stringify(state))
            toast.success(`Checkout Successfully`)

            return state;
        }
    }   
})

export const getCartSelector = (state: RootState) => state.cartSlice;
export const getTotalPrice = (state: RootState) => state.cartSlice.reduce((acc : number, next : CartProduct) => acc +=  (next.amount * next.price), 0);
export const getTotalQuantity = (state: RootState) => state.cartSlice.reduce((acc : number, next : CartProduct) => acc += next.amount , 0);


export const {addToCart,decreaseFromCart, removeFromCart, checkOut} = cartSlice.actions;
export default cartSlice.reducer;