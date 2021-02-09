import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NetworkError from '@screens/NetworkError';
import TabNavigator from './TabNavigator';
import SignUp from '@screens/SignUp';
import Login from '@screens/Login';

import {
  LOGIN_SCREEN,
  SIGN_UP_SCREEN,
  NETWORK_ERROR_SCREEN,
  TAB_NAVIGATOR,
} from '@constants/screens';
import { HEADER_OPTIONS } from '@constants/navigator';

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
    <Stack.Screen name={LOGIN_SCREEN} component={Login} />
    <Stack.Screen name={SIGN_UP_SCREEN} component={SignUp} />
  </Stack.Navigator>
);

export default MainStackNavigator;
