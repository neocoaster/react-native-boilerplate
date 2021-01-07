import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import MainStackNavigator from '@navigators/MainStackNavigator';
import AuthStack from '@navigators/AuthStack';

import { MAIN_STACK_NAVIGATOR, AUTH_STACK } from '@constants/screens';

const Stack = createStackNavigator();

const InitialStack = () => {
  const token = useSelector(({ authReducer: { token } }) => token);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {token ? (
          <Stack.Screen name={MAIN_STACK_NAVIGATOR} component={MainStackNavigator} />
        ) : (
          <Stack.Screen name={AUTH_STACK} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default InitialStack;
