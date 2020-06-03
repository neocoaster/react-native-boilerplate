import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

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
    fontSize: RFValue(28),
    marginBottom: 20,
  },
  retryText: {
    marginBottom: 20,
    color: BLACK,
    fontSize: RFValue(20),
    textAlign: 'center',
  },
});

export default styles;
