import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthLoading from '../screens/AuthLoading';
import NetworkError from '../screens/NetworkError';
import Welcome from '../screens/Welcome';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenThree from '../screens/ScreenThree';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';

import { HEADER_OPTIONS } from '../constants/navigator';

const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="AuthLoading" screenOptions={HEADER_OPTIONS}>
      <Stack.Screen
        name="AuthLoading"
        component={AuthLoading}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="NetworkError" component={NetworkError} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      <Stack.Screen name="ScreenThree" component={ScreenThree} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
