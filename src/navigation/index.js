import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainStackNavigator from '@navigators/MainStackNavigator';
import AuthStack from '@navigators/AuthStack';
import useSession from '@hooks/useSession';

import { navigationRef } from '@navigators/ref';
import { MAIN_STACK_NAVIGATOR, AUTH_STACK } from '@constants/screens';

const Stack = createStackNavigator();

const InitialStack = () => {
  const { isAuthed } = useSession();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        {isAuthed ? (
          <Stack.Screen name={MAIN_STACK_NAVIGATOR} component={MainStackNavigator} />
        ) : (
          <Stack.Screen name={AUTH_STACK} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default InitialStack;
