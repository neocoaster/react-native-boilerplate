import React from 'react';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabBarIcon = ({
  routeName,
  focused,
  color,
  size,
}) => {
  let iconName;

  switch (routeName) {
    case 'Files':
      iconName = focused ? 'md-cloud' : 'md-cloud-outline';
      break;
    case 'Account':
      iconName = 'md-contact';
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
