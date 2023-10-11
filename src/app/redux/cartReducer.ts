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

interface CounterState {
  products: ProductType[];
}

// Define the initial state using that type
const initialState: CounterState = {
  products: [],
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
  },
});

export const { addToCart, removeFromCart, onreset } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default cartSlice.reducer;
