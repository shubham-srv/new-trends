import shopActionsTypes from "./shop.types";

export const fetchCollectionsStart = () => {
  return { type: shopActionsTypes.FETCH_COLLECTIONS_START };
};

export const fetchCollectionsSuccess = (collections) => {
  return {
    type: shopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections,
  };
};

export const fetchCollectionsFailure = (errorMessage) => {
  return {
    type: shopActionsTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  };
};
