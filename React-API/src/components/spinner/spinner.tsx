import React from 'react';
import './spinner.scss';

const Spinner: React.FC = (): JSX.Element => (
  <div className="spinner-wrapper">
    <img src="https://img.icons8.com/color/48/000000/spinner--v1.png" alt="spinner" />
  </div>
);

export default Spinner;
