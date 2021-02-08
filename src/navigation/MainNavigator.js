import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MAIN_STACK_NAVIGATOR, MAIN_MODAL_STACK } from '@constants/screens';

import MainModalNavigator from './MainModalStack';
import MainStackNavigator from './MainStackNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator mode="modal" headerMode="none">
    <Stack.Screen name={MAIN_STACK_NAVIGATOR} component={MainStackNavigator} />
    <Stack.Screen name={MAIN_MODAL_STACK} component={MainModalNavigator} />
  </Stack.Navigator>
);

export default MainNavigator;
