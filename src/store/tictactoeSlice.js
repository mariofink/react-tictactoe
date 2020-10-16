import { createSlice } from "@reduxjs/toolkit";

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

const tictactoeSlice = createSlice({
  name: "tictactoe",
  initialState: initialState,
  reducers: {
    addMove(state, action) {
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
    },
    jumpTo(state, action) {
      return {
        ...state,
        stepNumber: action.payload.step,
        xIsNext: action.payload.step % 2 === 0,
      };
    },
  },
});

export const { addMove, jumpTo } = tictactoeSlice.actions;

export default tictactoeSlice.reducer;
