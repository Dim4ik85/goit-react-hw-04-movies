import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => (
  <Loader
    type="BallTriangle"
    color="#0095b6"
    height={260}
    width={260}
    timeout={3000}
  />
);

export default Spinner;
