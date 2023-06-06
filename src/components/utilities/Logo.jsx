import React from 'react';
import '../../sass/_utilities.scss';

const Logo = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 100 100'
    fill='none'
    width={42}
  >
    <title>Loader Logo</title>
    <g>
      <g transform='translate(35.950000, 31.000000)'>
        <path
          d='M28.016 0.967998V35H22.064V20.648L22.28 14.984L20.576 17.576L14 25.304L7.424 17.576L5.72 14.984L5.984 20.648V35H0.0320003V0.967998H0.512L14.048 16.928L27.488 0.967998H28.016Z'
          fill='var(--green)'
        />
      </g>
      <path
        stroke='var(--green)'
        strokeWidth='5'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z'
      />
    </g>
  </svg>
);

export default Logo;
