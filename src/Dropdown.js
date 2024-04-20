import React from 'react'; // Import React library
import PropTypes from 'prop-types'; // Import PropTypes for type validation

// Define DropDownMenu component
const DropDownMenu = ({
  children, // Children elements of the DropDownMenu
  className, // Additional CSS classes for styling
  onClose, // Function to handle closing the menu
  alignment, // Alignment of the menu ('left' or 'right')
  topSpacing, // Spacing from the top of the viewport
  flat, // Whether the menu should have a flat appearance
  leftSpacing, // Spacing from the left of the viewport
}) => {
  // Function to handle closing the menu
  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  // Style object for positioning
  const styleObj = { top: topSpacing };
  if (leftSpacing) {
    styleObj.left = leftSpacing;
  }

  // Render DropDownMenu component
  return (
    <div className="dropdown-menu-base">
      {/* Click outside to close menu */}
      <div className="click-outside-base" onClick={handleClose} />
      {/* Actual menu container */}
      <div
        className={`dropdown-menu-container alignment-${alignment} ${className} ${flat ? 'flat' : ''}`}
        style={styleObj}
      >
        {children} {/* Render children */}
      </div>
    </div>
  );
};

// Default props for DropDownMenu component
DropDownMenu.defaultProps = {
  children: '', // Empty children by default
  className: '', // No additional classes by default
  alignment: 'left', // Default alignment is 'left'
  topSpacing: 10, // Default top spacing is 10
  leftSpacing: '', // No left spacing by default
  flat: false, // Menu is not flat by default
};

// Prop types for DropDownMenu component
DropDownMenu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]), // Children can be elements or arrays
  className: PropTypes.string, // Additional classes should be string
  flat: PropTypes.bool, // Flat should be boolean
  alignment: PropTypes.oneOf(['left', 'right']), // Alignment should be either 'left' or 'right'
  topSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Top spacing should be string or number
  leftSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Left spacing should be string or number
};

export default DropDownMenu; // Export DropDownMenu component
