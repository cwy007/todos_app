import React from 'react';
import PropTypes from 'prop-types';

// Link
const Link = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    stype={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
);

// Props Types
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

// export
export default Link;
