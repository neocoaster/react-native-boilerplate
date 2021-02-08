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
3. Create a .env file in the root android directory of the project. You can use the *.env.example* file to know which variables you need.
4. Rename the project with **react-native-rename**
5. Start the app: `yarn start`

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

## Deployment

### Android
The development/production key is used to ensure that you are a developer from the project. The .aab file on the other hand, short for 'Android App Bundle', is used to upload apps to Google Play.

#### Create development/production key
1. `cd android/app`
2.
- if development environment:`keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`
- if production environment `keytool -genkey -v -keystore fc-production.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`

#### Create .aab file

Before creating it, check the following:
- You have the correct development/production key in `android/app`
- Make sure you have the correct configuration set in `android/.env`

**Steps**
1. Run the command `cd android && ./gradlew clean`
2. Go the root of the project and run `react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle`
3. Bump versionCode by one and change versionNumber to suit your needs in `android/app/build.gradle`
4. Run the command `./gradlew bundleRelease` (This creates the aab file)
5. Go to Google Play Console and select the Release method of your preference
6. Create a new release, and drag the new aab file (under android/app/build/outputs/bundle/release) into the build section.
7. Save the build, and then send it to review (this will eliminate the previous version and upload this one)

### iOS
#### Certificates Needed to Upload to TestFlight
- Apple Development (for each Developer that will have access to deploy)
- Apple Distribution (for the App)
- iOS App Provisioning Profile (for the App)

In order to create a certificate we need to create a .cer file is a security file provided by a third party Certificate Authority, used to validate you are who you say you are. Certificates are needed to upload to TestFlight for the same reason.

#### Create a .cer File
- Open your Keychain
- Go to *KeychainAccess/CertificatesAssistant/Solicitar un Certificado de una Autoridad de Certificacion*
- Fill in your name and email, and leave the *CA email* field empty
- Save the file on disk and allow to change the location and hit next
- Select the location where you want the file to be saved

#### Create the certificates:
- Create a .cer file
- Go to developer.apple.com and on the left panel press on **Certificates, IDs & Profiles**.
- Click on the plus sign to create the certificate which best suits your needs with the .cer file you just created
- *Observation*: To create the Provisioning Profile, you need to go to the *Profiles* section and have already created the *Apple Distribution certificate*

#### Deploy to TestFlight (from XCode)
1. Select your target and in the *General* section, update your *Version* and *Build* accordingly
2. In XCode select **Product/Destination/Any iOS device**
3. In XCode select **Product/Archive**
4. In the window that popped up (or go to **Window/Organizer**) select *Distribute App*
5. Select *App Store Connect* then *Upload*, then uncheck both checks and press on *Next*
6. Press on *Automatically Manage Signing* and then Next.
7. In Apple Developer Connect you will notice the build will be uploading. When it finishes uploading, you will need to update a questionnaire (saying if it had any changes from the last time you uploaded a build)

## Navigation
There are several examples of different types of navigations in different branches
#### Branch master
Uses a Stack Navigator [documentation](https://reactnavigation.org/docs/stack-navigator/#props).
Uses an Auth-first navigation flow.

#### Branch master--optional-auth
Uses a simple Stack Navigator [documentation](https://reactnavigation.org/docs/stack-navigator/#props).
Lets you navigate through the app without being authed, but certain features need to be accessed with auth.

### Nested Navigators

#### Branch nested-tab-in-stack
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

### Change Splash Screen
You will notice both OS already have a Splash Screen set, so you just need to change it.

#### Android
- Remove the file `splash_screen` in every **mipmap** folder in `android/app/src/main/res`
- Add your own `splash_screen` files in every different **mipmap** size folder

#### IOS
- Open Xcode and select `[project_name] > [project_name] > Imagex.xcassets`
- In the SplashScreen Image Set, change the images to your project ones.
- Select `[project_name] > [project_name] > LaunchScreen.xib`
- Verify that the new image is correctly centered and adapt it to your needs.

**Tip** When adjusting the image, go to the `Show Size Inspector` on the right drawer and select the *inner arrows* in the **Autoresizing Mask**


### Change Icons

#### Android
go to `android/app/src/main/res` and drag your set of folders with the new icons, you should have a set of `mipmap` folders, one for each resolution. You can create your set here: `https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html`, don't forget to create rounded ones.

#### IOS
Via Xcode, go to the `Images.xcassets`, create a new set of images named `AppIcon` and then drag your folder with the new icons. You can create your set of icons for iOS using: `https://appicon.co/`

## Authentication Flow Integrated with the Node Boilerplate

This app comes with an authentication flow already integrated with our node boilerplate. The methods we provide are: Login, Sign up and Logout. The app does not show the `Welcome` screen if the user is not logged in and has a token stored on the device.

