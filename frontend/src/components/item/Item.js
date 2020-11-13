import { List, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

const ItemComponent = ({ item, onDelete = () => {}, onUpdate = () => {} }) => {
  return (
    <List.Item>
      <List.Content floated="right">
        <Button circular color="red" icon="trash" onClick={onDelete} />
        <Button circular color="teal" icon="edit" onClick={onUpdate} />
      </List.Content>

      <List.Content>
        <List.Header>
          {item.name}
          <span style={{ margin: '0 5px', wordSpacing: '2px' }}>
            {item.price} LE
          </span>
        </List.Header>
        <List.Description>
          {item.description || 'No Description'}
        </List.Description>
      </List.Content>
    </List.Item>
  );
};

export default ItemComponent;
