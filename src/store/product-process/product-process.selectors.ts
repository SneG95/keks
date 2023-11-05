import { NameSpace } from '../../consts';
import { TState } from '../../types/state';
import { TProductDetail } from '../../types/product';

export const getProduct = (state: TState):TProductDetail | null => state[NameSpace.Product].product;
export const getProductLoadedStatus = (state: TState): boolean => state[NameSpace.Product].isProductLoaded;
export const getErrorStatus = (state: TState): boolean => state[NameSpace.Product].hasError;
