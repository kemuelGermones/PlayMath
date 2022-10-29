import { useContext } from 'react';

import GameContext from '../store/game-context';
import classes from './Footer.module.css';

const Footer = () => {
    const gameCtx = useContext(GameContext);

    const onClickHandler = () => {
        if (gameCtx.isPlaying) {
            gameCtx.resetGame();
        } else {
            gameCtx.startPlaying();
        }
    }

    return (
        <div className={classes.container}>
            <button onClick={onClickHandler}>{gameCtx.isPlaying ? 'Reset Game' : 'Start Game'}</button>
            <div>Time Remaining: {gameCtx.timeRemaining}</div>
        </div>
    );
}

export default Footer;