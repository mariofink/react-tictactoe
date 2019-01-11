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
  console.log("REDUCER");
  return state;
};
