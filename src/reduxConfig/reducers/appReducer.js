import * as constants from '@reduxConstants';

const initialState = {
  data: null,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.SET_DATA: {
      return {
        ...state,
        data: payload.data,
      };
    }
    default:
      return state;
  }
};

export default appReducer;
