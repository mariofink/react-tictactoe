import React, { useState } from "react";
import Board from "./Board";
import Moves from "./Moves";

export default function Game(props) {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      position: null
    }
  ]);
  const [xIsNext, setXisNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const handleClick = i => {
    const squares = current.squares.slice();
    // do nothing if game already ended, or the square is already taken
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(
      history.concat([
        {
          squares: squares,
          position: getPosition(i)
        }
      ])
    );
    setStepNumber(history.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = step => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <div>
      <h1>Tic Tac Toe (React)</h1>
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <Moves
            history={history}
            currentStep={stepNumber}
            onClick={move => jumpTo(move)}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Get column and row number of a square index
 * @param {*} i
 */
function getPosition(i) {
  let row, col;
  if (i > 5) {
    row = 3;
    col = i - 5;
  } else if (i > 2) {
    row = 2;
    col = i - 2;
  } else {
    row = 1;
    col = i + 1;
  }
  return {
    row,
    col
  };
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
