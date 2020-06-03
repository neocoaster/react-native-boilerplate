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

import {
  checkConfirmationPassword,
  validateEmail,
  validatePassword,
} from '../../helpers';

import styles from './styles';

const SignUp = ({ navigation }) => {
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

  const [errorText, setErrorText] = useState('');

  const dispatch = useDispatch();

  const handleSignUpPress = async () => {
    let submitError = false;
    setErrorText('');

    if (!username) {
      setUsernameError(true);
      setErrorText('Must enter a username');
      submitError = true;
    }

    if (!validateEmail(email)) {
      setEmailError(true);
      setErrorText('Invalid Email');
      submitError = true;
    }

    if (!checkConfirmationPassword(password, passwordConfirmation)) {
      setPasswordConfirmationError(true);
      setErrorText('Passwords do not match');
      submitError = true;
    }

    if (!validatePassword(password)) {
      setPasswordError(true);
      setErrorText('Must have one letter, one digit and min length 8 characters');
      submitError = true;
    }

    if (!submitError) {
      const user = {
        firstName,
        lastName,
        username,
        email,
        password,
      };

      dispatch(authActions.signUpRequest(user, navigation));
    }
  };

  const checkButtonDisabled = () => {
    return username === '' ||
      email === '' ||
      password === '' ||
      passwordConfirmation === '';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>

      <Input
        value={firstName}
        placeholder="First Name"
        onChange={(text) => setFirstName(text)}
      />

      <Input
        value={lastName}
        placeholder="Last Name"
        onChange={(text) => setLastName(text)}
      />

      <Input
        value={username}
        placeholder="Username"
        onChange={(text) => setUsername(text)}
        cleanError={() => setUsernameError(false)}
      />

      <Input
        value={email}
        placeholder="Email"
        onChange={(text) => setEmail(text)}
        cleanError={() => setEmailError(false)}
      />

      <Input
        value={password}
        placeholder="Password"
        onChange={(text) => setPassword(text)}
        cleanError={() => setPasswordConfirmationError(false)}
        secure={true}
      />

      <Input
        value={passwordConfirmation}
        placeholder="Confirm password"
        onChange={(text) => setPasswordConfirmation(text)}
        cleanError={() => setPasswordConfirmationError(false)}
        secure={true}
      />

      {
        (usernameError || emailError || passwordConfirmationError || passwordError) && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              { errorText }
            </Text>
          </View>
        )
      }

      <Button
        label="Register!"
        onPress={() => handleSignUpPress()}
        customStyles={{
          button: {
            width: 150,
            alignItems: 'center',
          },
        }}
        disabled={checkButtonDisabled()}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text>
          Already have an account? Login!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

SignUp.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignUp;
