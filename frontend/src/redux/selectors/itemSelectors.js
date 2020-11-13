export const getItemsState = (store) => store.items;

export const getItemsByCategoryId = (store, categoryId) => {
  const items = getItemsState(store);
  return items.byCategoryIds[categoryId] || [];
};

export const getSelectedItem = (store) => getItemsState(store).selectedItem;

export const getIsItemModalopnned = (store) =>
  getItemsState(store).isItemModalOpenned;

export const getIsConfirmDeleteItemModalOpenned = (store) =>
  getItemsState(store).isConfirmDeleteItemModalOpenned;

export const getItemCategoryId = (store) => getItemsState(store).categoryId;
