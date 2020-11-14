import { Modal, Button, Header, Icon } from 'semantic-ui-react';

const ConfirmModalComponent = ({
  open,
  title,
  message,
  onClose = () => {},
  onSave = () => {},
}) => {
  return (
    <Modal closeIcon open={open} onClose={onClose}>
      <Header content={title} />
      <Modal.Content>
        <h1>{message}</h1>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={onClose}>
          <Icon name="remove" /> Cancel
        </Button>
        <Button color="green" onClick={onSave}>
          <Icon name="checkmark" /> Confirm
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ConfirmModalComponent;
