import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TProduct } from '../types/product';
import { NameSpace, APIRoute } from '../consts';
import { TState, TAppDispatch } from '../types/state';

export const fetchProductsAction = createAsyncThunk<TProduct[], undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Products}/fetch`,
  async(_arg, {extra: api}) => {
    const {data} = await api.get<TProduct[]>(APIRoute.Products);

    return data;
  }
);
