import { useContext } from 'react';

import PrimaryButton from './UI/PrimaryButton';
import classes from './Choices.module.css';
import GameContext from '../store/game-context';

const Choices = () => {
    const gameCtx = useContext(GameContext);

    const isCorrect = (value) => {
        if (value === gameCtx.question.answer) {
            gameCtx.correctAns();
        }
    }

    return (
        <ul className={classes.container}>
            <li>
                <PrimaryButton onClick={gameCtx.isPlaying ? isCorrect.bind(null, gameCtx.question.choices[0]) : null}>
                    {gameCtx.isPlaying && gameCtx.question.choices[0]}
                </PrimaryButton>
            </li>
            <li>
                <PrimaryButton onClick={gameCtx.isPlaying ? isCorrect.bind(null, gameCtx.question.choices[1]) : null}>
                    {gameCtx.isPlaying && gameCtx.question.choices[1]}
                </PrimaryButton>
            </li>
            <li>
                <PrimaryButton onClick={gameCtx.isPlaying ? isCorrect.bind(null, gameCtx.question.choices[2]) : null}>
                    {gameCtx.isPlaying && gameCtx.question.choices[2]}
                </PrimaryButton>
            </li>
            <li>
                <PrimaryButton onClick={gameCtx.isPlaying ? isCorrect.bind(null, gameCtx.question.choices[3]) : null}>
                    {gameCtx.isPlaying && gameCtx.question.choices[3]}
                </PrimaryButton>
            </li>
            {/* <li>
                <button onClick={gameCtx.isPlaying ? isCorrect.bind(null, gameCtx.question.choices[0]) : null}>
                    {gameCtx.isPlaying ? gameCtx.question.choices[0] : '' }
                </button>
            </li>
            <li>
                <button onClick={gameCtx.isPlaying ? isCorrect.bind(null, gameCtx.question.choices[1]) : null}>
                    {gameCtx.isPlaying ? gameCtx.question.choices[1] : '' }
                </button>
            </li>
            <li>
                <button onClick={gameCtx.isPlaying ? isCorrect.bind(null, gameCtx.question.choices[2]) : null}>
                    {gameCtx.isPlaying ? gameCtx.question.choices[2] : '' }
                </button>
            </li>
            <li>
                <button onClick={gameCtx.isPlaying ? isCorrect.bind(null, gameCtx.question.choices[3]) : null}>
                    {gameCtx.isPlaying ? gameCtx.question.choices[3] : '' }
                </button>
            </li> */}
        </ul>
    );
}

export default Choices;