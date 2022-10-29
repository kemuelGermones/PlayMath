import { useContext } from 'react';
import GameContext from '../store/game-context';
import classes from './Question.module.css';

const Question = () => {
    const gameCtx = useContext(GameContext)

    return (
        <div className={classes.container}>
           {gameCtx.isGameOver && 'Game Over: ' + gameCtx.score}
           {!gameCtx.isGameOver && gameCtx.isPlaying && `${gameCtx.question.a}x${gameCtx.question.b}`}
        </div>
    )
}

export default Question;