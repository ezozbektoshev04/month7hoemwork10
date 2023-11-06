import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { log } from "console";
const initialState = {
  products: [],
} as any;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkApi) => {
    const response = await axios.get("http://localhost:3000/products");
    const data = await response.data;
    // console.log(data);
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<any[]>) => {
        state.products.push(...action.payload);
      }
    );
  },
});

export default productSlice.reducer;
