import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NetworkError from '@screens/NetworkError';
import TabNavigator from './TabNavigator';

import { HEADER_OPTIONS } from '@constants/navigator';
import {
  NETWORK_ERROR_SCREEN,
  TAB_NAVIGATOR,
} from '@constants/screens';

const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <Stack.Navigator
    initialRouteName={TabNavigator}
    screenOptions={{ ...HEADER_OPTIONS, headerShown: false }}
  >
    <Stack.Screen
      name={TAB_NAVIGATOR}
      component={TabNavigator}
    />
    <Stack.Screen name={NETWORK_ERROR_SCREEN} component={NetworkError} />
  </Stack.Navigator>
);

export default MainStackNavigator;
