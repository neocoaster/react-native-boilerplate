import React from 'react';
import { TextInput, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Input = ({
  value,
  placeholder,
  onChange,
  containerStyles ={},
  secure = false,
  cleanError = () => {},
  error = false,
}) => {
  const handleOnChange = (text) => {
    onChange(text);
    cleanError();
  };

  return (
    <TextInput
      style={[styles.input, containerStyles, error && styles.error]}
      placeholder={placeholder}
      value={value}
      onChangeText={handleOnChange}
      secureTextEntry={secure}
      autoCapitalize="none"
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  containerStyles: ViewPropTypes.style,
  secure: PropTypes.bool,
  cleanError: PropTypes.func,
  error: PropTypes.bool,
};

export default Input;
