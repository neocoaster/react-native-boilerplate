import PasswordValidator from 'password-validator';

import { validEmail } from '@constants/regex';

export const checkConfirmationPassword = (password, passwordConfirmation) => (password === passwordConfirmation);

export const validateEmail = (email) => validEmail.test(email);

export const validatePassword = (password) => {
  const schema = new PasswordValidator();

  schema
    .is().min(8) // Minimum length 8
    .has().letters() // Must have letters
    .has().digits() // Must have digits
    .has().not().spaces(); // Should not have spaces

  return schema.validate(password);
};
