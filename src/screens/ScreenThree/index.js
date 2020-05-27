import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Button from 'Components/Button';

import styles from './styles';

const ScreenThree = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 3</Text>
      <Button
        label="Go To Welcome Screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

ScreenThree.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ScreenThree;
