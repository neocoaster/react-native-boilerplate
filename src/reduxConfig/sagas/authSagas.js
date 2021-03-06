import {
  take,
  call,
  put,
} from 'redux-saga/effects';
import { Alert } from 'react-native';

import navigation from '@navigators/ref';

import { LOGIN_SCREEN } from '@constants/screens';

import authServices from '@services/authServices';
import * as constants from '@reduxConstants';
import * as actions from '@actions/authActions';

function* signUp() {
  while (true) {
    const {
      payload: {
        user,
      },
    } = yield take(constants.SIGN_UP_REQUEST);

    try {
      const { data } = yield call(authServices.signUp, user);

      yield put(actions.signUp(data.user));

      navigation.reset(LOGIN_SCREEN);
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
      },
    } = yield take(constants.SIGN_IN_REQUEST);

    try {
      const { data, headers } = yield call(authServices.signIn, credentials);

      yield put(actions.signIn(headers, data.user));
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
