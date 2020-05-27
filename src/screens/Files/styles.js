import { StyleSheet } from 'react-native';

import { BLACK } from 'Constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: BLACK,
    fontSize: 20,
  },
  userText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
