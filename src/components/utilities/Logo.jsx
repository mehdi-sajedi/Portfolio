import React from 'react';
import '../../sass/_utilities.scss';
import LogoSvg from './Logo.svg';

const Logo = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40px',
    }}
  >
    <img src={LogoSvg} />
  </div>
);

export default Logo;
