import axios from 'axios';
import {requireAuthorization} from './redux/reducer/actions';

export const configureAPI = (dispatch) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (error) => {
    if (error.response.status === 401) {
      history.pushState(null, null, '/login');
      dispatch(requireAuthorization(true));
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
