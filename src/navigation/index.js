import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainNavigator from '@navigators/MainNavigator';

import { navigationRef } from '@navigators/ref';
import { MAIN_NAVIGATOR } from '@constants/screens';

const Stack = createStackNavigator();

const InitialStack = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={MAIN_NAVIGATOR} component={MainNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default InitialStack;
