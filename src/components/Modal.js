import { Fragment, useContext } from 'react'

import Backdrop from './UI/Backdrop';
import SecondaryButton from './UI/SecondaryButton';
import classes from './Modal.module.css'
import GameContext from '../store/game-context';

const Modal = () => {
    const gameCtx = useContext(GameContext);
    return (
        <Fragment>
            <Backdrop />
            <div className={classes.modal}>
                <Fragment>
                    <h1>
                        { gameCtx.isGameOver ? 'Game Over' : 'PlayMath'}
                    </h1>
                    <p> 
                        {gameCtx.isGameOver ? `Your score is ${gameCtx.score}` : 'Want to test your math skills?'}
                    </p>
                    <SecondaryButton onClick={gameCtx.startPlaying}>
                        {gameCtx.isGameOver ? 'Play Again' : 'Click to Play'}
                    </SecondaryButton>
                </Fragment>
            </div>
        </Fragment>
    )
}

export default Modal;