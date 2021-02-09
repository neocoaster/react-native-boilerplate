import React from 'react';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { WELCOME_STACK, ACCOUNT_SCREEN } from '@constants/screens';

const TabBarIcon = ({
  routeName,
  focused,
  color,
  size,
}) => {
  let iconName;

  switch (routeName) {
    case WELCOME_STACK:
      iconName = focused ? 'md-cloud' : 'md-cloud-outline';
      break;
    case ACCOUNT_SCREEN:
      iconName = 'barbell';
      break;
    default:
      iconName = 'ios-options';
  }

  return (
    <Ionicons name={iconName} size={size} color={color} />
  );
};

TabBarIcon.propTypes = {
  routeName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
};

export default TabBarIcon;
