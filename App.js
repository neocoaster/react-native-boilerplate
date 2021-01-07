import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';

import { store, persistor } from './src/reduxConfig';

import InitialStack from '@navigators';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <PersistGate persistor={persistor}>
        <InitialStack />
      </PersistGate>
    </Provider>
  );
};

export default App;
