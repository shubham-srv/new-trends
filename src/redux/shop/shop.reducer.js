import shopActionsTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionsTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };

    case shopActionsTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      };

    case shopActionsTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
        errorMessage: undefined,
      };

    default:
      return state;
  }
};

export default shopReducer;
