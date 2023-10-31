import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TProduct, TProductDetail } from '../types/product';
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

export const fetchFavoritesAction = createAsyncThunk<TProductDetail[], undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Favorites}/fetch`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TProductDetail[]>(APIRoute.Favorites);

    return data;
  }
);

export const addFavoriteAction = createAsyncThunk<TProductDetail, TProductDetail['id'], {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Favorites}/add`,
  async (id, {extra: api}) => {
    const {data} = await api.put<TProductDetail>(`${APIRoute.Favorites}/${id}`);

    return data;
  }
);

export const deleteFavoriteAction = createAsyncThunk<TProductDetail, TProductDetail['id'], {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Favorites}/delete`,
  async (id, {extra: api}) => {
    const {data} = await api.delete<TProductDetail>(`${APIRoute.Favorites}/${id}`);

    return data;
  }
);
