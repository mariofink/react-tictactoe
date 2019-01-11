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
      const updatedHistory = JSON.parse(JSON.stringify(state.history));
      updatedHistory.push({
        squares: action.squares,
        position: action.index
      });
      const newState = {
        ...state,
        history: updatedHistory,
        stepNumber: state.history.length,
        xIsNext: !state.xIsNext
      };
      return newState;
    default:
      return state;
  }
};
