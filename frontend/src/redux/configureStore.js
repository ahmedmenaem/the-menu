import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './reducers';

const configureStore = (initialState) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware =
    process.env.NODE_ENV !== 'production'
      ? [reduxImmutableStateInvariant(), thunk]
      : [thunk];
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
};

export default configureStore;
