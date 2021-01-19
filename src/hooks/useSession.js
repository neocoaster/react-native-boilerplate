import { useSelector } from 'react-redux';

const useSession = () => {
  const { token } = useSelector(({ authReducer }) => authReducer.toJS());

  return {
    isAuthed: !!token,
  };
};

export default useSession;
