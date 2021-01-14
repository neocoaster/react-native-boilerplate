import fromJS from '@neocoast/neox';

import * as constants from '@reduxConstants';

const initialState = fromJS({
  user: null,
  token: '',
  authedScreen: null,
});

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.SIGN_UP: {
      return state.set('user', payload.user);
    }
    case constants.SIGN_IN: {
      return state
        .set('user', payload.user)
        .set('token', payload?.headers.token);
    }
    case constants.SET_AUTHED_SCREEN: {
      return state.set('authedScreen', payload.authedScreen);
    }
    case constants.SIGN_OUT: {
      return initialState;
    }
    default:
      return state;
  }
};

export default authReducer;
