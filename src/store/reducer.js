const initialState = {
  history: [
    {
      squares: Array(9).fill(null),
      position: null
    }
  ],
  xIsNext: true,
  stepNumber: 0
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVE":
      const updatedHistory = JSON.parse(JSON.stringify(state.history)); // make a deep copy
      updatedHistory.push({
        squares: action.squares,
        position: action.index
      });
      return {
        ...state,
        history: updatedHistory,
        stepNumber: state.history.length,
        xIsNext: !state.xIsNext
      };
    case "JUMP_TO":
      return {
        ...state,
        stepNumber: action.step,
        xIsNext: action.step % 2 === 0
      };
    default:
      return state;
  }
};
