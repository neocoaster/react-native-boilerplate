import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import * as constants from '@reduxConstants';

const initialState = {
  data: null,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.SET_DATA: {
      return {
        ...state,
        data: payload.data,
      };
    }
    default:
      return state;
  }
};

const appPersistConfig = {
  key: 'app',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

export default persistReducer(appPersistConfig, appReducer);
