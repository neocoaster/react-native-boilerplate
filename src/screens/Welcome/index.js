import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';

import { fetchData } from '../../redux/appReducer/actions';

const Welcome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>
          Welcome!!!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
