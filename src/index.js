import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import tictactoeReducer from "./store/tictactoeSlice";
import "./index.css";
import Game from "./Game";

const store = configureStore({ reducer: tictactoeReducer });

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById("root")
);
