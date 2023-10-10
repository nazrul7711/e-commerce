import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartReducer"

export const store = configureStore({
  reducer:{
    carts:cartSlice
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/*
redux has a method called store.dispatch({type:""})u pass it a typs and payload

appDispatch is sth like this (action:Action)=>any

thunks are basically middleware to handle async activities



*/