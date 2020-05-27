import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Files = ({ route }) => {
  const {
    user,
  } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Files of</Text>
      <Text style={styles.userText}> {user}</Text>
    </View>
  );
};

Files.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Files;
