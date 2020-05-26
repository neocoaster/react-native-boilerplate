import { StyleSheet } from 'react-native';

import { BLACK, WHITE } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
  },
  text: {
    color: BLACK,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
