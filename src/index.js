import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Game from "./Game";
import GameStateProvider from "./GameStateProvider";

ReactDOM.render(
  <React.StrictMode>
    <GameStateProvider>
      <Game />
    </GameStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
