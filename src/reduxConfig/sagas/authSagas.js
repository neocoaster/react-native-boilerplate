import {
  take,
  call,
  put,
} from 'redux-saga/effects';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import * as constants from '@reduxConstants';
import * as actions from '@actions/authActions';

import authServices from '@services/authServices';

function* signUp() {
  while (true) {
    const {
      payload: {
        user,
        navigation,
      },
    } = yield take(constants.SIGN_UP_REQUEST);

    try {
      const { data } = yield call(authServices.signUp, user);

      yield put(actions.signUp(data.user));

      navigation.replace('Login');
    } catch (error) {
      Alert.alert('Something went wrong...');
    }
  }
}

function* signIn() {
  while (true) {
    const {
      payload: {
        credentials,
        navigation,
      },
    } = yield take(constants.SIGN_IN_REQUEST);

    try {
      const { data, headers } = yield call(authServices.signIn, credentials);

      yield put(actions.signIn(headers, data.user));

      // AsyncStorage.setItem('token', headers.token);
      navigation.replace('Welcome');
    } catch (error) {
      if (error.status === 401) {
        Alert.alert('Invalid credentials');
      }

      Alert.alert('Something went wrong...');
    }
  }
}

function* signOut() {
  while (true) {
    yield take(constants.SIGN_OUT_REQUEST);

    try {
      yield call(authServices.signOut);

      yield put(actions.signOut());

      AsyncStorage.removeItem('token');
    } catch ({ response }) {
      Alert.alert('Something went wrong...');
    }
  }
}

export default [
  signUp,
  signIn,
  signOut,
];
