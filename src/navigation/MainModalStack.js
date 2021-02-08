import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainModalStack = () => (
  <Stack.Navigator mode="modal" headerMode="none">
    {/* Screens that require a modal navigation go here */}
  </Stack.Navigator>
);

export default MainModalStack;
