import axios from 'axios';

export const configureAPI = () => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (error) => {
    if (error.response.status === 403) {
      // TODO dispatch authorization required
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
