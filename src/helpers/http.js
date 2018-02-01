import axios from 'axios';
import { getApiUrl, getEnvironment } from './environment';
import { getCookie } from './cookie';
import { PENDING, SUCCESS, POST, PUT, GET, DELETE } from './reduxconstants';

const API_URL = getApiUrl();

export const logError = (error, type) => {
  if (getEnvironment() === 'development') {
    console.error(`Error type: ${type}.`);
    console.error(error);
  }

  const errorMessage = error && error.response
  ? error.response.data
  : error;

  return Promise.reject(errorMessage);
};

const httpRequest = async (dispatch, requestType = GET, actionType = '', opts = {}) => {
  try {
    dispatch({
      type: actionType,
      meta: { status: PENDING },
    });

    console.log("mantap lah "+API_URL);

    const reqArgs = [`${API_URL}/${opts.endpoint || ''}`];
    if (requestType === POST || requestType === PUT) {
      reqArgs.push(opts.data || {});
    }
    reqArgs.push(
      opts.requiresAuth
        ? { headers: { Authorization: getCookie('token') } }
        : {},
    );

    const response = await axios[requestType](...reqArgs);

    dispatch({
      type: actionType,
      meta: { status: SUCCESS },
      payload: response.data,
    });

    return Promise.resolve(response.data);
  } catch (err) {
    throw err;
  }
};

export const post = (dispatch, type, endpoint, data, requiresAuth) =>
  httpRequest(dispatch, POST, type, { endpoint, data, requiresAuth });

export const put = async (dispatch, type, endpoint, data, requiresAuth) =>
  httpRequest(dispatch, PUT, type, { endpoint, data, requiresAuth });

export const get = async (dispatch, type, endpoint, requiresAuth) =>
  httpRequest(dispatch, GET, type, { endpoint, requiresAuth });

export const del = async (dispatch, type, endpoint, requiresAuth) =>
  httpRequest(dispatch, DELETE, type, { endpoint, requiresAuth });
