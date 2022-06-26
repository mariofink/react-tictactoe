import { createContext, useState } from "react";

interface GameStateProviderInterface {
  history: ({ squares: any[]; position: any } | undefined)[];
  xIsNext: boolean;
  stepNumber: number;
  setXisNext: (xIsNext: boolean) => void;
  setHistory: (history: any) => void;
  setStepNumber: (stepNumber: number) => void;
}

const DEFAULT_STATE: GameStateProviderInterface = {
  history: [],
  xIsNext: true,
  stepNumber: 0,
  setXisNext: (xIsNext) => {},
  setHistory: (history) => {},
  setStepNumber: (stepNumber) => {},
};
export const GameState = createContext(DEFAULT_STATE);

interface GameStateProviderProps {
  children: React.ReactNode;
}

export default function GameStateProvider({
  children,
}: GameStateProviderProps) {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      position: null,
    },
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
        setStepNumber,
      }}
    >
      {children}
    </GameState.Provider>
  );
}
