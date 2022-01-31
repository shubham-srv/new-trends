import { takeLatest, put, call, all } from "redux-saga/effects";

import { mapCollectionsToObject } from "../../firebase/firebase.utils";

import shopActionsTypes from "./shop.types";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionsObject = yield call(mapCollectionsToObject);
    yield put(fetchCollectionsSuccess(collectionsObject));
  } catch (e) {
    yield put(fetchCollectionsFailure(e.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
