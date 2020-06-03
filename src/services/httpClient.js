import axios from 'axios';
// import applyConverters from 'axios-case-converter';
import env from 'react-native-config';

const axiosClient = () => {
  const client = axios.create({
    baseURL: env.API_BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
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
