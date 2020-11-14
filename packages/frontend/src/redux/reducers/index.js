import { combineReducers } from 'redux';
import categories from './categoryReducer';
import items from './itemReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  categories,
  items,
  auth,
});

export default rootReducer;
