import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import "./index.css";
import Game from "./Game";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById("root")
);
