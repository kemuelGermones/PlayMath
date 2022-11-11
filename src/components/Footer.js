import { useContext } from "react";

import GameContext from "../store/game-context";
import classes from "./Footer.module.css";
import InfoButton from "./UI/InfoButton";

const Footer = () => {
  const gameCtx = useContext(GameContext);

  return (
    <div className={classes.container}>
      <InfoButton onClick={gameCtx.resetGame}>Reset Game</InfoButton>
    </div>
  );
};

export default Footer;
