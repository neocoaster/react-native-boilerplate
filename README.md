# react-native-boilerplate
React Native boilerplate that can be used to start a new mobile application.

# Content
[Redux](https://redux.js.org/)
Redux is a predictable state container for JavaScript apps.

[Redux Persistor](https://github.com/rt2zz/redux-persist)
Persist and rehydrate a redux store.

Tip: If you don’t want to persist a part of your state you could put it in the blacklist. The blacklist is added into the config object that we used when setting up our `PersistReducer`, it takes an array of strings, each string must match a part of state that is managed by the reducer you passed to `persistReducer`.

Example:
```
const rootReducer = combineReducers({ 
  app: appReducer,
  posts: postsReducer
});

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['posts']
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
```

Also, you can add a single property to the blacklist.

Example:
```
// appReducer.js
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  data: null,
};

const appReducer = (state = initialState, { type, payload }) => {
  // implementation code
};

const persistConfig = {
  key: 'app',
  storage: AsyncStorage,
  blacklist: ['data']
};

export default persistReducer(persistConfig, appReducer);

```

[Redux Sagas](https://redux-saga.js.org/)
Library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

[Eslint](https://eslint.org/)
Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
  