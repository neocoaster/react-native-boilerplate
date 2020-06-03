import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { BLACK, WHITE } from '../../constants/colors';

export default StyleSheet.create({
  input: {
    width: 350,
    height: 48,
    backgroundColor: WHITE,
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 16,
    color: BLACK,
    fontSize: RFValue(18),
    marginBottom: 10,
  },
});
