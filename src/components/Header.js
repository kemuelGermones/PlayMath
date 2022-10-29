import { useContext } from 'react';

import classes from './Header.module.css';
import GameContext from '../store/game-context';


const Header = () => {
    const gameCtx = useContext(GameContext);

    return (
        <div className={classes.container}>
            <div className={classes.notif}>
                Correct
            </div>
            <div className={classes.score}>
                Score: {gameCtx.score}
            </div>
        </div>
    );
}

export default Header;