import { useSelector, useDispatch } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';

import { LOGIN_SCREEN } from '@constants/screens';

import { setAuthedScreen } from '@actions/authActions';

const useSession = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { token } = useSelector(({ authReducer }) => authReducer.toJS());


  const checkAuth = () => {
    if (token) return null;

    const parent = navigation?.dangerouslyGetParent()?.dangerouslyGetState();

    dispatch(
      setAuthedScreen({
        stack: parent.routeNames[parent.index],
        screen: route?.name,
        params: route?.params,
      }),
    );

    navigation.navigate(LOGIN_SCREEN);
  };

  return {
    isAuthed: !!token,
    checkAuth,
  };
};

export default useSession;
