import React from "react";
import { connect } from "react-redux";
import Board from "./Board";
import Moves from "./Moves";

class Game extends React.Component {
  handleClick(i) {
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // do nothing if game already ended, or the square is already taken
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? "X" : "O";
    this.props.addMove(getPosition(i), squares);
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = "Next player: " + (this.props.xIsNext ? "X" : "O");
    }
    return (
      <div>
        <h1>Tic Tac Toe (React)</h1>
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <Moves
              history={history}
              currentStep={this.props.stepNumber}
              onClick={move => this.jumpTo(move)}
            />
          </div>
        </div>
      </div>
    );
  }
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

const mapStateToProps = state => {
  return {
    history: state.history,
    xIsNext: state.xIsNext,
    stepNumber: state.stepNumber
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMove: (i, squares) =>
      dispatch({ type: "ADD_MOVE", squares: squares, index: i })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
