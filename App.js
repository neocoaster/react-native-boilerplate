import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/redux';

import MainStackNavigator from './src/navigation/MainStackNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainStackNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
