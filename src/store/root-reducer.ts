import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { productsProcess } from './products-process/products-process.slice';
import { favoriteProcess } from './favorite-process/favorite-process.slice';
import { commentsProcess } from './comments-process/comments-process.slice';
import { filtersProcess } from './filters-process/filters-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Products]: productsProcess.reducer,
  [NameSpace.Favorites]: favoriteProcess.reducer,
  [NameSpace.Comments]: commentsProcess.reducer,
  [NameSpace.Filters]: filtersProcess.reducer
});
