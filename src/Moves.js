import React from "react";

export default function Moves(props) {
  const moves = props.history.map((step, move) => {
    console.log("step: ", step, move);
    let desc;
    if (move > 0) {
      desc = `Go to move #${move} (Row: ${step.position.row} Column: ${
        step.position.col
      })`;
    } else {
      desc = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => props.onClick(move)}>{desc}</button>
      </li>
    );
  });
  return <ol>{moves}</ol>;
}
