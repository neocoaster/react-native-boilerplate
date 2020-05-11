import {
  take,
  put,
} from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as constants from './constants';
import * as actions from './actions';

function* fetchData() {
  while (true) {
    yield take(constants.FETCH_DATA);

    try {
      const data = {
        prop1: 'example1',
      };

      yield put(actions.setCurrentUser(data));
    } catch (error) {
      Alert.alert('Something went wrong...', error);
    }
  }
}

export default [
  fetchData,
];
