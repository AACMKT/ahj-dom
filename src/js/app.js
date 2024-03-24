import Playboard from "./playboard";

let board = new Playboard(document.querySelector(".board-container"));

document.addEventListener("DOMContentLoaded", () => {
  board.drawBoard();
  setInterval(() => board.drawGoblin(), 2000);
});
