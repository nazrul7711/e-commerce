import { createSlice, PayloadAction } from "@reduxjs/toolkit";





// Define a type for the slice state
export interface ProductType {
  quantity: number;
  id: string;
  price: number;
  title: string;
  description: string;
  images: string[];
}

interface CartState {
  products: ProductType[];
  orders: ProductType[];
}

// Define the initial state using that type
const initialState: CartState = {
  products: [],
  orders: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let productInCart = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (productInCart) {
        productInCart.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },
    onreset: (state) => {
      state.products = [];
    },
    addOrders:(state,action)=>{
      state.orders  = action.payload
    },
    resetOrders:(state)=>{
      state.orders = []
    }
  },
});

export const { addToCart, removeFromCart, onreset,addOrders,resetOrders } = cartSlice.actions;



export default cartSlice.reducer;
