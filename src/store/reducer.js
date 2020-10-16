import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  history: [
    {
      squares: Array(9).fill(null),
      position: null,
    },
  ],
  xIsNext: true,
  stepNumber: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase("ADD_MOVE", (state, action) => {
    const { history, xIsNext } = { ...state };
    const updatedHistory = JSON.parse(JSON.stringify([...history])); // make a deep copy
    updatedHistory.push({
      squares: action.payload.squares,
      position: action.payload.index,
    });
    return {
      ...state,
      history: updatedHistory,
      stepNumber: history.length,
      xIsNext: !xIsNext,
    };
  });
  builder.addCase("JUMP_TO", (state, action) => {
    return {
      ...state,
      stepNumber: action.payload.step,
      xIsNext: action.payload.step % 2 === 0,
    };
  });
});

export default reducer;
