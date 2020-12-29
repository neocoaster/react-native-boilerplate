import { StyleSheet } from 'react-native';
import { HEADER_BACKGROUND, BLACK, WHITE } from './colors';

export const navigationStyles = StyleSheet.create({
  headerStyle: { backgroundColor: HEADER_BACKGROUND },
  headerTitleStyle: { fontWeight: 'bold' },
});

export const textStyles = StyleSheet.create({
  title: (fontSize = 24) => ({
    color: BLACK,
    fontSize,
    fontWeight: 'bold',
    textAlign: 'center',
  }),
  text: (fontSize) => ({
    color: BLACK,
    fontSize,
    fontWeight: 'bold',
  }),
});

export const container = (backgroundColor = WHITE) => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor,
});
