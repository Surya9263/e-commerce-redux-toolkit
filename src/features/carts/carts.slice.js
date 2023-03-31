import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
        if(payload.qty>1){
            state.cartItems.map((e)=>{
                if(e.id==payload.id){
                    e.qty=payload.qty
                }
            })
        }else{
            state.cartItems=[...state.cartItems,payload]
        }
        console.log(current(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
