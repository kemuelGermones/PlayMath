import classes from './InfoButton.module.css';

const InfoButton = ({ children, onClick }) => {
    return <button className={classes.button} onClick={onClick}>{ children }</button>
}

export default InfoButton;