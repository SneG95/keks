import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TProduct, TProductDetail } from '../types/product';
import { NameSpace, APIRoute, AppRoute } from '../consts';
import { TState, TAppDispatch } from '../types/state';
import { TComment, TCommentData } from '../types/comment';
import { TCategory } from '../types/category';
import { TUserData } from '../types/user-data';
import { TAuthData, TRegistrationData } from '../types/auth-data';
import { redirectToRoute } from './actions';
import { saveToken, dropToken } from '../services/token';

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

export const fetchProductAction = createAsyncThunk<TProductDetail, TProductDetail['id'], {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Product}/fetch`,
  async (productId, {extra: api}) => {
    const {data} = await api.get<TProductDetail>(APIRoute.Product.replace(':id', productId));

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

export const checkAuthAction = createAsyncThunk<TUserData, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TUserData>(APIRoute.Login);

    return data;
  }
);

export const registrateAction = createAsyncThunk<TUserData, TRegistrationData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/registration`,
  async ({name, email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<TUserData>(APIRoute.Registration, {name, email, password});
    const {token} = data;
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.LogIn));

    return data;
  }
);

export const loginAction = createAsyncThunk<TUserData, TAuthData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/login`,
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<TUserData>(APIRoute.Login, {email, password});
    const {token} = data;
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));

    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/logout`,
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
