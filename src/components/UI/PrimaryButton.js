import PropTypes from 'prop-types';
import classes from './PrimaryButton.module.css';

const PrimaryButton = ({ children, onClick }) => {
    return <button className={classes.button} onClick={onClick}>{ children }</button>
}

PrimaryButton.propTypes = {
    children: PropTypes.number,
    onClick: PropTypes.func
}

export default PrimaryButton;