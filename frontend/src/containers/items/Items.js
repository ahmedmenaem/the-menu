import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Card, Button } from 'semantic-ui-react';
import ItemComponent from '../../components/item/Item';
import {
  loadItems,
  toggleConfirmDeleteItemModal,
  toggleItemModal,
} from '../../redux/actions/itemActions';
import { getItemsByCategoryId } from '../../redux/selectors';

const ItemsComponent = ({ categoryId }) => {
  const dispatch = useDispatch();
  const items = useSelector((store) => getItemsByCategoryId(store, categoryId));

  return (
    <Card style={{ width: '100%' }}>
      <List divided celled verticalAlign="middle">
        {items.map((item) => (
          <ItemComponent
            item={item}
            key={item.key}
            onDelete={() =>
              dispatch(toggleConfirmDeleteItemModal(true, categoryId, item))
            }
            onUpdate={() => dispatch(toggleItemModal(true, categoryId, item))}
          />
        ))}
      </List>
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}
      >
        <Button
          circular
          primary
          icon="plus"
          onClick={() => dispatch(toggleItemModal(true, categoryId, null))}
        />
      </div>
    </Card>
  );
};

export default ItemsComponent;
