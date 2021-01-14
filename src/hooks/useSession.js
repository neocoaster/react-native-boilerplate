import { useSelector, useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';

import navigation from '@navigators/ref';

import { LOGIN_SCREEN } from '@constants/screens';

import { setAuthedScreen } from '@actions/authActions';

const useSession = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const { token } = useSelector(({ authReducer }) => authReducer.toJS());

  const checkAuth = () => {
    if (token) return null;

    dispatch(
      setAuthedScreen({
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
