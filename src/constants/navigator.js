import { WHITE } from '@constants/colors';
import { navigationStyles } from './styles';

export const HEADER_OPTIONS = {
  gestureEnabled: true, // you can enable swipe gestures, but this is not the desired behaviour in Android
  headerStyle: navigationStyles.headerStyle,
  headerTitleStyle: navigationStyles.headerTitleStyle,
  headerTintColor: WHITE,
  headerLeft: null,
};
