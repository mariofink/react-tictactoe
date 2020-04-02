import React, { createContext, useState } from "react";

const DEFAULT_STATE = {
  history: [],
  xIsNext: true,
  stepNumber: 0,
  setXisNext: () => {},
  setHistory: () => {},
  setStepNumber: () => {}
};
const GameContext = createContext(DEFAULT_STATE);

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
    <GameContext.Provider
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
    </GameContext.Provider>
  );
}
