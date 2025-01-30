import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  codes: [],
  isError: false,
};

export const getAllPromoCodesData = createAsyncThunk(
  "code/fetch",
  async (url) => {
    const response = await fetch(url, {
      headers: {
        Authorization: `Barar ${
          JSON.parse(localStorage.getItem("loginInfo"))?.token
        }`,
      },
    });
    if (!response.ok) {
      return "Failed to fetch data";
    }
    return response.json();
  }
);

const promocodeSlice = createSlice({
  name: "promocode",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPromoCodesData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllPromoCodesData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.codes = action.payload;
      })
      .addCase(getAllPromoCodesData.rejected, (state) => {
        state.status = "failed";
        state.isError = true;
      });
  },
});

export default promocodeSlice.reducer;
