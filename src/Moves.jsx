import React from "react";

const moveStyle = (move, currentStep) => {
  if (move === currentStep) {
    return {
      fontWeight: 700
    };
  }
};

export default function Moves(props) {
  const moves = props.history.map((step, move) => {
    let desc;
    if (move > 0) {
      desc = `Go to move #${move} (Row: ${step.position.row} Column: ${step.position.col})`;
    } else {
      desc = "Go to game start";
    }
    return (
      <li key={move}>
        <button
          style={moveStyle(move, props.currentStep)}
          onClick={() => props.onClick(move)}
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
