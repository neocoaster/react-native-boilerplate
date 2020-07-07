import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

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
    fontSize: RFValue(24),
    fontWeight: 'bold',
  },
});
