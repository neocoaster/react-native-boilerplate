import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { BLACK, ERROR_TEXT } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: BLACK,
    fontSize: RFValue(24),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  errorContainer: {
    width: 300,
    marginTop: 10,
  },
  errorText: {
    color: ERROR_TEXT,
    fontSize: RFValue(12),
    textAlign: 'center',
  },
});
