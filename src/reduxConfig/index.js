import {
  createStore,
  combineReducers,
  applyMiddleware,
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

const middlewares = [
  applyMiddleware(sagaMiddleware),
];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

rootSaga.map((saga) => sagaMiddleware.run(saga));

export const persistor = persistStore(store);
