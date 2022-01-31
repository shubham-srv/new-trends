import { takeLatest, put, call, all } from "redux-saga/effects";

import {
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  googleProvider,
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

import { userActionTypes } from "./user.types";
import {
  setSignInSuccess,
  setSignInFailure,
  setSignOutSuccess,
  setSignOutFailure,
  setSignUpFailure,
} from "./user.actions";

export function* isUserAuthenticated(user) {
  const { payload } = user;
  if (payload) {
    const { displayName, email, uid } = payload;
    yield put(setSignInSuccess({ displayName, email, uid }));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield signInWithPopup(auth, googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    yield put(setSignInSuccess(userRef.data()));
  } catch (error) {
    yield put(setSignInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const result = yield signInWithEmailAndPassword(auth, email, password);
    const userRef = yield call(createUserProfileDocument, result.user);
    yield put(setSignInSuccess(userRef.data()));
  } catch (error) {
    yield put(setSignInFailure(error));
  }
}

export function* userSignOut() {
  try {
    yield signOut(auth);
    yield put(setSignOutSuccess());
  } catch (error) {
    yield put(setSignOutFailure(error));
  }
}

export function* signUpUser({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const docSnap = yield call(
      createUserProfileDocument(user, { displayName })
    );
    yield put(setSignInSuccess(docSnap.data()));
  } catch (error) {
    yield put(setSignUpFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onUserSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, userSignOut);
}

export function* onSignUpFormComplete() {
  yield takeLatest(userActionTypes.SIGN_UP_USER, signUpUser);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onUserSignOutStart),
    call(onSignUpFormComplete),
  ]);
}
