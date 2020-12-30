import React, { useEffect } from 'react';
import { Animated, View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-community/async-storage';

import splashLogo from '../../assets/images/neocoast-logo.png';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const AuthLoading = () => {
  const navigation = useNavigation();
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, { toValue: 1, duration: 2500 }).start(async () => {
      const { isConnected } = await NetInfo.fetch();
      const token = await AsyncStorage.getItem('token');

      if (!isConnected) {
        navigation.replace('NetworkError');
      } else if (token !== null) {
        navigation.replace('Welcome');
      } else {
        navigation.replace('Login');
      }
    });
  }, [navigation, opacity]);

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.logo, { opacity }]}
        source={splashLogo}
        resizeMode="contain"
      />
    </View>
  );
};

export default AuthLoading;
