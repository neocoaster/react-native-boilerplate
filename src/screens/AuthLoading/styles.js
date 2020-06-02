import { StyleSheet } from 'react-native';

import { WHITE } from '../../constants/colors';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE,
  },
  logo: {
    width: '70%',
    alignSelf: 'center',
    marginBottom: 60,
  },
});

export default styles;
