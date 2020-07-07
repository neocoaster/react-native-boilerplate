# react-native-boilerplate
React Native boilerplate that can be used to start a new mobile application.

# Content
- **[Redux](https://redux.js.org/)**
Redux is a predictable state container for JavaScript apps.

- **[Redux Persistor](https://github.com/rt2zz/redux-persist)**
Persist and rehydrate a redux store.

Tip: If you don’t want to persist a part of your state you could put it in the blacklist. The blacklist is added into the config object that we used when setting up our `PersistReducer`, it takes an array of strings, each string must match a part of state that is managed by the reducer you passed to `persistReducer`.

***Example:***
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

***Example:***
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

- **[Redux Sagas](https://redux-saga.js.org/)**
Library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

- **[Eslint](https://eslint.org/)**
Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

- **[Axios](https://www.npmjs.com/package/axios)**
Promise based HTTP client for the browser and node.js

Includes GET and POST endpoints examples. It's recommended to create a new file for each service that you want to use, for example: `postsServices`, `userServices`, `eventsServices`.

- **[Axios Case Converter](https://www.npmjs.com/package/axios-case-converter)**
Axios transformer/interceptor that converts snake_case to camelCase, useful for converting urls from the frontend to valid ones in the backend.

- **[password-validator](https://www.npmjs.com/package/password-validator)**
Used to validate the password on the authentication flow.

- **[react-native-responsive-fontsize](https://www.npmjs.com/package/react-native-responsive-fontsize)**
Makes font sizes responsive.

- **[React Navigation v5.x](https://reactnavigation.org/)**
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

***Nesting Navigators***

In the branch `nesting-navigators` you can find an example of a tab navigator nested inside a stack navigator:

- Stack.Navigator
  - Screen 1 (Screen)
  - Screen 2 (Screen)
  - Screen 3 (Screen)
  - Dashboard (Tab.Navigator)
    - Account (Screen)
    - Files
    - Settings

You can find the code for creating the new Tab Navigator on the `navigation/DashboardTabNavigator.js`, here we create three new screens for the Dashboard: `Account`, `Files` and `Settings`. The screens will show up on the app starting on the left in the same order that they appear in the code.

To navigate to a screen in a nested navigator we use:

```
navigation.navigate('Dashboard');
```

And the initial screen inside the `Dashboard` component is shown, in this case `Account`. To navigate to a specific screen, you pass the name of the screen in params:

```
navigation.navigate('Dashboard', { screen: 'Files' });
```

Now, the `Files` screen will be rendered instead of `Account` upon navigation.
You can follow a similar approach for deeply nested screens:

```
navigation.navigate('Dashboard', {
  screen: 'Files',
  params: {
    screen: 'Sound',
    params: {
      screen: 'Media',
    },
  },
});
```

In the above case, you're navigating to the Media screen, which is in a navigator nested inside the Sound screen, which is in a navigator nested inside the Files screen.

Here you can found more information about [good practices](https://reactnavigation.org/docs/nesting-navigators/#best-practices-when-nesting) when nesting navigators.

- **Splash Screnn and Icons**

The app already has a splash screen configured, as well as a set of icons for iOS and Android.

If you need to change the included icons you should do the following:
- iOS: via Xcode, go to the `Images.xcassets`, create a new set of images named `AppIcon` and then drag your folder with the new icons. You can create your set of icons for iOS using: `https://appicon.co/`
- Android: go to `android/app/src/main/res` and drag your set of folders with the new icons, you should have a set of `mipmap` folders, one for each resolution. You can create your set here: `https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html`, don't forget to create rounded ones. 


# Authentication Flow Integrated with the Node Boilerplate

This app comes with an authentication flow already integrated with our node boilerplate. The methods we provide are: Login, Sign up and Logout. The app does not show the `Welcome` screen if the user is not logged in and has a token stored on the device.

