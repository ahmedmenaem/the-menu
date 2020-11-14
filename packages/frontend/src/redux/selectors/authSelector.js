export const getAuthState = (store) => store.auth;

export const getUser = (store) => {
  const user = getAuthState(store).user;
  if (!user) {
    const cachedUser = localStorage.getItem('user');
    if (cachedUser) {
      return JSON.parse(cachedUser);
    }
  }
  return user;
};

export const getUserErrorMessage = (store) =>
  getAuthState(store).userErrorMessage;
