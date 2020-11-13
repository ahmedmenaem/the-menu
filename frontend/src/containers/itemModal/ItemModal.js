import { useState, useEffect } from 'react';
import { Modal, Button, Header, Icon, Form, Message } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

const ItemModalComponent = ({
  open = false,
  title = '',
  item = null,
  onClose = () => {},
  onSave = () => {},
}) => {
  const [name, setName] = useState(item ? item.name : '');
  const [description, setDescription] = useState(item ? item.description : '');
  const [price, setPrice] = useState(item ? item.price : null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (item) {
      setPrice(item ? item.price : null);
      setDescription(item ? item.description : '');
      setName(item ? item.name : '');
    } else {
      setPrice(null);
      setDescription('');
      setName('');
    }
  }, [item]);

  const handlSaveClicked = (e) => {
    e.preventDefault();
    if (!name) {
      setErrorMessage('Please enter an item name!');
    } else if (!price) {
      setErrorMessage('Please enter an item price!');
    } else {
      setErrorMessage('');
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
            <Form.Input
              fluid={true}
              label="Name*"
              placeholder="Item name"
              type="text"
              onChange={(e, { value }) => setName(value)}
              value={name}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              fluid={true}
              label="Price*"
              placeholder="Item price"
              type="number"
              onChange={(e, { value }) => setPrice(value)}
              value={price}
            />
          </Form.Field>
          <Form.Field>
            <Form.TextArea
              fluid={true}
              label="Description"
              placeholder="Item Desription"
              type="text"
              onChange={(e, { value }) => setDescription(value)}
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
