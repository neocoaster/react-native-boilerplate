import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { BLACK } from '../../constants/colors';

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
  },
});
