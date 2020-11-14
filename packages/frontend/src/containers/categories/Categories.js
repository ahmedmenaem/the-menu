import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryComponent from '../../components/category/Category';
import { loadItems } from '../../redux/actions/itemActions';
import { getUser } from '../../redux/selectors';

const CategoriesComponent = ({
  categories,
  onNewItemClick = () => {},
  onNewCategoryClick = () => {},
  onDeleteItemClick = () => {},
}) => {
  const dispatch = useDispatch();
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(-1);
  const user = useSelector((store) => getUser(store));

  const handleCategoryClicked = (index, category) => {
    const newIndex = activeCategoryIdx === index ? -1 : index;
    dispatch(loadItems(category.id));
    setActiveCategoryIdx(newIndex);
  };

  return (
    <>
      {categories.map((category, index) => (
        <CategoryComponent
          category={category}
          index={index}
          activeCategoryIdx={activeCategoryIdx}
          showActions={user && user.type === 'admin'}
          activeCategoryIdxChange={(index) =>
            handleCategoryClicked(index, category)
          }
          key={category.id}
          onNewCategoryClick={onNewCategoryClick}
          onNewItemClick={() => onNewItemClick(category)}
          onDeleteItemClick={onDeleteItemClick}
        />
      ))}
    </>
  );
};

export default CategoriesComponent;
