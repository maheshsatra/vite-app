import { configureStore } from '@reduxjs/toolkit'
import  itemSlice  from './itemSlice'
import cartSlice from "./cartSlice"
import paymentSlice from "./paymentSlice"
import sidemenuSlice from './sidemenuSlice'

export const store = configureStore({
  reducer: {
    items: itemSlice,
    cart:cartSlice,
    payment:paymentSlice,
    sidemenu:sidemenuSlice,
  },
})