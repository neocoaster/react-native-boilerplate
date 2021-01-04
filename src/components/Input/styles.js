import { StyleSheet } from 'react-native';

import { BLACK, WHITE, ERROR_BORDER } from '@constants/colors';

export default StyleSheet.create({
  input: {
    width: 350,
    height: 48,
    backgroundColor: WHITE,
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 16,
    color: BLACK,
    fontSize: 18,
    marginBottom: 10,
  },
  error: {
    borderColor: ERROR_BORDER,
    borderWidth: 1,
  },
});
