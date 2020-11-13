import initialState from './initialState';
import {
  LOAD_CATEGORIES_SUCCESS,
  TOGGLE_CATEGORY_MODAL,
  TOGGLE_CONFIRM_DELETE_CATEGORY_MODAL,
  ADD_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_SUCCESS,
} from '../actions/actionTypes';

const categoryReducer = (state = initialState.categories, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES_SUCCESS: {
      let byIds = {};
      let allIds = [];
      const categories = action.payload.categories.map((category) => ({
        id: category.id,
        name: category.name,
      }));
      categories.forEach((category) => {
        allIds.push(category.id);
        byIds[category.id] = {
          ...category,
        };
      });
      return { allIds, byIds };
    }
    case TOGGLE_CONFIRM_DELETE_CATEGORY_MODAL: {
      const { category, isConfirmDeleteCategoryModalOpenned } = action.payload;
      return {
        ...state,
        isConfirmDeleteCategoryModalOpenned,
        selectedCategory: category,
      };
    }
    case TOGGLE_CATEGORY_MODAL: {
      const { category, isCategoryModalOpenned } = action.payload;
      return {
        ...state,
        isCategoryModalOpenned,
        selectedCategory: category,
      };
    }
    case ADD_CATEGORY_SUCCESS: {
      const { isCategoryModalOpenned, category } = action.payload;
      return {
        allIds: [...state.allIds, category.id],
        byIds: {
          ...state.byIds,
          [category.id]: {
            ...category,
          },
        },
        isCategoryModalOpenned,
      };
    }
    case DELETE_CATEGORY_SUCCESS: {
      const { category, isConfirmDeleteCategoryModalOpenned } = action.payload;
      let allIds = [...state.allIds.filter((id) => id !== category.id)];
      let { [category.id]: omit, ...categories } = state.byIds;
      return {
        ...state,
        allIds,
        byIds: {
          ...categories,
        },
        isConfirmDeleteCategoryModalOpenned,
      };
    }
    case UPDATE_CATEGORY_SUCCESS: {
      const { category, isCategoryModalOpenned } = action.payload;
      let byIds = {
        ...state.byIds,
      };
      const oldCategory = byIds[category.id];
      byIds[category.id] = {
        ...oldCategory,
        ...category,
      };
      return {
        ...state,
        byIds,
        isCategoryModalOpenned,
      };
    }
    default:
      return state;
  }
};

export default categoryReducer;
