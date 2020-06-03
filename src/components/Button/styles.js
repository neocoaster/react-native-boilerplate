import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { BUTTON_BACKGROUND, WHITE } from '../../constants/colors';

export default StyleSheet.create({
  buttonContainer: {
    backgroundColor: BUTTON_BACKGROUND,
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: WHITE,
  },
});
