import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Account from '@screens/Account';
import Settings from '@screens/Settings';
import WelcomeStack from './WelcomeStack';

import { ACTIVE_TAB, INACTIVE_TAB } from '@constants/colors';
import {
  WELCOME_STACK,
  ACCOUNT_SCREEN,
  SETTINGS_SCREEN,
} from '@constants/screens';

import TabBarIcon from '@components/TabBarIcon';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: (props) => <TabBarIcon routeName={route.name} {...props} />,
    })}
    tabBarOptions={{
      activeTintColor: ACTIVE_TAB,
      inactiveTintColor: INACTIVE_TAB,
    }}
  >
    <Stack.Screen name={WELCOME_STACK} component={WelcomeStack} />
    <Tab.Screen name={ACCOUNT_SCREEN} component={Account} />
    <Tab.Screen name={SETTINGS_SCREEN} component={Settings} />
  </Tab.Navigator>
);

export default TabNavigator;
