import { Fragment, useContext, useState } from 'react'

import Backdrop from './UI/Backdrop';
import SecondaryButton from './UI/SecondaryButton';
import classes from './Modal.module.css'
import GameContext from '../store/game-context';

let timer;

const Modal = () => {
    const [countDown, setCountDown] = useState(3);

    const onCLickHandler = () => {
        gameCtx.startPlaying();
        timer = setInterval(() => {
            if (countDown ===0) return clearInterval(timer);
            setCountDown(state => state - 1);
        }, 1000);
    }

    const gameCtx = useContext(GameContext);
    return (
        <Fragment>
            <Backdrop />
            <div className={classes.modal}>
                { gameCtx.isCountDown ? <h1>{countDown}</h1> :
                    <Fragment>
                        <h1>
                            {gameCtx.isGameOver ? 'Game Over' : 'PlayMath'}
                        </h1>
                        <p>
                            {gameCtx.isGameOver ? `Your score is ${gameCtx.score}` : 'Want to test your math skills?'}
                        </p>
                        <SecondaryButton onClick={onCLickHandler}>
                            {gameCtx.isGameOver ? 'Play Again' : 'Click to Play'}
                        </SecondaryButton>
                    </Fragment>
                }
            </div>
        </Fragment>
    )
}

export default Modal;