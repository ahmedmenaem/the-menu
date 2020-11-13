import { DOC_RROT } from '../constants';
import { handleError, handleResponse } from './apiUtil';

const baseUrl = `${DOC_RROT}/users`;

export const login = async (email, password) => {
  try {
    const endpoint = `${baseUrl}?email=${email}`;
    return fetch(endpoint).then(handleResponse).catch(handleError);
  } catch (ex) {
    throw new Error(ex);
  }
};
