import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NetworkError from '@screens/NetworkError';
import Welcome from '@screens/Welcome';
import ScreenTwo from '@screens/ScreenTwo';
import ScreenThree from '@screens/ScreenThree';
import DashboardTabNavigator from './DashboardTabNavigator';

import { HEADER_OPTIONS } from '@constants/navigator';
import {
  NETWORK_ERROR_SCREEN,
  WELCOME_SCREEN,
  SCREEN_TWO_SCREEN,
  SCREEN_THREE_SCREEN,
} from '@constants/screens';

const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <Stack.Navigator
    initialRouteName={WELCOME_SCREEN}
    screenOptions={HEADER_OPTIONS}
  >
    <Stack.Screen name={NETWORK_ERROR_SCREEN} component={NetworkError} />
    <Stack.Screen name={WELCOME_SCREEN} component={Welcome} />
    <Stack.Screen name={SCREEN_TWO_SCREEN} component={ScreenTwo} />
    <Stack.Screen name={SCREEN_THREE_SCREEN} component={ScreenThree} />
    <Stack.Screen
      name='Dashboard'
      component={DashboardTabNavigator}
      options={{ title: 'Dashboard' }}
    />
  </Stack.Navigator>
);

export default MainStackNavigator;
