import { TProduct, TProductDetail } from './product';
import { store } from '../store';
import { TComment } from './comment';
import { RequestStatus, CategoryProduct, TypeProduct, AuthorizationStatus } from '../consts';
import { TCategory } from './category';

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
  isCommentsLoaded: boolean;
  hasErrorLastComment: boolean;
}

export type TFiltersProcess = {
  categories: TCategory[];
  firstLevelFilter: CategoryProduct | null;
  secondLevelFilters: TypeProduct[];
}

export type TUserProcess = {
  authorizationStatus: AuthorizationStatus;
  email: string;
  avatar: string;
  hasError: boolean;
  isExist: boolean;
}

export type TProductProcess = {
  product: TProductDetail | null;
  isProductLoaded: boolean;
  hasError: boolean;
}

export type TState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
