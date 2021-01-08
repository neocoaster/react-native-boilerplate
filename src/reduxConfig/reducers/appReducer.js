import fromJS from '@neocoast/neox';

import * as constants from '@reduxConstants';

const initialState = fromJS({
  data: null,
});

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.SET_DATA: {
      return state.set('data', payload.data);
    }
    default:
      return state;
  }
};

export default appReducer;
