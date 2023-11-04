import { TState } from '../../types/state';
import { NameSpace } from '../../consts';
import { TCategory } from '../../types/category';
import { createSelector } from '@reduxjs/toolkit';
import { getCategoryNames, getCategoryTypes } from '../../utils';

export const getCategories = (state: TState): TCategory[] => state[NameSpace.Filters].categories;
export const getFirstLevelFilters = createSelector(
  getCategories,
  (categories) => getCategoryNames(categories)
);
export const getFirstLevelFilter = (state: TState) => state[NameSpace.Filters].firstLevelFilter;
export const getSecondLevelFilters = createSelector(
  [getFirstLevelFilter, getCategories],
  (filter, categories) => getCategoryTypes(filter, categories)
);
export const getCurrentSecondLevelFilters = (state: TState) => state[NameSpace.Filters].secondLevelFilters;
