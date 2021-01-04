import { StyleSheet } from 'react-native';

import { BUTTON_BACKGROUND, WHITE, BUTTON_BACKGROUND_DISABLED } from '@constants/colors';

export default StyleSheet.create({
  buttonContainer: {
    backgroundColor: BUTTON_BACKGROUND,
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  buttonDisabled: {
    backgroundColor: BUTTON_BACKGROUND_DISABLED,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: WHITE,
  },
});
