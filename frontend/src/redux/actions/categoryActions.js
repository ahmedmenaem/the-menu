import * as categoriesApi from '../../api/categories';
import {
  LOAD_CATEGORIES_SUCCESS,
  TOGGLE_CONFIRM_DELETE_CATEGORY_MODAL,
  TOGGLE_CATEGORY_MODAL,
  ADD_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_SUCCESS,
} from './actionTypes';

export const loadCategoriesSuccess = (categories) => ({
  type: LOAD_CATEGORIES_SUCCESS,
  payload: { categories },
});

export const loadCategories = () => {
  return (dispatch) => {
    return categoriesApi
      .getCategories()
      .then((categories) => {
        dispatch(loadCategoriesSuccess(categories));
      })
      .catch((err) => {
        throw Error(err);
      });
  };
};

export const toggleConfirmDeleteCategoryModal = (
  isConfirmDeleteCategoryModalOpenned,
  category
) => ({
  type: TOGGLE_CONFIRM_DELETE_CATEGORY_MODAL,
  payload: {
    isConfirmDeleteCategoryModalOpenned,
    category,
  },
});

export const togglCategoryModal = (isCategoryModalOpenned, category) => ({
  type: TOGGLE_CATEGORY_MODAL,
  payload: {
    isCategoryModalOpenned,
    category,
  },
});

// Add Category Action
export const addCategorySuccess = (category) => ({
  type: ADD_CATEGORY_SUCCESS,
  payload: { category },
});

export const addCategory = (category) => {
  return (dispatch) => {
    return categoriesApi
      .addCategory(category)
      .then((category) => {
        dispatch(addCategorySuccess(category));
        dispatch(togglCategoryModal(false, null));
      })
      .catch((err) => {
        console.error('err', err);
        throw new Error(err);
      });
  };
};

// Delete Category Action
export const deleteCategorySuccess = (category) => ({
  type: DELETE_CATEGORY_SUCCESS,
  payload: {
    category,
    isConfirmDeleteCategoryModalOpenned: false,
  },
});

export const deleteCategory = (category) => {
  console.log('deleteCategory', category);
  return (dispatch) => {
    return categoriesApi
      .deleteCategory(category)
      .then((res) => {
        dispatch(deleteCategorySuccess(category));
      })
      .catch((err) => {
        throw Error(err);
      });
  };
};

export const updateCategorySuccess = (category) => ({
  type: UPDATE_CATEGORY_SUCCESS,
  payload: {
    category,
    isCategoryModalOpenned: false,
  },
});

export const updateCategory = (category) => {
  return (dispatch) => {
    return categoriesApi
      .updateCategory(category)
      .then((category) => {
        dispatch(updateCategorySuccess(category));
      })
      .catch((err) => {
        throw Error(err);
      });
  };
};
