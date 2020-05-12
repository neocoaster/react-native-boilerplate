import axiosClient from './httpClient';

class exampleServices {
  static getExample = () => {
    return axiosClient().get('example');
  };

  static getByIdExample = (id) => {
    return axiosClient().get(`example/${id}`);
  };

  static postExample = (data) => {
    return axiosClient().post('example', { data });
  };
}

export default exampleServices;
