import React from 'react';
import {
  Text,
  TouchableOpacity,
  ViewPropTypes,
} from 'react-native';
import { string, bool, func, shape } from 'prop-types';

import styles from './styles';

const Button = ({
  label,
  customStyles,
  onPress = () => {},
  disabled = false,
}) => (
  <TouchableOpacity
    style={[styles.buttonContainer, customStyles && customStyles.button, disabled && styles.buttonDisabled]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={[styles.buttonText, customStyles && customStyles.text]}>
      {label}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  label: string.isRequired,
  customStyles: shape({ button: ViewPropTypes.style }),
  onPress: func,
  disabled: bool,
};

export default Button;
