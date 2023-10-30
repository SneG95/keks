import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { productsProcess } from './products-process/products-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Products]: productsProcess.reducer
});
