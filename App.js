import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/redux';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView>
          <Text>
            Hello World
          </Text>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
