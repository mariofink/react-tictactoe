import Game from "./Game";
import GameStateProvider from "./GameStateProvider";

export default function TicTacToe() {
  return (
    <GameStateProvider>
      <Game />
    </GameStateProvider>
  );
}
