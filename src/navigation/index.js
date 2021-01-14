import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NetworkError from '@screens/NetworkError';
import Welcome from '@screens/Welcome';
import ScreenTwo from '@screens/ScreenTwo';
import ScreenThree from '@screens/ScreenThree';
import SignUp from '@screens/SignUp';
import Login from '@screens/Login';

import { navigationRef } from '@navigators/ref';
import { HEADER_OPTIONS } from '@constants/navigator';
import {
  LOGIN_SCREEN,
  SIGN_UP_SCREEN,
  NETWORK_ERROR_SCREEN,
  WELCOME_SCREEN,
  SCREEN_TWO_SCREEN,
  SCREEN_THREE_SCREEN,
} from '@constants/screens';

const Stack = createStackNavigator();

const MainStack = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator
      initialRouteName={WELCOME_SCREEN}
      screenOptions={HEADER_OPTIONS}
    >
      <Stack.Screen name={LOGIN_SCREEN} component={Login} />
      <Stack.Screen name={SIGN_UP_SCREEN} component={SignUp} />
      <Stack.Screen name={NETWORK_ERROR_SCREEN} component={NetworkError} />
      <Stack.Screen name={WELCOME_SCREEN} component={Welcome} />
      <Stack.Screen name={SCREEN_TWO_SCREEN} component={ScreenTwo} />
      <Stack.Screen name={SCREEN_THREE_SCREEN} component={ScreenThree} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStack;
