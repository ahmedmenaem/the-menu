import { useState, useEffect } from 'react';
import {
  Modal,
  Button,
  Header,
  Icon,
  Form,
  Message,
  TextArea,
} from 'semantic-ui-react';

const ItemModalComponent = ({
  open = false,
  title = '',
  item = null,
  onClose = () => {},
  onSave = () => {},
}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (item) {
      setItem(item.name, item.price, item.description);
    } else {
      setItem();
    }
  }, [item]);

  const setItem = (name = '', price = '', description = '') => {
    setName(name);
    setDescription(description);
    setPrice(price);
  };

  const handlSaveClicked = (e) => {
    e.preventDefault();
    if (!name) {
      setErrorMessage('Please enter an item name!');
    } else if (!price) {
      setErrorMessage('Please enter an item price!');
    } else {
      setErrorMessage('');
      setItem();
      return onSave({
        name,
        description,
        price,
      });
    }
  };

  return (
    <Modal closeIcon open={open} onClose={onClose}>
      <Header content={title} />
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Name*</label>
            <input
              placeholder="Item Name"
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
            />
          </Form.Field>
          <Form.Field>
            <label>Price*</label>
            <input
              placeholder="Item Price"
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              value={price}
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <TextArea
              placeholder="Item Desription"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </Form.Field>
        </Form>
        {errorMessage ? (
          <Message negative>
            <Message.Header>
              We're sorry we can't apply that operation
            </Message.Header>
            <p>{errorMessage}</p>
          </Message>
        ) : null}
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={onClose}>
          <Icon name="remove" /> Cancel
        </Button>
        <Button color="green" onClick={handlSaveClicked}>
          <Icon name="checkmark" /> Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ItemModalComponent;
