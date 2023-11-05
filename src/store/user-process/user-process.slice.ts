import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from '../../consts';
import { TUserProcess } from '../../types/state';
import { checkAuthAction, registrateAction, loginAction, logoutAction } from '../api-actions';

const initialState: TUserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  email: '',
  avatar: '',
  hasError: false,
  isExist: false
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    dropError: (state) => {
      state.hasError = false;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, actions) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.avatar = actions.payload.avatarUrl;
        state.email = actions.payload.email;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(registrateAction.fulfilled, (state) => {
        state.isExist = true;
      })
      .addCase(registrateAction.rejected, (state) => {
        state.isExist = true;
      })
      .addCase(loginAction.fulfilled, (state, actions) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.email = actions.payload.email;
        state.avatar = actions.payload.avatarUrl;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.hasError = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export const {dropError} = userProcess.actions;
