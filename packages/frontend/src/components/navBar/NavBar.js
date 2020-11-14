import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Menu } from 'semantic-ui-react';
import { logout } from '../../redux/actions/authActions';

const NavBarComponent = () => {
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => setActiveItem(activeItem);
  const handleLogOutClick = () => dispatch(logout());

  return (
    <Menu pointing secondary>
      <Container>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item name="logout" onClick={handleLogOutClick} />
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default NavBarComponent;
