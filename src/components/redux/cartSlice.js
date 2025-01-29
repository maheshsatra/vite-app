import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemList: [],
  totalQuantity: 0,
  totalPrice: 0,
  discount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add to cart functio
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        state.itemList.push({
          quantity: 1,
          itemName: action.payload.itemName,
          itemPrice: action.payload.itemPrice,
          discountPrice: action.payload.discountPrice,
          itemDesc: action.payload.itemDesc,
          itemImage: action.payload.itemImage,
          itemCategory: action.payload.itemCategory,
        });
      }
      state.totalQuantity = state.itemList.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      state.totalPrice = state.itemList.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );
    },

    // remove cart item function
    removeFromCart(state, action) {
      const itemToRemove = state.itemList.find(
        (item) => item.id === action.payload.id
      );
      if (itemToRemove) {
        state.itemList = state.itemList.filter(
          (item) => item.id !== action.payload.id
        );
        state.totalQuantity = state.itemList.reduce(
          (sum, item) => sum + item.quantity,
          0
        );
        state.totalPrice = state.itemList.reduce(
          (sum, item) => sum + item.totalPrice,
          0
        );
      }
    },

    // apply discount function
    applyDiscount(state, action) {
      state.discount = action.payload;
    },

    // remove discount function
    removeDiscount(state, action) {
      state.discount = 0;
    },
  },
});

export const { addToCart, removeFromCart, removeDiscount, applyDiscount } =
  cartSlice.actions;
export default cartSlice.reducer;
