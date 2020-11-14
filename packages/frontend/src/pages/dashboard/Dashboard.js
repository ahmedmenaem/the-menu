import { Switch, Route } from 'react-router-dom';
import {} from 'semantic-ui-react';
import MenuPage from '../menu/Menu';
import NavBarComponent from '../../components/navBar/NavBar';

const DashboardPage = () => {
  return (
    <>
      <NavBarComponent />
      <Switch>
        <Route exact path="/" component={MenuPage} />
      </Switch>
    </>
  );
};

export default DashboardPage;
