import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/redux';

import Welcome from './src/screens/Welcome';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Welcome />
      </PersistGate>
    </Provider>
  );
};

export default App;
