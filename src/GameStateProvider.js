import React, { createContext, useState } from "react";

const DEFAULT_STATE = {
  history: [],
  xIsNext: true,
  stepNumber: 0,
  setXisNext: xIsNext => {},
  setHistory: history => {},
  setStepNumber: stepNumber => {}
};
export const GameState = createContext(DEFAULT_STATE);

export default function GameStateProvider({ children }) {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      position: null
    }
  ]);
  const [xIsNext, setXisNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  return (
    <GameState.Provider
      value={{
        history,
        xIsNext,
        stepNumber,
        setXisNext,
        setHistory,
        setStepNumber
      }}
    >
      {children}
    </GameState.Provider>
  );
}
