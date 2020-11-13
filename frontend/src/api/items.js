import { Item } from 'semantic-ui-react';
import { DOC_RROT } from '../constants';
import { handleError, handleResponse } from './apiUtil';

const BASE_URI = `${DOC_RROT}/items`;

export const getItems = async (categoryId) => {
  return fetch(`${BASE_URI}?categoryId=${categoryId}`)
    .then(handleResponse)
    .catch(handleError);
};

export const addItem = async (categoryId, item) => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      categoryId,
      ...item,
    }),
  };
  return fetch(BASE_URI, options)
    .then((res) => {
      return handleResponse(res);
    })
    .catch((err) => {
      return handleError(err);
    });
};

export const deleteItem = async (item) => {
  const options = {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
  };
  return fetch(`${BASE_URI}/${item.id}`, options)
    .then((res) => {
      return handleResponse(res);
    })
    .catch((err) => {
      console.log(err);
      return handleError(err);
    });
};

export const updateItem = async (item) => {
  const options = {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(item),
  };
  return fetch(`${BASE_URI}/${item.id}`, options)
    .then((res) => {
      return handleResponse(res);
    })
    .catch((err) => {
      console.log(err);
      return handleError(err);
    });
};
