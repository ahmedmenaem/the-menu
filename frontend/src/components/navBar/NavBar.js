import { useState } from 'react';
import { Container, Menu } from 'semantic-ui-react';

const NavBarComponent = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => setActiveItem(activeItem);

  return (
    // <Container style={{ marginBottom: '15px' }}>
    <Menu pointing secondary>
      <Container>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Container>
    </Menu>
    // </Container>
  );
};

export default NavBarComponent;
