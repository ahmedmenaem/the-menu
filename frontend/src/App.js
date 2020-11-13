import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from './pages/auth/Login';
import DashboardPage from './pages/dashboard/Dashboard';
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';

const store = configureStore();

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={DashboardPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </ReduxProvider>
  );
}

export default App;
