import { TProduct, TProductDetail } from './product';
import { store } from '../store';
import { TComment } from './comment';
import { RequestStatus } from '../consts';

export type TProductsProcess = {
  products: TProduct[];
  isProductsDataLoaded: boolean;
  hasError: boolean;
}

export type TFavoriteProcess = {
  favorites: TProductDetail[];
  hasChangeStatusError: boolean;
  hasLoadedError: boolean;
}

export type TCommentsProcess = {
  comments: TComment[];
  lastComment: TComment | null;
  sendingCommentStatus: RequestStatus;
}

export type TState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
