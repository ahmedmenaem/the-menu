import { Accordion, Icon, Button } from 'semantic-ui-react';

const AccoridionComponent = ({
  children,
  title = '',
  index,
  activeIndex,
  showActions = false,
  onIndexChange = (idx) => {},
  onUpdate = () => {},
  onDelete = () => {},
}) => {
  return (
    <Accordion styled style={{ width: '100%', margin: '10px 0' }}>
      <Accordion.Title
        index={index}
        active={activeIndex === index}
        onClick={() => onIndexChange(index)}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>
            <Icon name="dropdown" />
            {title}
          </span>
          {showActions ? (
            <Button.Group>
              <Button
                color="red"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete();
                }}
              >
                Delete
              </Button>
              <Button.Or />
              <Button
                color="teal"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdate();
                }}
              >
                Update
              </Button>
            </Button.Group>
          ) : null}
        </div>
      </Accordion.Title>
      <Accordion.Content active={activeIndex === index}>
        {children}
      </Accordion.Content>
    </Accordion>
  );
};

export default AccoridionComponent;
