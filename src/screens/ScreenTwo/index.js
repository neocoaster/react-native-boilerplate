import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import Button from '../../components/Button';

import styles from './styles';

const ScreenTwo = ({ route, navigation }) => {
  const {
    prop1,
    prop2,
    prop3,
  } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 2</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Prop1: {prop1}</Text>
        <Text style={styles.cardText}>Prop2: {prop2}</Text>
        <Text style={styles.cardText}>Prop3: {prop3}</Text>
      </View>

      <Button
        label="Go to Screen 3"
        onPress={() => navigation.navigate('ScreenThree')}
      />
    </View>
  );
};

ScreenTwo.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default ScreenTwo;
