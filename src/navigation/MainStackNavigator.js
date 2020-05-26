import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenThree from '../screens/ScreenThree';

import { HEADER_BACKGROUND, WHITE } from '../constants/colors';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{
          gestureEnabled: true, // you can enable swipe gestures, but this is not the desired behaviour in Android
          headerStyle: { backgroundColor: HEADER_BACKGROUND },
          headerTitleStyle: { fontWeight: 'bold' },
          headerTintColor: WHITE,
          headerBackTitleVisible: false, // do not show text of the back button
        }}
      >
        <Stack.Screen
          name='Welcome'
          component={Welcome}
          options={{ title: 'Welcome Screen' }}
        />
        <Stack.Screen
          name='ScreenTwo'
          component={ScreenTwo}
          options={({ route }) => ({
            title: route.params.title, // dynamic title using props
          })}
        />
        <Stack.Screen
          name='ScreenThree'
          component={ScreenThree}
          options={{ title: 'Screen 3' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
