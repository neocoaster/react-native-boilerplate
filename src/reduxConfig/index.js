import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import appReducer from '@reducers/appReducer';
import authReducer from '@reducers/authReducer';

import rootSaga from './sagas';

const rootReducer = combineReducers({
  appReducer,
  authReducer,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

rootSaga.map((saga) => sagaMiddleware.run(saga));

export const persistor = persistStore(store);
