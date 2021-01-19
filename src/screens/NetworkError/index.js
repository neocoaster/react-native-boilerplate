import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '@components/Button';
import useSetNavigationOptions from '@hooks/useSetNavigationOptions';

import { WELCOME_SCREEN } from '@constants/screens';

import styles from './styles';

const NetworkError = () => {
  const navigation = useNavigation();
  useSetNavigationOptions({ headerTitle: 'Network Error' });

  const retryConnection = () => navigation.replace(WELCOME_SCREEN);

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
