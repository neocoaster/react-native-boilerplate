import { StyleSheet } from 'react-native';

import { BLACK } from '@constants/colors';
import { container } from '@constants/styles';

const styles = StyleSheet.create({
  container: {
    ...container,
    paddingHorizontal: 30,
  },
  errorText: {
    color: BLACK,
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 20,
  },
  retryText: {
    marginBottom: 20,
    color: BLACK,
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    width: 110,
    alignItems: 'center',
  },
});

export default styles;
