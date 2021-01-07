import { combineReducers } from 'redux';

import appReducer from '@reducers/appReducer';
import authReducer from '@reducers/authReducer';

const AppReducer = combineReducers({
  appReducer,
  authReducer,
});

export default AppReducer;
