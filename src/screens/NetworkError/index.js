import React from 'react';
import { View, Text } from 'react-native';

import Button from '@components/Button';
import useSetNavigationOptions from '@hooks/useSetNavigationOptions';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const NetworkError = () => {
  const navigation = useNavigation();
  useSetNavigationOptions({ headerTitle: 'Network Error' });

  const retryConnection = () => navigation.replace('Welcome');

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
        customStyles={{ button: styles.button }}
      />
    </View>
  );
};

export default NetworkError;
