import PasswordValidator from 'password-validator';

import { validEmail } from '@constants/regex';

export const checkConfirmationPassword =
  (password, passwordConfirmation) => password === passwordConfirmation;

export const validateEmail = (email) => validEmail.test(email);

export const validatePassword = (password) => {
  const schema = new PasswordValidator();

  schema
    .is().min(8)
    .has().letters()
    .has().digits()
    .has().not().spaces();

  return schema.validate(password);
};
