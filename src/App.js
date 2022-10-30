import { Fragment, useContext, useState } from "react";

import Card from "./components/UI/Card";
import Question from './components/Question';
import Choices from './components/Choices';
import Footer from './components/Footer';
import Modal from './components/Modal';
import GameContext from "./store/game-context";

function App() {
  const gameCtx = useContext(GameContext);

  return (
    <Fragment>
      {gameCtx.showModal && <Modal />}
      <Card>
        <Question />
        <Choices />
        <Footer />
      </Card>
    </Fragment>
  );
}

export default App;
