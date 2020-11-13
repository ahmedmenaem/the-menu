import initialState from './initialState';
import {
  TOGGLE_CONFIRM_DELETE_ITEM_MODAL,
  TOGGLE_ITEM_MODAL,
  ADD_ITEM_SUCCESS,
  LOAD_ITEMS_SUCCESS,
  DELETE_ITEM_SUCCESS,
  UPDATE_ITEM_SUCCESS,
} from '../actions/actionTypes';

const itemReducer = (state = initialState.items, action) => {
  switch (action.type) {
    case TOGGLE_CONFIRM_DELETE_ITEM_MODAL: {
      return {
        ...state,
        isConfirmDeleteItemModalOpenned:
          action.payload.isConfirmDeleteItemModalOpenned,
        selectedItem: action.payload.item,
        categoryId: action.payload.categoryId,
      };
    }
    case TOGGLE_ITEM_MODAL: {
      return {
        ...state,
        isItemModalOpenned: action.payload.isItemModalOpenned,
        selectedItem: action.payload.item,
        categoryId: action.payload.categoryId,
      };
    }
    case LOAD_ITEMS_SUCCESS: {
      let byCategoryIds = {};
      let allIds = [];
      action.payload.items.forEach((item) => {
        allIds.push(item.id);
      });
      byCategoryIds[action.payload.categoryId] = action.payload.items;
      return { allIds, byCategoryIds };
    }
    case ADD_ITEM_SUCCESS: {
      const { item, categoryId } = action.payload;
      let itemsByCategory = [];
      if (state.byCategoryIds[action.payload.categoryId]) {
        itemsByCategory = [...state.byCategoryIds[categoryId]];
        itemsByCategory.push(item);
      } else {
        itemsByCategory = [item];
      }
      let byCategoryIds = {};
      byCategoryIds[categoryId] = itemsByCategory;
      return { ...state, byCategoryIds };
    }
    case DELETE_ITEM_SUCCESS: {
      const { item, isConfirmDeleteItemModalOpenned } = action.payload;
      let itemsByCategory = [...state.byCategoryIds[item.categoryId]].filter(
        (i) => i.id !== item.id
      );
      let byCategoryIds = {};
      byCategoryIds[item.categoryId] = itemsByCategory;
      return {
        ...state,
        byCategoryIds,
        isConfirmDeleteItemModalOpenned,
      };
    }
    case UPDATE_ITEM_SUCCESS: {
      const { item, isItemModalOpenned } = action.payload;
      let itemsByCategory = [...state.byCategoryIds[item.categoryId]].map((i) =>
        i.id === item.id ? item : i
      );
      let byCategoryIds = {};
      byCategoryIds[item.categoryId] = itemsByCategory;
      return {
        ...state,
        byCategoryIds,
        isItemModalOpenned,
      };
    }
    default:
      return state;
  }
};

export default itemReducer;
