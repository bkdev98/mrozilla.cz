// =============================================================================
// import
// =============================================================================

// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import { color } from '../../utils/styles';

// components
import IconWrapper from './IconWrapper';

// =============================================================================
// component
// =============================================================================

export default function Logo({ height }) {
  return (
    <IconWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        style={{ cursor: 'pointer', height }}
      >
        <path
          fill={color.brand.primary}
          d="M97.9 75.3c-4.2 0-7.6-3.4-7.6-7.6 0-4.2 3.4-7.6 7.6-7.6.7 0 1.4.1 2.1.3-.1-5.4-.9-11.7-2.1-18.8C91.1 3.3 79.8-4.6 41.6 2.2 3.3 8.9-4.6 20.2 2.2 58.4c6.7 38.3 18 46.1 56.3 39.4 23.4-4.1 35.4-9.9 39.7-22.6-.1 0-.2.1-.3.1zm-16.3-9.6c0 4.2-3.4 7.6-7.6 7.6s-7.6-3.4-7.6-7.6V49.6c0-3.2-1.7-5.2-4.2-5.2-2.8 0-4.7 2.4-4.7 6.1v13.3c0 4.2-3.4 7.6-7.6 7.6-4.2 0-7.6-3.4-7.6-7.6V49.6c0-3.2-1.7-5.2-4.2-5.2-2.8 0-4.6 2.4-4.6 6.1v11.3c0 4.2-3.4 7.6-7.6 7.6-4.2 0-7.6-3.4-7.6-7.6V38.2c0-4.2 3.4-7.6 7.6-7.6 3.7 0 6.8 2.7 7.5 6.2 2.2-3.9 6.2-6.2 11-6.2 5.5 0 9.7 3 12.1 8.2 2.4-5.2 6.5-8.2 12.1-8.2 7.6 0 13 5.7 13 14.5v20.6z"
        />
      </svg>
    </IconWrapper>
  );
}

Logo.propTypes = {
  height: PropTypes.string,
};
Logo.defaultProps = {
  height: '5rem',
};
