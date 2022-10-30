import React, { useState, useEffect } from 'react';
import Question from '../lib/question';

const GameContext = React.createContext({
    timeRemaining: 0,
    isGameOver: false,
    isPlaying: false,
    question: null,
    showModal: true,
    score: 0,
    startPlaying: () => {},
    resetGame: () => {},
    correctAns: () => {},
});

let timer;

export const GameContextProvider = ({ children }) => {
    const [time, setTime] = useState(30);
    const [gameOver, setGameOver] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [question, setQuestion] = useState({});
    const [score, setScore] = useState(0);
    const [isShowModal, setIsShowModal] = useState(true);

    useEffect(() => {
        if (time === 0 && timer) {
            setIsShowModal(true);
            setTime(30);
            clearInterval(timer);
            setGameOver(true);
            setPlaying(false);
            setQuestion('');
        }
    }, [time]);

    const correctAnsHandler = () => {
        setQuestion(new Question().generateQuestion('multiplication'));
        setScore(state => state + 1);
    }

    const playingHandler = () => {
        setIsShowModal(false);
        setQuestion(new Question().generateQuestion('multiplication'));
        setPlaying(true);
        setGameOver(false);
        setScore(0);
        timer = setInterval(() => {
            setTime(state => state - 1);
        }, 1000);
    }

    const resetGameHandler = () => {
        setIsShowModal(true);
        setTime(30);
        setPlaying(false);
        clearInterval(timer);
        setScore(0);
    }

    const contextValue = {
        timeRemaining: time,
        isGameOver: gameOver,
        isPlaying: playing,
        question,
        score,
        showModal: isShowModal,
        startPlaying: playingHandler,
        resetGame: resetGameHandler,
        correctAns: correctAnsHandler
    }

    return (
        <GameContext.Provider value={contextValue}>
            { children }
        </GameContext.Provider>
    )
}

export default GameContext