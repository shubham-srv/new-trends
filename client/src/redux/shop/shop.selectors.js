import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionId) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionId] : null
  );

export const selectCollectionsArray = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollectionsIsLoading = createSelector(
  [selectCollections],
  (collections) => !!collections
);
