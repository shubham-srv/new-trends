import { userActionTypes } from "./user.types";

export const setCurrentUser = (user) => {
  return { type: userActionTypes.SET_CURRENT_USER, payload: user };
};

export const setGoogleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});

export const setEmailSignInStart = (user) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: user,
});

export const setSignInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const setSignInFailure = (errorMessage) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: errorMessage,
});

export const checkUserSession = (user) => ({
  type: userActionTypes.CHECK_USER_SESSION,
  payload: user,
});

export const setSignOutStart = () => ({ type: userActionTypes.SIGN_OUT_START });

export const setSignOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const setSignOutFailure = (error) => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const setSignUpNewUser = (user) => ({
  type: userActionTypes.SIGN_UP_USER,
  payload: user,
});

export const setSignUpFailure = (error) => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
