import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Game from "./Game";
import GameStateProvider from "./GameStateProvider";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <GameStateProvider>
      <Game />
    </GameStateProvider>
  </React.StrictMode>
);
