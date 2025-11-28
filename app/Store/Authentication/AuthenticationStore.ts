import type { IUserModel } from "~/Model/User/IUserModel";

export type AuthenticationState = {
  user?: IUserModel;
  isLoading: boolean;
  error?: Error;
};

export const AuthenticationStore = {
  initialState: {
    user: undefined,
    isLoading: false,
    error: undefined,
  },
  scanner: {
    LOGIN_REQUEST: (
      state: AuthenticationState,
      payload: { email: string; password: string }
    ) => {
      state.isLoading = true;
      return state;
    },
    LOGIN_SUCCESS: (
      state: AuthenticationState,
      payload: { user: IUserModel }
    ) => {
      state.user = payload.user;
      state.isLoading = false;
      return state;
    },
    LOGIN_FAILURE: (state: AuthenticationState, payload: Error) => {
      state.error = payload;
      state.isLoading = false;
      return state;
    },
  },
};
