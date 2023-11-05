import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TProduct, TProductDetail } from '../types/product';
import { NameSpace, APIRoute } from '../consts';
import { TState, TAppDispatch } from '../types/state';
import { TComment, TCommentData } from '../types/comment';
import { TCategory } from '../types/category';
import { TUserData } from '../types/user-data';

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

export const fetchCommentsAction = createAsyncThunk<TComment[], TProductDetail['id'], {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Comments}/fetch`,
  async (productId, {extra: api}) => {
    const {data} = await api.get<TComment[]>(`${APIRoute.Comments}/${productId}`);

    return data;
  }
);

export const postCommentAction = createAsyncThunk<TComment, {commentData: TCommentData; productId: TProductDetail['id']}, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Comments}/add`,
  async ({commentData, productId}, {extra: api}) => {
    const {data} = await api.post<TComment>(`${APIRoute.Comments}/${productId}`, commentData);

    return data;
  }
);

export const fetchLastCommentAction = createAsyncThunk<TComment, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Comments}/fetchLast`,
  async(_arg, {extra: api}) => {
    const {data} = await api.get<TComment>(APIRoute.LastReview);

    return data;
  }
);

export const fetchCategoriesAction = createAsyncThunk<TCategory[], undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Filters}/fetch`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TCategory[]>(APIRoute.Categories);

    return data;
  }
);

export const checkAuthAction = createAsyncThunk<TUserData['avatarUrl'], undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, {extra: api}) => {
    const {data: {avatarUrl}} = await api.get<TUserData>(APIRoute.Login);

    return avatarUrl;
  }
);
