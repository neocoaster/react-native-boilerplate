import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NetworkError from '@screens/NetworkError';
import SignUp from '@screens/SignUp';
import Login from '@screens/Login';

import { HEADER_OPTIONS } from '@constants/navigator';
import {
  LOGIN_SCREEN,
  SIGN_UP_SCREEN,
  NETWORK_ERROR_SCREEN,
} from '@constants/screens';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    initialRouteName={LOGIN_SCREEN}
    screenOptions={HEADER_OPTIONS}
  >
    <Stack.Screen name={NETWORK_ERROR_SCREEN} component={NetworkError} />
    <Stack.Screen name={LOGIN_SCREEN} component={Login} />
    <Stack.Screen name={SIGN_UP_SCREEN} component={SignUp} />
  </Stack.Navigator>
);

export default AuthStack;
