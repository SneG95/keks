import { TProduct } from './product';
import { store } from '../store';

export type TProductsProcess = {
  products: TProduct[];
  isProductsDataLoaded: boolean;
  hasError: boolean;
}

export type TState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
