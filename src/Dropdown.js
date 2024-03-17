import React from 'react';
import PropTypes from 'prop-types';

const DropDownMenu = ({
  children,
  className,
  onClose,
  alignment,
  topSpacing,
  flat,
  leftSpacing,
}) => {
  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };
  const styleObj = { top: topSpacing };
  if (leftSpacing) {
    styleObj.left = leftSpacing;
  }
  return (
    <div className="dropdown-menu-base">
      <div className="click-outside-base" onClick={handleClose} />
      <div
        className={`dropdown-menu-container alignment-${alignment} ${className} ${
          flat ? 'flat' : ''
        }`}
        style={styleObj}
      >
        {children}
      </div>
    </div>
  );
};

DropDownMenu.defaultProps = {
  children: '',
  className: '',
  alignment: 'left',
  topSpacing: 10,
  leftSpacing: '',
  flat: false,
};

DropDownMenu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  className: PropTypes.string,
  flat: PropTypes.bool,
  alignment: PropTypes.oneOf(['left', 'right']),
  topSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  leftSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DropDownMenu;
