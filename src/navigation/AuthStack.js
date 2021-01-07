import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NetworkError from '@screens/NetworkError';
import Welcome from '@screens/Welcome';
import ScreenTwo from '@screens/ScreenTwo';
import ScreenThree from '@screens/ScreenThree';
import SignUp from '@screens/SignUp';
import Login from '@screens/Login';

import { HEADER_OPTIONS } from '@constants/navigator';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={HEADER_OPTIONS}
  >
    <Stack.Screen name="NetworkError" component={NetworkError} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
    <Stack.Screen name="ScreenThree" component={ScreenThree} />
  </Stack.Navigator>
);

export default AuthStack;
