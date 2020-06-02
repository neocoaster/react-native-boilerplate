import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';

import Button from '../../components/Button';

import { fetchData } from '../../redux/appReducer/actions';

import styles from './styles';

const Welcome = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

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
        />
      </View>
    </SafeAreaView>
  );
};

Welcome.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Welcome;
