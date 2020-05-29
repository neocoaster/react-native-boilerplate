import { StyleSheet } from 'react-native';

import { BLACK, WHITE } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: WHITE,
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
});

export default styles;
