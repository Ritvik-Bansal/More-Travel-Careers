import React from 'react';
import PropTypes from 'prop-types';

export const ARROW_DIR = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  UP: 'UP',
  DOWN: 'DOWN',
};

const Arrow = (props) => {
  const { color, type, width, height } = props;
  let d = 'M7 13L1 7L7 1';
  if (type === ARROW_DIR.RIGHT) {
    d = 'M1 13L7 7L1 1';
  } else if (type === ARROW_DIR.DOWN) {
    d = 'M1 1L5 5L9 1';
  }
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={d}
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Arrow.defaultProps = {
  type: ARROW_DIR.LEFT,
  width: 8,
  height: 14,
};

Arrow.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default React.memo(Arrow);
