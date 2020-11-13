import { useState, useEffect } from 'react';
import { Modal, Button, Header, Icon, Form, Message } from 'semantic-ui-react';

const CategoryModalComponent = ({
  open = false,
  title = '',
  category,
  onClose = () => {},
  onSave = () => {},
}) => {
  const [name, setName] = useState(category ? category.name : '');
  const [description, setDescription] = useState(
    category ? category.description : ''
  );
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (category) {
      setDescription(category ? category.description : '');
      setName(category ? category.name : '');
    } else {
      setDescription('');
      setName('');
    }
  }, [category]);

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
              fluid={true}
              label="Name*"
              placeholder="Category name"
              type="text"
              onChange={(e, { value }) => setName(value)}
              value={name}
            />
          </Form.Field>
          <Form.Field>
            <Form.TextArea
              fluid={true}
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
