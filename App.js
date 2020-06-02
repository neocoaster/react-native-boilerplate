import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';

import { store, persistor } from './src/redux';

import MainStackNavigator from './src/navigation/MainStackNavigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainStackNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
