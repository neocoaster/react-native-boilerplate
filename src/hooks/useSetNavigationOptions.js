import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const useSetNavigationOptions = (options) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions(options);
  }, [navigation, options]);
};

export default useSetNavigationOptions;
