import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { fetchProductsAction } from '../api-actions';
import { TProductsProcess } from '../../types/state';

const initialState: TProductsProcess = {
  products: [],
  isProductsDataLoaded: false,
  hasError: false
};

export const productsProcess = createSlice({
  name: NameSpace.Products,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductsAction.pending, (state) => {
        state.isProductsDataLoaded = false;
      })
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isProductsDataLoaded = true;
      })
      .addCase(fetchProductsAction.rejected, (state) => {
        state.hasError = true;
        state.isProductsDataLoaded = false;
      });
  },
});
