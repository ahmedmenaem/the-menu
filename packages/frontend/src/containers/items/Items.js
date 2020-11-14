import { useDispatch, useSelector } from 'react-redux';
import { List, Card, Button } from 'semantic-ui-react';
import ItemComponent from '../../components/item/Item';
import {
  toggleConfirmDeleteItemModal,
  toggleItemModal,
} from '../../redux/actions/itemActions';
import { getItemsByCategoryId, getUser } from '../../redux/selectors';

const ItemsComponent = ({ categoryId }) => {
  const dispatch = useDispatch();
  const items = useSelector((store) => getItemsByCategoryId(store, categoryId));
  const user = useSelector((store) => getUser(store));

  return (
    <Card style={{ width: '100%' }}>
      <List divided celled verticalAlign="middle">
        {items.map((item) => (
          <ItemComponent
            item={item}
            key={item.id}
            showActions={user && user.type === 'admin'}
            onDelete={() =>
              dispatch(toggleConfirmDeleteItemModal(true, categoryId, item))
            }
            onUpdate={() => dispatch(toggleItemModal(true, categoryId, item))}
          />
        ))}
      </List>
      {user.type === 'admin' ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '10px',
          }}
        >
          <Button
            circular
            primary
            icon="plus"
            onClick={() => dispatch(toggleItemModal(true, categoryId, null))}
          />
        </div>
      ) : null}
    </Card>
  );
};

export default ItemsComponent;
