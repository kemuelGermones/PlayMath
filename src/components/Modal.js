import { Fragment, useContext, useState } from 'react'

import Backdrop from './UI/Backdrop';
import SecondaryButton from './UI/SecondaryButton';
import InfoButton from './UI/InfoButton';
import classes from './Modal.module.css'
import GameContext from '../store/game-context';

let timer;
const categories = ['addition', 'subtraction', 'multiplication', 'division'];

const Modal = () => {
    const gameCtx = useContext(GameContext);
    const [countDown, setCountDown] = useState(3);
    const [showCategory, setShowCategory] = useState(false);

    const chooseCategoryHandler = () => {
        setShowCategory(true);
    }

    const startPlayingHandler = (type) => {
        setShowCategory(false)
        gameCtx.startPlaying(type);
        timer = setInterval(() => {
            if (countDown === 0) return clearInterval(timer);
            setCountDown(state => state - 1);
        }, 1000);
    }

    const categoryContent = (
        <Fragment>
            <p>Choose a category</p>
            <ul>
                {categories.map((category, index) =>
                    <li key={index}>
                        <InfoButton onClick={startPlayingHandler.bind(null, category)}>
                           {category}
                        </InfoButton>
                    </li>
                )}
            </ul>
        </Fragment>
    );

    const playContent = (
        <Fragment>
            <p>
                {gameCtx.isGameOver ? `Your score is ${gameCtx.score}` : 'Want to test your math skills?'}
            </p>
            <SecondaryButton onClick={chooseCategoryHandler}>
                {gameCtx.isGameOver ? 'Play Again' : 'Click to Play'}
            </SecondaryButton>
        </Fragment>
    );

    const modalContent = (
        <Fragment>
            <h1>{gameCtx.isGameOver ? 'Game Over' : 'PlayMath'}</h1>
            {showCategory ? categoryContent : playContent}
        </Fragment>
    );

    return (
        <Fragment>
            <Backdrop />
            <div className={classes.modal}>
                {gameCtx.isCountDown ? <h1>{countDown}</h1> : modalContent}
            </div>
        </Fragment>
    )
}

export default Modal;