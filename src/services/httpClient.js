import axios from 'axios';
// import applyConverters from 'axios-case-converter';
import env from 'react-native-config';
import { store } from '../reduxConfig';

const axiosClient = () => {
  const { token } = store.getState().authReducer;

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.token = token;
  }

  const client = axios.create({
    baseURL: env.API_BASE_URL,
    headers,
  });

  client.interceptors.response.use(
    (response) => response,
    ({ response }) => {
      // when there is no connection on the device
      if (!response) {
        throw { errors: ['Connection error'] };
      }

      throw response;
    },
  );

  return client;
};

export default axiosClient;
