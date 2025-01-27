import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cash: {
    isActive: false,
    amount: "",
    name: "cash",
  },
  check: {
    isActive: false,
    amount: "",
    referanceNum: "",
    name: "check",
  },
  card: {
    isActive: false,
    amount: "",
    cardNum: "",
    name: "credit card",
  },
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    showPaymentType: (state, action) => {
      const { name } = action.payload;
      state[name].isActive = true;
    },
    removePaymentType: (state, action) => {
      const { name } = action.payload;
      state[name].isActive = false;
      state[name].amount = "";
      if (name === 'check') {
        state[name].referanceNum = "";
      }
      if (name === 'card') {
        state[name].cardNum = "";
      }
    },
    handleChange: (state, action) => {
      const { paymentType, name, value } = action.payload;
      state[paymentType][name] = value;
    }
  }
});

export const { showPaymentType, removePaymentType, handleChange } = paymentSlice.actions;

export default paymentSlice.reducer;
