import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Button = ({ label, customStyles, onPress }) => {
  const buttonStyle = [styles.buttonContainer, customStyles && customStyles.button];
  const textStyle = [styles.buttonText, customStyles && customStyles.text];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
    >
      <Text style={textStyle}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  customStyles: PropTypes.object,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  customStyles: null,
  onPress: () => {},
};

export default Button;
