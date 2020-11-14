import initialState from './initialState';
import {
  USER_LOGGED_IN_SUCCESS,
  USER_LOGGED_OUT_SUCCESS,
  USER_LOGGED_IN_FAILED,
} from '../actions/actionTypes';

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case USER_LOGGED_IN_SUCCESS: {
      const { user } = action.payload;
      return {
        user,
        userErrorMessage: '',
      };
    }
    case USER_LOGGED_IN_FAILED: {
      const { userErrorMessage } = action.payload;
      return {
        ...state,
        userErrorMessage,
      };
    }
    case USER_LOGGED_OUT_SUCCESS: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
