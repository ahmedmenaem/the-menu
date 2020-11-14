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
} from '../redux/selectors';
import { useSelector } from 'react-redux';

const useMenu = () => {
  const categories = useSelector((store) => getCategories(store));
  const selectedCategory = useSelector((store) => getSelectedCategory(store));
  const selectedItem = useSelector((store) => getSelectedItem(store));
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

  const itemCategoryId = useSelector((store) => getItemCategoryId(store));

  const user = useSelector((store) => getUser(store));

  return {
    categories,
    selectedCategory,
    selectedItem,
    isItemModalOpenned,
    isConfirmDeleteCategoryModalOpened,
    isCategoryModalOpenned,
    isConfirmDeleteItemModalOpened,
    itemCategoryId,
    user,
  };
};

export default useMenu;
