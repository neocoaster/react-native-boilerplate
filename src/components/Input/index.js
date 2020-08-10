import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Input = ({
  value,
  placeholder,
  onChange,
  containerStyles,
  secure,
  cleanError,
  error,
}) => {
  const handleOnChange = (text) => {
    onChange(text);
    cleanError();
  };

  return (
    <View>
      <TextInput
        style={[styles.input, containerStyles, error && styles.error]}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => handleOnChange(text)}
        secureTextEntry={secure}
        autoCapitalize="none"
      />
    </View>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  containerStyles: PropTypes.object,
  secure: PropTypes.bool,
  cleanError: PropTypes.func,
  error: PropTypes.bool,
};

Input.defaultProps = {
  containerStyles: null,
  secure: false,
  cleanError: () => {},
  error: false,
};

export default Input;
