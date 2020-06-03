import axiosClient from './httpClient';

class authServices {
  static signUp = (user) => {
    return axiosClient().post('users', { ...user });
  };

  static signIn = (credentials) => {
    return axiosClient().post('login', { ...credentials });
  };

  // static signOut = () => {
  //   return axiosClient().delete('users/sign_out');
  // };
}

export default authServices;
