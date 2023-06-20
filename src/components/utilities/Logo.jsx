import React from 'react';
import '../../sass/_utilities.scss';

const Logo = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40px',
    }}
  >
    <img src='./logo.svg' />
  </div>
);

export default Logo;
