import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import AppReducer from '@reducers';

import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['appReducer, authReducer'],
};

const persistedReducer = persistReducer(persistConfig, AppReducer);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

rootSaga.map((saga) => sagaMiddleware.run(saga));

export const persistor = persistStore(store);
