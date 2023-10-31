import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { fetchFavoritesAction } from '../api-actions';
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
      });
    /*.addCase(addFavoriteAction.fulfilled, (state, action) => {
        const {genre, id, name, previewImage, previewVideoLink} = action.payload;

        state.favoriteFilms.push({genre, id, name, previewImage, previewVideoLink});
        state.hasChangeStatusError = false;
      })
      .addCase(addFavoriteAction.rejected, (state) => {
        state.hasChangeStatusError = true;
      })
      .addCase(deleteFavoriteAction.fulfilled, (state, action) => {
        const updateFilm = action.payload;
        state.favoriteFilms = state.favoriteFilms.filter((offer) => offer.id !== updateFilm.id);
        state.hasChangeStatusError = false;
      })
      .addCase(deleteFavoriteAction.rejected, (state) => {
        state.hasChangeStatusError = true;
      });*/
  }
});

//export const {dropChangeStatusError} = favoriteProcess.actions;
