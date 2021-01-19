import {
  call,
  take,
  put,
} from 'redux-saga/effects';
import { Alert } from 'react-native';

import exampleServices from '@services/exampleServices';
import * as constants from '@reduxConstants';
import * as actions from '@actions/appActions';

function* fetchData() {
  while (true) {
    yield take(constants.FETCH_DATA);

    try {
      const data = yield call(exampleServices.getExample);

      yield put(actions.setData(data));
    } catch (error) {
      Alert.alert('Something went wrong...', error);
    }
  }
}

export default [
  fetchData,
];
