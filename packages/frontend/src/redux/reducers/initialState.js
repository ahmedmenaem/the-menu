const state = {
  items: {
    selectedItem: '',
    categoryId: '',
    byCategoryIds: {},
    isConfirmDeleteCategoryModalOpenned: false,
    isItemModalOpenned: false,
  },
  categories: {
    selectedCategory: '',
    allIds: [],
    byIds: {},
    isConfirmDeleteItemModalOpenned: false,
    isCategoryModalOpenned: false,
  },
  auth: {
    userErrorMessage: null,
    user: null,
  },
};

export default state;
