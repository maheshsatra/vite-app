import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShowSideMenu: false,
};

const sidemenuSlice = createSlice({
  name: 'sidemenu',
  initialState,
  reducers: {
    showSideMenu(state) {
      state.isShowSideMenu = !state.isShowSideMenu;
    },
  },
});

export const { showSideMenu } = sidemenuSlice.actions;

export default sidemenuSlice.reducer;
