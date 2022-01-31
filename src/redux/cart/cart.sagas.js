import { put, call, takeLatest, all } from "redux-saga/effects";

import { clearCart } from "./cart.actions";
import { userActionTypes } from "../user/user.types";

export function* clearCartItems() {
  yield put(clearCart());
}

export function* clearCartOnSignOut() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartItems);
}

export function* cartSagas() {
  yield all([call(clearCartOnSignOut)]);
}
