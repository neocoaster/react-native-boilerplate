import * as constants from './constants';

export const fetchData = () => ({
  type: constants.FETCH_DATA,
  payload: {},
});

export const setData = (data) => ({
  type: constants.SET_DATA,
  payload: { data },
});
