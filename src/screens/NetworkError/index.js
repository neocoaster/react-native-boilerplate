import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Button from '../../components/Button';

import styles from './styles';

const NetworkError = ({ navigation }) => {
  const retryConnection = () => {
    navigation.replace('Welcome');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>
        Network Error
      </Text>
      <Text style={styles.retryText}>
        The network connection is lost, please verify your internet connection.
      </Text>
      <Button
        label="Retry"
        onPress={retryConnection}
        customStyles={{
          button: {
            width: 110,
            alignItems: 'center',
          },
        }}
      />
    </View>
  );
};

NetworkError.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default NetworkError;
