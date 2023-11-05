import { createSlice } from '@reduxjs/toolkit';
import { TProductProcess } from '../../types/state';
import { NameSpace } from '../../consts';
import { fetchProductAction } from '../api-actions';

const initialState: TProductProcess = {
  product: null,
  isProductLoaded: false,
  hasError: false
};

export const productProcess = createSlice({
  name: NameSpace.Product,
  initialState,
  reducers: {
    dropProduct: (state) => {
      state.product = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProductAction.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isProductLoaded = true;
        state.hasError = false;
      })
      .addCase(fetchProductAction.pending, (state) => {
        state.isProductLoaded = false;
        state.hasError = false;
      })
      .addCase(fetchProductAction.rejected, (state) => {
        state.isProductLoaded = false;
        state.hasError = true;
      });
  }
});

export const {dropProduct} = productProcess.actions;
