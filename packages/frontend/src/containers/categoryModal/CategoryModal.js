import { useState, useEffect } from 'react';
import { Modal, Button, Header, Icon, Form, Message } from 'semantic-ui-react';

const CategoryModalComponent = ({
  open = false,
  title = '',
  category,
  onClose = () => {},
  onSave = () => {},
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (category) {
      setCategory(category.name, category.description);
    }
  }, [category]);

  const setCategory = (name = '', description = '') => {
    setName(name);
    setDescription(description);
  };

  const handlSaveClicked = (e) => {
    e.preventDefault();
    if (!name) {
      setErrorMessage('Please enter an category name!');
    } else {
      setErrorMessage('');
      return onSave({
        name,
        description,
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
              label="Name*"
              placeholder="Category name"
              type="text"
              onChange={(e, { value }) => setName(value)}
              value={name}
            />
          </Form.Field>
          <Form.Field>
            <Form.TextArea
              label="Description"
              placeholder="Category Desription"
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

export default CategoryModalComponent;
