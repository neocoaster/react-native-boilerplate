import * as constants from '@reduxConstants';

const initialState = {
  user: null,
  token: '',
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.SIGN_UP: {
      return {
        ...state,
        user: payload.user,
      };
    }
    case constants.SIGN_IN: {
      return {
        ...state,
        user: payload.user,
        token: payload.headers.token,
      };
    }
    case constants.SIGN_OUT: {
      return initialState;
    }
    default:
      return state;
  }
};

export default authReducer;
