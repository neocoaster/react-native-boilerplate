import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Button from '@components/Button';
import Input from '@components/Input';
import useSetNavigationOptions from '@hooks/useSetNavigationOptions';

import { SIGN_UP_SCREEN, WELCOME_SCREEN, TAB_NAVIGATOR } from '@constants/screens';

import { signInRequest, setAuthedScreen } from '@actions/authActions';

import styles from './styles';

const Login = () => {
  useSetNavigationOptions({ headerTitle: 'Login' });
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const errorText = 'You must enter username and password';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { token, authedScreen } = useSelector(({ authReducer }) => authReducer.toJS());

  useEffect(() => {
    if (token) {
      if (authedScreen) {
        const { screen, params, stack } = { ...authedScreen };
        dispatch(setAuthedScreen(null));
        navigation.replace(TAB_NAVIGATOR, {
          screen: stack,
          params: {
            screen,
            params,
          },
        });
      } else {
        navigation.replace(TAB_NAVIGATOR, {
          screen: WELCOME_SCREEN,
        });
      }
    }
  }, [token]);

  const handleLoginPress = () => {
    let submitError = false;

    if (!username || (username && !username.trim())) {
      setUsernameError(true);
      submitError = true;
    }

    if (!password || (password && !password.trim())) {
      setPasswordError(true);
      submitError = true;
    }

    if (!submitError) {
      const credentials = {
        username,
        password,
      };

      dispatch(signInRequest(credentials, navigation));
    }
  };

  const disabled = !(username && password);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Input
        value={username}
        placeholder="Username"
        onChange={setUsername}
        cleanError={() => setUsernameError(false)}
        error={usernameError}
      />

      <Input
        value={password}
        placeholder="Password"
        onChange={setPassword}
        cleanError={() => setPasswordError(false)}
        secure={true}
        error={passwordError}
      />

      {
        (usernameError || passwordError) && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              {errorText}
            </Text>
          </View>
        )
      }

      <Button
        label="Login"
        onPress={handleLoginPress}
        customStyles={{ button: styles.button }}
        disabled={disabled}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate(SIGN_UP_SCREEN)}
      >
        <Text>
          Don&apos;t have an account? Sign Up!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
