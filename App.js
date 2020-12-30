import React, { useEffect } from 'react';
import { StatusBar }  from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';

import { store, persistor } from './src/reduxConfig';

import MainStackNavigator from './src/navigation/MainStackNavigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" />
        <MainStackNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
