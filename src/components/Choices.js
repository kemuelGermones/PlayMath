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
            {
                gameCtx.isPlaying && gameCtx.question.choices.map((choice, index) => 
                <li key={index}>
                    <PrimaryButton onClick={isCorrect.bind(null, choice)}>
                        {choice}
                    </PrimaryButton>
                </li>  
                )
            }
        </ul>
    );
}

export default Choices;