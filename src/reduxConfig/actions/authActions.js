import * as constants from './constants';

export const signUpRequest = (user, navigation) => ({
  type: constants.SIGN_UP_REQUEST,
  payload: { user, navigation },
});

export const signUp = (user) => ({
  type: constants.SIGN_UP,
  payload: { user },
});

export const signInRequest = (credentials) => ({
  type: constants.SIGN_IN_REQUEST,
  payload: { credentials },
});

export const signIn = (headers, user) => ({
  type: constants.SIGN_IN,
  payload: { headers, user },
});

export const signOutRequest = () => ({
  type: constants.SIGN_OUT_REQUEST,
  payload: null,
});

export const signOut = () => ({
  type: constants.SIGN_OUT,
  payload: null,
});

export const setAuthedScreen = (authedScreen) => ({
  type: constants.SET_AUTHED_SCREEN,
  payload: { authedScreen },
});
