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
  card: {
    width: 350,
    height: 100,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    color: BLACK,
    marginBottom: 5,
  },
});
