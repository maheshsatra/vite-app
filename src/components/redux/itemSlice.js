import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: "idle",
  items: [],
  isError: false,
};

export const getItemsData = createAsyncThunk(
  'items/fetch', 
  async (url) => {
    const response = await fetch(url, {
      headers: {
        Authorization: `Barar ${JSON.parse(localStorage.getItem("loginInfo"))?.token}`,
      },
    });
    if (!response.ok) {
      return 'Failed to fetch data';
    }
    return response.json(); 
  }
);

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItemsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getItemsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getItemsData.rejected, (state) => {
        state.status = 'failed';
        state.isError = true;
      });
  },
});

export default itemSlice.reducer;
