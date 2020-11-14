import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Card, Button } from 'semantic-ui-react';
import CategoriesComponent from '../../containers/categories/Categories';
import ItemModalComponent from '../../containers/itemModal/ItemModal';
import CategoryModalComponent from '../../containers/categoryModal/CategoryModal';
import ConfirmModalComponent from '../../containers/confirmModal/ConfirmModal';

import {
  loadCategories,
  toggleConfirmDeleteCategoryModal,
  togglCategoryModal,
  addCategory,
  deleteCategory,
  updateCategory,
} from '../../redux/actions/categoryActions';

import {
  toggleConfirmDeleteItemModal,
  toggleItemModal,
  addItem,
  deleteItem,
  updateItem,
} from '../../redux/actions/itemActions';

import useMenu from '../../hooks/useMenu';

const MenuPage = () => {
  const dispatch = useDispatch();
  const {
    categories,
    selectedCategory,
    selectedItem,
    isItemModalOpenned,
    isConfirmDeleteItemModalOpened,
    isConfirmDeleteCategoryModalOpened,
    isCategoryModalOpenned,
    itemCategoryId,
    user,
  } = useMenu();

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(loadCategories());
    }
  }, [dispatch, categories]);

  const handleOnItemSaveClicked = (item) => {
    if (selectedItem) {
      return dispatch(
        updateItem({
          ...selectedItem,
          ...item,
        })
      );
    }
    return dispatch(addItem(itemCategoryId, item));
  };

  const handleDeleteItemClicked = () => dispatch(deleteItem(selectedItem));

  const handleSaveCategoryClicked = (category) => {
    if (selectedCategory) {
      return dispatch(
        updateCategory({
          ...selectedCategory,
          ...category,
        })
      );
    }
    return dispatch(addCategory(category));
  };

  const handleDeleteCategoryClicked = () => {
    dispatch(deleteCategory(selectedCategory));
  };

  return (
    <>
      <Container>
        <Card style={{ width: '100%' }}>
          <Card.Content>
            <Card.Header>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                The Menu
                {user && user.type === 'admin' ? (
                  <Button
                    circular
                    primary
                    icon="plus"
                    onClick={() => dispatch(togglCategoryModal(true))}
                  />
                ) : null}
              </div>
            </Card.Header>
          </Card.Content>

          <Card.Content>
            {categories && categories.length ? (
              <CategoriesComponent categories={categories} />
            ) : (
              'No Categories to display!'
            )}
          </Card.Content>
        </Card>
        <ItemModalComponent
          open={isItemModalOpenned}
          title={selectedItem ? 'update Item' : 'New Item'}
          item={selectedItem}
          onClose={() => dispatch(toggleItemModal(false))}
          onSave={handleOnItemSaveClicked}
        />
        {isCategoryModalOpenned ? (
          <CategoryModalComponent
            open={isCategoryModalOpenned}
            title={selectedCategory ? 'Update Category' : 'New Category'}
            category={selectedCategory}
            onClose={() => dispatch(togglCategoryModal(false))}
            onSave={handleSaveCategoryClicked}
          />
        ) : null}
        {isConfirmDeleteItemModalOpened ? (
          <ConfirmModalComponent
            open={isConfirmDeleteItemModalOpened}
            title="Delete Item"
            message="Are you sure to delete the item?"
            onClose={() => dispatch(toggleConfirmDeleteItemModal(false, null))}
            onSave={handleDeleteItemClicked}
          />
        ) : null}
        {isConfirmDeleteCategoryModalOpened ? (
          <ConfirmModalComponent
            open={isConfirmDeleteCategoryModalOpened}
            title="Delete Category"
            message="Are you sure to delete the category?"
            onClose={() =>
              dispatch(toggleConfirmDeleteCategoryModal(false, null))
            }
            onSave={handleDeleteCategoryClicked}
          />
        ) : null}
      </Container>
    </>
  );
};

export default MenuPage;
