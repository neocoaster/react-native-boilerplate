import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '@components/Button';
import useSetNavigationOptions from '@hooks/useSetNavigationOptions';

import useSession from '@hooks/useSession';
import { textStyles } from '@constants/styles';
import { WELCOME_SCREEN } from '@constants/screens';

import styles from './styles';

const ScreenThree = () => {
  useSetNavigationOptions({ headerTitle: 'Screen 3' });
  const navigation = useNavigation();

  const { checkAuth } = useSession();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={textStyles.title(24)}>Screen 3</Text>
      <Button
        label="Go To Welcome Screen"
        onPress={() => navigation.navigate(WELCOME_SCREEN)}
      />
    </View>
  );
};

export default ScreenThree;
