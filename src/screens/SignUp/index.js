import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import useSetNavigationOptions from '../../hooks/useSetNavigationOptions';
import Button from '@components/Button';
import Input from '@components/Input';

import { LOGIN_SCREEN } from '@constants/screens';
import { signUpRequest } from '@actions/authActions';

import {
  checkConfirmationPassword,
  validateEmail,
  validatePassword,
} from '../../helpers';

import styles from './styles';

const SignUp = () => {
  const navigation = useNavigation();
  useSetNavigationOptions({ headerTitle: 'Sign Up' });

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmationError, setPasswordConfirmationError] = useState(false);
  const [errorText, setErrorText] = useState([]);

  const dispatch = useDispatch();

  const handleSignUpPress = () => {
    let submitError = false;
    let newTextErrors = [];

    if (!username) {
      setUsernameError(true);
      newTextErrors = ['Must enter a username'];
      submitError = true;
    }

    if (!validateEmail(email)) {
      setEmailError(true);
      newTextErrors = [ ...newTextErrors, 'Invalid Email'];
      submitError = true;
    }

    if (!checkConfirmationPassword(password, passwordConfirmation)) {
      setPasswordConfirmationError(true);
      newTextErrors = [ ...newTextErrors, 'Passwords do not match'];
      submitError = true;
    }

    if (!validatePassword(password)) {
      setPasswordError(true);
      newTextErrors = [ ...newTextErrors, 'Must have one letter, one digit and min length 8 characters'];
      submitError = true;
    }

    setErrorText(newTextErrors);

    if (!submitError) {
      const user = {
        firstName,
        lastName,
        username,
        email,
        password,
      };

      dispatch(signUpRequest(user, navigation));
    }
  };

  const disabled = !(username && email && password && passwordConfirmation);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <Input
        value={firstName}
        placeholder="First Name"
        onChange={setFirstName}
      />

      <Input
        value={lastName}
        placeholder="Last Name"
        onChange={setLastName}
      />

      <Input
        value={username}
        placeholder="Username"
        onChange={setUsername}
        cleanError={() => {
          setErrorText([]);
          setUsernameError(false);
        }}
        error={usernameError}
      />

      <Input
        value={email}
        placeholder="Email"
        onChange={setEmail}
        cleanError={() => {
          setErrorText([]);
          setEmailError(false);
        }}
        error={emailError}
      />

      <Input
        value={password}
        placeholder="Password"
        onChange={setPassword}
        cleanError={() => {
          setErrorText([]);
          setPasswordError(false);
        }}
        secure={true}
        error={passwordError}
      />

      <Input
        value={passwordConfirmation}
        placeholder="Confirm password"
        onChange={setPasswordConfirmation}
        cleanError={() => {
          setErrorText([]);
          setPasswordConfirmationError(false);
        }}
        secure={true}
        error={passwordConfirmationError}
      />

      {
        (usernameError || emailError || passwordConfirmationError || passwordError) && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              {errorText[0]}
            </Text>
          </View>
        )
      }

      <Button
        label="Register!"
        onPress={handleSignUpPress}
        customStyles={{ button: styles.button }}
        disabled={disabled}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate(LOGIN_SCREEN)}
      >
        <Text>
          Already have an account? Login!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
