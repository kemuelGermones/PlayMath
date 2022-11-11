import PropTypes from "prop-types";
import classes from "./InfoButton.module.css";

const InfoButton = ({ children, onClick }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};

InfoButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

export default InfoButton;
