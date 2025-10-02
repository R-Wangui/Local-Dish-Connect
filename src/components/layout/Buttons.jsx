import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types"; 

function Buttons({variant, children, type, value, size, style, onClick}) {
  return (
    <>
      <Button
        variant={variant}
        type={type}
        value={value}
        size={size}
        style={style}
        onClick={onClick}
      >
        {children}
      </Button>{" "}
    </>
  );
}

Buttons.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Buttons;