import { useContext } from 'react';
import GameContext from '../store/game-context';
import classes from './Question.module.css';
import Header from './Header';

const Question = () => {
    const gameCtx = useContext(GameContext)

    return (
        <div className={classes.container}>
            <Header />
            <div className={classes.question}>{ gameCtx.isPlaying && gameCtx.question.str }</div>
        </div>
    )
}

export default Question;