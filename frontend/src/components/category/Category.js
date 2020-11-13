import { useDispatch } from 'react-redux';
import AccordionComponent from '../accordion/Accordion';
import ItemsComponent from '../../containers/items/Items';
import {
  togglCategoryModal,
  toggleConfirmDeleteCategoryModal,
} from '../../redux/actions/categoryActions';

const CategoryComponent = ({
  category,
  index,
  activeCategoryIdx,
  activeCategoryIdxChange = () => {},
  onNewItemClick = () => {},
  onDeleteItemClick = () => {},
}) => {
  const dispatch = useDispatch();

  return (
    <AccordionComponent
      key={category.id}
      title={category.name}
      index={index}
      activeIndex={activeCategoryIdx}
      onIndexChange={activeCategoryIdxChange}
      onUpdate={() => dispatch(togglCategoryModal(true, category))}
      onDelete={() =>
        dispatch(toggleConfirmDeleteCategoryModal(true, category))
      }
    >
      {activeCategoryIdx !== -1 ? (
        <ItemsComponent
          onNewItemClick={onNewItemClick}
          onDeleteItemClick={onDeleteItemClick}
          categoryId={category.id}
        />
      ) : null}
    </AccordionComponent>
  );
};

export default CategoryComponent;
