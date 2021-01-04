import { StyleSheet } from 'react-native';

import { ERROR_TEXT, TRANSPARENT } from '@constants/colors';
import { container, textStyles } from '@constants/styles';

export default StyleSheet.create({
  container: container(TRANSPARENT),
  title: {
    ...textStyles.title(),
    marginBottom: 50,
  },
  errorContainer: {
    width: 300,
    marginTop: 10,
  },
  errorText: {
    color: ERROR_TEXT,
    fontSize: 12,
    textAlign: 'center',
  },
  button: {
    width: 150,
    alignItems: 'center',
  },
});
