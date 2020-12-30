import { StyleSheet } from 'react-native';

import { TRANSPARENT } from '../../constants/colors';
import { container, textStyles } from '../../constants/styles';

export default StyleSheet.create({
  container: container(TRANSPARENT),
  title: textStyles.title(),
  screen2Button: {
    alignItems: 'center',
  },
  logoutButton: {
    width: 100,
    alignItems: 'center',
    marginHorizontal: 100,
  },
  logoutText: {
    fontSize: 16,
  },
});
