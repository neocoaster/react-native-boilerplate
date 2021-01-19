import React from 'react';

export const navigationRef = React.createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const reset = (name) => {
  navigationRef.current?.reset({
    index: 0,
    routes: [{ name }],
  });
};

export default { navigate, reset };

