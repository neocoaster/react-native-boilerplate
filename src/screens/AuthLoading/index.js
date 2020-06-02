import React, { useEffect } from 'react';
import { Animated, StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';
import NetInfo from '@react-native-community/netinfo';

import splashLogo from '../../assets/images/neocoast-logo.png';

import styles from './styles';

const AuthLoading = ({ navigation }) => {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, { toValue: 1, duration: 2500 }).start(async () => {
      const { isConnected } = await NetInfo.fetch();

      if (!isConnected) {
        navigation.replace('NetworkError');
      } else {
        navigation.replace('Welcome');
      }
    });
  }, [navigation, opacity]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.background}>
        <Animated.Image
          style={{ ...styles.logo, opacity }}
          source={splashLogo}
          resizeMode="contain"
        />
      </View>
    </>
  );
};

AuthLoading.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default AuthLoading;