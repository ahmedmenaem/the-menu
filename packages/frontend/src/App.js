import 'semantic-ui-css/semantic.min.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider as ReduxProvider, useSelector } from 'react-redux';
import configureStore from './redux/configureStore';
import { Redirect } from 'react-router-dom';
import { getUser } from './redux/selectors';
import LoaderComponent from './components/loader/Loader';

const LoginPage = lazy(() => import('./pages/auth/Login'));
const DashboardPage = lazy(() => import('./pages/dashboard/Dashboard'));

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((store) => getUser(store));
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const store = configureStore();

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <Switch>
          <Suspense fallback={<LoaderComponent />}>
            <Route path="/login" component={LoginPage} />
            <PrivateRoute component={DashboardPage} path="/" exact />
          </Suspense>
        </Switch>
      </Router>
    </ReduxProvider>
  );
}

export default App;
