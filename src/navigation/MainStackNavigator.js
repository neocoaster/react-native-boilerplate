import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NetworkError from '@screens/NetworkError';
import Welcome from '@screens/Welcome';
import ScreenTwo from '@screens/ScreenTwo';
import ScreenThree from '@screens/ScreenThree';

import { HEADER_OPTIONS } from '@constants/navigator';

const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Welcome"
    screenOptions={HEADER_OPTIONS}
  >
    <Stack.Screen name="NetworkError" component={NetworkError} />
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
    <Stack.Screen name="ScreenThree" component={ScreenThree} />
  </Stack.Navigator>
);

export default MainStackNavigator;
