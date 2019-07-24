import axios from 'axios';
import {requireAuthorization} from './redux/reducer/actions.js';

export const configureAPI = (dispatch) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (error) => {
    // в заданиях завязано на 403, но логичнее 401
    if (error.response.status === 401 || error.response.status === 403) {
      history.pushState(null, null, `/login`);
      dispatch(requireAuthorization(true));
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
