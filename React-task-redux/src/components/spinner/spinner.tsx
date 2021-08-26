import React from 'react';
import './spinner.scss';

const Spinner: React.FC = (): JSX.Element => (
  <div className="spinner-wrapper">
    <img
      className="spinner"
      src="https://img.icons8.com/ios-filled/100/000000/iphone-spinner--v1.png"
      alt="spinner"
    />
  </div>
);

export default Spinner;
