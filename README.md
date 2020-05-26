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

[Axios](https://www.npmjs.com/package/axios)
Promise based HTTP client for the browser and node.js

Includes GET and POST endpoints examples. It's recommended to create a new file for each service that you want to use, for example: `postsServices`, `userServices`, `eventsServices`.

[Axios Case Converter](https://www.npmjs.com/package/axios-case-converter)
Axios transformer/interceptor that converts snake_case to camelCase, useful for converting urls from the frontend to valid ones in the backend.

[React Navigation v5.x](https://reactnavigation.org/)
Routing and navigation for your React Native apps

In this repository you can find an example of how to use the Stack Navigator. For this, we are using the `createStackNavigator` method of `@react-navigation/stack` library. This method returns two React components: `Screen` and `Navigator`, which help us configure each component screen.
You can pass several props to the `Navigator` component to configure its behavior, see the [documentation](https://reactnavigation.org/docs/stack-navigator/#props) for more details. Also, the `Screen` component supports an `options` prop to customize navigation options on a per-screen basis.

There are two other types of navigators: [`Tab Navigator`](https://reactnavigation.org/docs/bottom-tab-navigator/) and [`Drawer Navigator`](https://reactnavigation.org/docs/drawer-based-navigation/), to use them you have to call the `createBottomTabNavigator` and `createDrawerNavigator` methods respectively:

```
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
```

Make sure you wrap your navigator with the `NavigationContainer` component, like:

```
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      { /* navigators here */ }
    </NavigationContainer>
  )
};
```

This is a component that manages the navigation tree and contains the navigation state. It provides two important props: [`navigation`](https://reactnavigation.org/docs/navigation-prop/) and [`route`](https://reactnavigation.org/docs/route-prop/) to your screens. The first one, is generally used for navigation between screens, going back, making changes to the route's params, etc. The `route` prop is used to pass params between screens and get their name.
