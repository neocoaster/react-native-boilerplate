import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button';
import Input from '../../components/Input';

import * as authActions from '../../redux/authReducer/actions';

import styles from './styles';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const dispatch = useDispatch();

  const handleLoginPress = async () => {
    let submitError = false;
    setErrorText('');

    if (!username) {
      setUsernameError(true);
      setErrorText('Invalid Username');
      submitError = true;
    }

    if (!password) {
      setPasswordError(true);
      setErrorText('Invalid password');
      submitError = true;
    }

    if (!submitError) {
      const credentials = {
        username,
        password,
      };

      await dispatch(authActions.signInRequest(credentials, navigation));
    }
  };

  const checkButtonDisabled = () => {
    return username === '' ||
      password === '';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>

      <Input
        value={username}
        placeholder="Username "
        onChange={(text) => setUsername(text)}
        cleanError={() => setUsernameError(false)}
      />

      <Input
        value={password}
        placeholder="Password"
        onChange={(text) => setPassword(text)}
        cleanError={() => setPasswordError(false)}
        secure={true}
      />

      {
        (usernameError || passwordError) && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              { errorText }
            </Text>
          </View>
        )
      }

      <Button
        label="Login"
        onPress={() => handleLoginPress()}
        customStyles={{
          button: {
            width: 150,
            alignItems: 'center',
          },
        }}
        disabled={checkButtonDisabled()}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text>
          Don&apos;t have an account? Sign Up!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
