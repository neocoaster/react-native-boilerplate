import { StyleSheet } from 'react-native';

import { BLACK } from '../../constants/colors';
import { container } from '../../constants/styles';

export default StyleSheet.create({
  container: container(),
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
