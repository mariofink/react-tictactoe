import ReactDOM from "react-dom";
import "./index.css";
import Game from "./Game";
import GameStateProvider from "./GameStateProvider";

ReactDOM.render(
  <GameStateProvider>
    <Game />
  </GameStateProvider>,
  document.getElementById("root")
);
