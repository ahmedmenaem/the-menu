import { DOC_RROT } from '../constants';
import { handleError, handleResponse } from './apiUtil';

const BASE_URL = `${DOC_RROT}/categories`;

export const getCategories = async () => {
  return fetch(BASE_URL).then(handleResponse).catch(handleError);
};

export const addCategory = async (category) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(category),
    headers: { 'content-type': 'application/json' },
  };
  return fetch(BASE_URL, options).then(handleResponse).catch(handleError);
};

export const deleteCategory = async (category) => {
  const options = {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
  };
  return fetch(`${BASE_URL}/${category.id}`, options)
    .then(handleResponse)
    .catch(handleError);
};

export const updateCategory = async (category) => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(category),
    headers: { 'content-type': 'application/json' },
  };
  return fetch(`${BASE_URL}/${category.id}`, options)
    .then(handleResponse)
    .catch(handleError);
};
