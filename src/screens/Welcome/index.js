import React from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';

import Button from '../../components/Button';
import useSetNavigationOptions from '@hooks/useSetNavigationOptions';

import navigation from '@navigators/ref';

import { signOutRequest } from '@actions/authActions';

import styles from './styles';

const Welcome = () => {
  useSetNavigationOptions({
    headerTitle: 'Welcome Screen',
    headerLeft: null,
  });
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signOutRequest());

    navigation.replace('Login');
  };

  const data = {
    title: 'Props Details',
    prop1: 'Prop 1 Text',
    prop2: 'Prop 2 Text',
    prop3: 'Prop 3 Text',
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Welcome
        </Text>

        <Button
          label={`See ${data.title}`}
          onPress={() => navigation.navigate('ScreenTwo', data,
          )}
          customStyles={{
            button: styles.screen2Button,
          }}
        />

        <Button
          label="Logout"
          onPress={handleLogout}
          customStyles={{
            button: styles.logoutButton,
            text: styles.logoutText,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
