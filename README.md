# react-native-boilerplate
React Native boilerplate that can be used to start a new mobile application.

## Content
- **[Redux](https://redux.js.org/)**
Redux is a predictable state container for JavaScript apps.

- **[Redux Persistor](https://github.com/rt2zz/redux-persist)**
Persist and rehydrate a redux store.

- **[Redux Sagas](https://redux-saga.js.org/)**
Library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

- **[Eslint](https://eslint.org/)**
Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

- **[Prettier](https://eslint.org/)**
An opinionated code formatter supported by many languages.

- **[Axios](https://www.npmjs.com/package/axios)**
Promise based HTTP client for the browser and node.js. Includes GET and POST endpoints examples.

- **[Axios Case Converter](https://www.npmjs.com/package/axios-case-converter)**
Axios transformer/interceptor that converts snake_case to camelCase.

- **[password-validator](https://www.npmjs.com/package/password-validator)**
Used to validate the password on the authentication flow.

- **[React Navigation v5.x](https://reactnavigation.org/)**
Routing and navigation for your React Native apps

- **[React Native Rename](https://www.npmjs.com/package/react-native-rename)**
Rename react-native app with just one command

- **[Neox](https://github.com/NeoCoast/Neox)**
Makes redux state immutable

- **[Redux Logger](https://github.com/LogRocket/redux-logger)**
Production Redux logging tool that lets you replay problems as if they happened in your own browser.

## Commands

1. **Start the app**: `yarn run android` or `yarn run ios`
2. **Start metro bundler**: `yarn start`
3. **Lint the app**: `yarn run lint`
4. **Test the app**: `yarn run test`
5. **Clean the app**: `yarn run clean`

## Getting Started
1. Install dependencies: `yarn install`
2. Create a .env file in the root directory of the project. You can use the *.env.example* file to know which variables you need.
3. Rename the project with **react-native-rename**
4. Start the app: `yarn start`

### Android
Create a debug key in `android/app` with the command:
```
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```

### iOS
Run the following comman inside the **ios** folder:
```
pod install
```

**Command to rename the app:** `npx react-native-rename <newName> -b <bundleIdentifier>`  
**Note:** After renaming the app you need to clean every **build folder** and remove **node_modules**

## Deployment [TO DO]

## Navigation
There are several examples of different types of navigations in different branches
#### Branch master
Uses a Stack Navigator [documentation](https://reactnavigation.org/docs/stack-navigator/#props).
Uses an Auth-first navigation flow.

#### Branch master--optional-auth
Uses a simple Stack Navigator [documentation](https://reactnavigation.org/docs/stack-navigator/#props).
Lets you navigate through the app without being authed, but certain features need to be accessed with auth.
As an example of an authed screen you can see ScreenThree.

### Nested Navigators

#### Branch nested-tab-in-stack [TO DO]
Uses a Tab Navigator nested in a Stack Navigator [documentation](https://reactnavigation.org/docs/bottom-tab-navigator) [documentation] (https://reactnavigation.org/docs/nesting-navigators/).
Uses an Auth-first navigation flow.

#### Branch nested-tab-in-stack--optional-auth [TO DO]
Uses a Tab Navigator nested in a Stack Navigator [documentation](https://reactnavigation.org/docs/bottom-tab-navigator) [documentation] (https://reactnavigation.org/docs/nesting-navigators/).
Lets you navigate through the app without being authed, but certain features need to be accessed with auth.

***Nesting Navigators [Future nested-tab-in-stack branch]***

In the branch `nesting-navigators` you can find an example of a tab navigator nested inside a stack navigator:

- Stack.Navigator
  - Screen 1 (Screen)
  - Screen 2 (Screen)
  - Screen 3 (Screen)
  - Dashboard (Tab.Navigator)
    - Account (Screen)
    - Files
    - Settings

Good practices when nesting navigators [good practices](https://reactnavigation.org/docs/nesting-navigators/#best-practices-when-nesting)

- **Splash Screnn and Icons**

### Change Splash Screen  [TO DO]

#### Android
#### IOS

### Change Icons

#### Android
go to `android/app/src/main/res` and drag your set of folders with the new icons, you should have a set of `mipmap` folders, one for each resolution. You can create your set here: `https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html`, don't forget to create rounded ones.

#### IOS
Via Xcode, go to the `Images.xcassets`, create a new set of images named `AppIcon` and then drag your folder with the new icons. You can create your set of icons for iOS using: `https://appicon.co/`

## Authentication Flow Integrated with the Node Boilerplate

This app comes with an authentication flow already integrated with our node boilerplate. The methods we provide are: Login, Sign up and Logout. The app does not show the `Welcome` screen if the user is not logged in and has a token stored on the device.

