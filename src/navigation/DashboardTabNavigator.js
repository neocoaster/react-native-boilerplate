import * as React from 'react';
import PropTypes from 'prop-types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Account from 'Screens/Account';
import Files from 'Screens/Files';
import Settings from 'Screens/Settings';

import { ACTIVE_TAB, INACTIVE_TAB } from 'Constants/colors';

import TabBarIcon from 'Components/TabBarIcon';

const Tab = createBottomTabNavigator();

const getHeaderTitle = (route) => {
  // Access the tab navigator's state using `route.state`
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    // Get the currently active route name in the tab navigator
    : route.params?.screen || 'Files';
    // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
    // In our case, it's "Files" as that's the first screen inside the navigator

  switch (routeName) {
    case 'Files':
      return 'My Files';
    case 'Account':
      return 'My Account';
    case 'Settings':
      return 'My Settings';
  }
};

const DashboardTabNavigator = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => ( // eslint-disable-line
          <TabBarIcon
            routeName={route.name}
            focused={focused}
            color={color}
            size={size}
          />
        ),
      })}
      tabBarOptions={{
        activeTintColor: ACTIVE_TAB,
        inactiveTintColor: INACTIVE_TAB,
      }}
    >
      <Tab.Screen name='Account' component={Account} />
      <Tab.Screen name='Files' component={Files} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  );
};

DashboardTabNavigator.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default DashboardTabNavigator;
