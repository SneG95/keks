import { createSlice } from '@reduxjs/toolkit';
import { TFiltersProcess } from '../../types/state';
import { fetchCategoriesAction } from '../api-actions';
import { NameSpace, CategoryProduct, TypeProduct } from '../../consts';

const initialState: TFiltersProcess = {
  categories: [],
  firstLevelFilter: null,
  secondLevelFilters: []
};

export const filtersProcess = createSlice({
  name: NameSpace.Filters,
  initialState,
  reducers: {
    setFirstLevelFilter: (state, action) => {
      state.firstLevelFilter = action.payload as CategoryProduct;
    },
    dropFirstLevelFilter: (state) => {
      state.firstLevelFilter = null;
    },
    setSecondLevelFilter: (state, action) => {
      if (state.secondLevelFilters.includes(action.payload as TypeProduct)) {
        state.secondLevelFilters = state.secondLevelFilters.filter((filter) => filter !== action.payload);
        return;
      }
      state.secondLevelFilters.push(action.payload as TypeProduct);
    },
    dropSecondLevelFilters: (state) => {
      state.secondLevelFilters = [];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCategoriesAction.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  }
});

export const {setFirstLevelFilter, dropFirstLevelFilter, setSecondLevelFilter, dropSecondLevelFilters} = filtersProcess.actions;
