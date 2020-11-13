import { Switch, Route } from 'react-router-dom';
import {} from 'semantic-ui-react';
import MenuPage from '../menu/Menu';

const DashboardPage = () => {
  return (
    <Switch>
      <Route exact path="/" component={MenuPage} />
    </Switch>
  );
};

export default DashboardPage;
