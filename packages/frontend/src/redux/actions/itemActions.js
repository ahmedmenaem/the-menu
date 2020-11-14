import * as itemsApi from '../../api/items';

import {
  TOGGLE_CONFIRM_DELETE_ITEM_MODAL,
  TOGGLE_ITEM_MODAL,
  ADD_ITEM_SUCCESS,
  LOAD_ITEMS_SUCCESS,
  DELETE_ITEM_SUCCESS,
  UPDATE_ITEM_SUCCESS,
} from './actionTypes';

export const toggleConfirmDeleteItemModal = (
  isConfirmDeleteItemModalOpenned,
  categoryId,
  item
) => ({
  type: TOGGLE_CONFIRM_DELETE_ITEM_MODAL,
  payload: {
    isConfirmDeleteItemModalOpenned,
    categoryId,
    item,
  },
});

export const toggleItemModal = (isItemModalOpenned, categoryId, item) => ({
  type: TOGGLE_ITEM_MODAL,
  payload: {
    isItemModalOpenned,
    categoryId,
    item,
  },
});

export const addItemSuccess = (categoryId, item) => ({
  type: ADD_ITEM_SUCCESS,
  payload: { item, categoryId },
});

export const addItem = (categoryId, item) => {
  return (dispatch) => {
    return itemsApi
      .addItem(categoryId, item)
      .then((item) => {
        dispatch(addItemSuccess(categoryId, item));
        dispatch(toggleItemModal(false, null, null));
      })
      .catch((err) => {
        console.error('err', err);
        throw new Error(err);
      });
  };
};

export const loadItemsSuccess = (categoryId, items) => ({
  type: LOAD_ITEMS_SUCCESS,
  payload: {
    categoryId,
    items,
  },
});

export const loadItems = (categoryId) => {
  return (dispatch) => {
    return itemsApi
      .getItems(categoryId)
      .then((items) => {
        dispatch(loadItemsSuccess(categoryId, items));
      })
      .catch((err) => {
        throw Error(err);
      });
  };
};

export const deleteItemsSuccess = (item) => ({
  type: DELETE_ITEM_SUCCESS,
  payload: {
    item,
    isConfirmDeleteItemModalOpenned: false,
  },
});

export const deleteItem = (item) => {
  return (dispatch) => {
    return itemsApi
      .deleteItem(item)
      .then((res) => {
        dispatch(deleteItemsSuccess(item));
      })
      .catch((err) => {
        throw Error(err);
      });
  };
};

export const updateItemsSuccess = (item) => ({
  type: UPDATE_ITEM_SUCCESS,
  payload: {
    item,
    isItemModalOpenned: false,
  },
});

export const updateItem = (item) => {
  return (dispatch) => {
    return itemsApi
      .updateItem(item)
      .then((item) => {
        dispatch(updateItemsSuccess(item));
      })
      .catch((err) => {
        throw Error(err);
      });
  };
};
