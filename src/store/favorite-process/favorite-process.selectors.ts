import { NameSpace } from '../../consts';
import { TState } from '../../types/state';
import { TProductDetail } from '../../types/product';

export const getFavorites = (state: TState): TProductDetail[] => state[NameSpace.Favorites].favorites;
export const getChangeStatusError = (state: TState): boolean => state[NameSpace.Favorites].hasChangeStatusError;
export const getLoadedError = (state: TState): boolean => state[NameSpace.Favorites].hasLoadedError;
