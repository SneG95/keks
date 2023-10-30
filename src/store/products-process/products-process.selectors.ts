import { NameSpace } from '../../consts';
import { TState } from '../../types/state';
import { TProduct } from '../../types/product';

export const getProducts = (state: TState): TProduct[] => state[NameSpace.Products].products;
export const getProductsLoadedStatus = (state: TState): boolean => state[NameSpace.Products].isProductsDataLoaded;
export const getErrorStatus = (state: TState): boolean => state[NameSpace.Products].hasError;
