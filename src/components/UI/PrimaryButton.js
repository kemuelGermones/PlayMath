import classes from './PrimaryButton.module.css';

const PrimaryButton = ({ children, onClick }) => {
    return <button className={classes.button} onClick={onClick}>{ children }</button>
}

export default PrimaryButton;