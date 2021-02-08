import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '@screens/Welcome';
import ScreenTwo from '@screens/ScreenTwo';
import ScreenThree from '@screens/ScreenThree';

import {
  WELCOME_SCREEN,
  SCREEN_TWO_SCREEN,
  SCREEN_THREE_SCREEN,
} from '@constants/screens';
import { HEADER_OPTIONS } from '@constants/navigator';

const Stack = createStackNavigator();

const WelcomeStack = () => (
  <Stack.Navigator
    initialRouteName={WELCOME_SCREEN}
    screenOptions={HEADER_OPTIONS}
  >
    <Stack.Screen name={WELCOME_SCREEN} component={Welcome} />
    <Stack.Screen name={SCREEN_TWO_SCREEN} component={ScreenTwo} />
    <Stack.Screen name={SCREEN_THREE_SCREEN} component={ScreenThree} />
  </Stack.Navigator>
);

export default WelcomeStack;
