export const getCategoriesState = (store) => store.categories;
export const getCategoriesList = (store) =>
  getCategoriesState(store) ? getCategoriesState(store).allIds : [];

export const getCategoryById = (store, id) =>
  getCategoriesState(store) ? { ...getCategoriesState(store).byIds[id] } : {};

export const getCategories = (store) =>
  getCategoriesList(store).map((id) => getCategoryById(store, id));

export const getIsCategoryModalopnned = (store) =>
  getCategoriesState(store).isCategoryModalOpenned;

export const getIsConfirmDeleteCategoryModalOpenned = (store) =>
  getCategoriesState(store).isConfirmDeleteCategoryModalOpenned;

export const getSelectedCategory = (store) =>
  getCategoriesState(store).selectedCategory;
