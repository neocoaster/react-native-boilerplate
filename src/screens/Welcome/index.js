import React from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';
import { RFValue } from 'react-native-responsive-fontsize';

import Button from '../../components/Button';

import * as authActions from '../../redux/authReducer/actions';

import styles from './styles';

const Welcome = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.signOutRequest());

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
        <Text style={styles.text}>
          Welcome
        </Text>

        <Button
          label={`See ${data.title}`}
          onPress={() => navigation.navigate('ScreenTwo',
            {
              ...data, // pass data between routes
            },
          )}
          customStyles={{
            button: {
              alignItems: 'center',
            },
          }}
        />

        <Button
          label="Logout"
          onPress={() => handleLogout()}
          customStyles={{
            button: {
              width: 100,
              alignItems: 'center',
              marginHorizontal: 100,
            },
            text: {
              fontSize: RFValue(16),
            },
          }}
        />
      </View>
    </SafeAreaView>
  );
};

Welcome.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Welcome;
