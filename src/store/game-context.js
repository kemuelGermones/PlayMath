import React, { useEffect, useReducer } from 'react';
import Question from '../lib/question';

const initialState = {
    timeRemaining: 60,
    isCountDown: false,
    isGameOver: false,
    isPlaying: false,
    question: {},
    showModal: true,
    score: 0,
}

const GameContext = React.createContext({
    ...initialState,
    startPlaying: () => {},
    resetGame: () => {},
    correctAns: () => {},
});

const gameReducer = (state, action) => {
    if (action.type === 'START_COUNTDOWN') {
        return {
            timeRemaining: state.timeRemaining,
            isCountDown: true,
            isGameOver: state.isGameOver,
            isPlaying: state.isPlaying,
            question: state.question,
            showModal: state.showModal,
            score: state.score,
        }
    }
    if (action.type === 'CORRECT_ANS') {
        return {
            timeRemaining: state.timeRemaining,
            isCountDown: state.isCountDown,
            isGameOver: state.isGameOver,
            isPlaying: state.isPlaying,
            question: new Question().generateQuestion('division'),
            showModal: state.showModal,
            score: state.score + 1,
        }
    }
    if (action.type === 'PLAYING') {
        return {
            timeRemaining: state.timeRemaining,
            isCountDown: false,
            isGameOver: false,
            isPlaying: true,
            question: new Question().generateQuestion('division'),
            showModal: false,
            score: 0,
        }
    }
    if (action.type === 'DECREASE_TIME') {
        return {
            timeRemaining: state.timeRemaining - 1,
            isCountDown: state.isCountDown,
            isGameOver: state.isGameOver,
            isPlaying: state.isPlaying,
            question: state.question,
            showModal: state.showModal,
            score: state.score,
        }
    }
    if (action.type === 'GAME_OVER') {
        return {
            ...initialState,
            isGameOver: true,
            score: state.score
        }
    }
    if (action.type === 'RESET') {
        return initialState;
    }
}

let timer;

export const GameContextProvider = ({ children }) => {
    const [gameState, dispatch] = useReducer(gameReducer, initialState);

    const resetGame = () => {
        dispatch({ type: 'RESET'});
        clearInterval(timer);
    }

    const startPlaying = () => {
        dispatch({ type: 'START_COUNTDOWN'});
        setTimeout(() => {
            dispatch({ type: 'PLAYING'});
            timer = setInterval(() => {
                dispatch({ type: 'DECREASE_TIME'});
            }, 1000)
        }, 3000);
    }

    const correctAns = () => {
        dispatch({ type: 'CORRECT_ANS'});
    }

    useEffect(() => {
        if (gameState.timeRemaining === 0) {
            dispatch({ type: 'GAME_OVER'});
            clearInterval(timer);
        }
    }, [gameState.timeRemaining]);

    const contextValue = {
        ...gameState,
        startPlaying,
        correctAns,
        resetGame
    }

    return (
        <GameContext.Provider value={contextValue}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContext