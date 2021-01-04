import React from 'react';
import { View, Text } from 'react-native';

import Button from '@components/Button';
import useSetNavigationOptions from '@hooks/useSetNavigationOptions';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { textStyles } from '@constants/styles';

const ScreenThree = () => {
  useSetNavigationOptions({ headerTitle: 'Screen 3' });
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={textStyles.title(24)}>Screen 3</Text>
      <Button
        label="Go To Welcome Screen"
        onPress={navigation.popToTop}
      />
    </View>
  );
};

export default ScreenThree;
