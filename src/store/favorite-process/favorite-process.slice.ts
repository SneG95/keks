import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { fetchFavoritesAction, addFavoriteAction, deleteFavoriteAction } from '../api-actions';
import { TFavoriteProcess } from '../../types/state';

const initialState: TFavoriteProcess = {
  favorites: [],
  hasChangeStatusError: false,
  hasLoadedError: false
};

export const favoriteProcess = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
    dropChangeStatusError: (state) => {
      state.hasChangeStatusError = false;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.hasLoadedError = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.favorites = [];
        state.hasLoadedError = true;
      })
      .addCase(addFavoriteAction.fulfilled, (state, action) => {
        state.hasChangeStatusError = false;
        state.favorites.push(action.payload);
      })
      .addCase(addFavoriteAction.rejected, (state) => {
        state.hasChangeStatusError = true;
      })
      .addCase(deleteFavoriteAction.fulfilled, (state, action) => {
        const updateProduct = action.payload;
        state.favorites = state.favorites.filter((product) => product.id !== updateProduct.id);
        state.hasChangeStatusError = false;
      })
      .addCase(deleteFavoriteAction.rejected, (state) => {
        state.hasChangeStatusError = true;
      });
  }
});

export const { dropChangeStatusError } = favoriteProcess.actions;
