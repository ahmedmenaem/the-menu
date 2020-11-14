import {
  USER_LOGGED_IN_SUCCESS,
  USER_LOGGED_OUT_SUCCESS,
  USER_LOGGED_IN_FAILED,
} from './actionTypes';
import * as usersApi from '../../api/users';

export const userLoggedInSuccess = (user) => ({
  type: USER_LOGGED_IN_SUCCESS,
  payload: {
    user,
  },
});

export const userLoggedInFailed = (userErrorMessage) => ({
  type: USER_LOGGED_IN_FAILED,
  payload: {
    userErrorMessage,
  },
});

export const login = (email, password) => {
  return (dispatch) => {
    return usersApi
      .login(email, password)
      .then((res) => {
        const user = res[0];
        if (user) {
          const { email, username, type } = user;
          localStorage.setItem(
            'user',
            JSON.stringify({ email, username, type })
          );
          dispatch(userLoggedInSuccess({ email, username, type }));
        } else {
          dispatch(userLoggedInFailed('Wrong email or password!'));
        }
      })
      .catch((err) => {
        throw Error(err);
      });
  };
};

export const userLoggedOutSuccess = () => ({
  type: USER_LOGGED_OUT_SUCCESS,
});

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('user');
    dispatch(userLoggedOutSuccess());
  };
};
