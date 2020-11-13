import { combineReducers } from 'redux';
import categories from './categoryReducer';
import items from './itemReducer';

const rootReducer = combineReducers({
  categories,
  items,
});

export default rootReducer;
