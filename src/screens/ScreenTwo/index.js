import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Button from '@components/Button';
import useSetNavigationOptions from '@hooks/useSetNavigationOptions';

import { SCREEN_THREE_SCREEN } from '@constants/screens';

import styles from './styles';
import { textStyles } from '@constants/styles';

const ScreenTwo = () => {
  useSetNavigationOptions({ headerTitle: 'Screen 2' });

  const route = useRoute();
  const navigation = useNavigation();

  const {
    prop1,
    prop2,
    prop3,
  } = route.params;

  return (
    <View style={styles.container}>
      <Text style={textStyles.title()}>Screen 2</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Prop1: {prop1}</Text>
        <Text style={styles.cardText}>Prop2: {prop2}</Text>
        <Text style={styles.cardText}>Prop3: {prop3}</Text>
      </View>

      <Button
        label="Go to Screen 3"
        onPress={() => navigation.navigate(SCREEN_THREE_SCREEN)}
      />
    </View>
  );
};

export default ScreenTwo;
