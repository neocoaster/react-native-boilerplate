import React from 'react';

export const navigationRef = React.createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const replace = (name, params) => {
  navigationRef.current?.replace(name, params);
};

export default { navigate, replace };

