const moveStyle = (move: number, currentStep: number) => {
  if (move === currentStep) {
    return {
      fontWeight: 700,
    };
  }
};

interface MovesProps {
  history: any[];
  currentStep: number;
  onClick: (move: number) => void;
}

export default function Moves({ history, currentStep, onClick }: MovesProps) {
  const moves = history.map((step, move) => {
    let desc;
    if (move > 0) {
      desc = `Go to move #${move} (Row: ${step.position.row} Column: ${step.position.col})`;
    } else {
      desc = "Go to game start";
    }
    return (
      <li key={move}>
        <button
          style={moveStyle(move, currentStep)}
          onClick={() => onClick(move)}
        >
          {desc}
        </button>
      </li>
    );
  });
  return (
    <div>
      <h3>Moves</h3>
      <ol>{moves}</ol>
    </div>
  );
}
