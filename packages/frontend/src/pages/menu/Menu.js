import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Card, Button } from 'semantic-ui-react';
import CategoriesComponent from '../../containers/categories/Categories';
import ItemModalComponent from '../../containers/itemModal/ItemModal';
import CategoryModalComponent from '../../containers/categoryModal/CategoryModal';
import ConfirmModalComponent from '../../containers/confirmModal/ConfirmModal';

import {
  getCategories,
  getSelectedItem,
  getIsItemModalopnned,
  getIsConfirmDeleteItemModalOpenned,
  getItemCategoryId,
  getIsCategoryModalopnned,
  getIsConfirmDeleteCategoryModalOpenned,
  getSelectedCategory,
  getUser,
} from '../../redux/selectors';

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

const MenuPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((store) => getCategories(store));
  const selectedItem = useSelector((store) => getSelectedItem(store));
  const selectedCategory = useSelector((store) => getSelectedCategory(store));
  const isItemModalOpenned = useSelector((store) =>
    getIsItemModalopnned(store)
  );
  const isConfirmDeleteItemModalOpened = useSelector((store) =>
    getIsConfirmDeleteItemModalOpenned(store)
  );

  const isCategoryModalOpenned = useSelector((store) =>
    getIsCategoryModalopnned(store)
  );

  const isConfirmDeleteCategoryModalOpened = useSelector((store) =>
    getIsConfirmDeleteCategoryModalOpenned(store)
  );

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(loadCategories());
    }
  }, [dispatch, categories]);

  const itemCategoryId = useSelector((store) => getItemCategoryId(store));

  const user = useSelector((store) => getUser(store));

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
