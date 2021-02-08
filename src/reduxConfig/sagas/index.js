import appSagas from '@sagas/appSagas';
import authSagas from '@sagas/authSagas';

export default [
  ...appSagas,
  ...authSagas,
];
