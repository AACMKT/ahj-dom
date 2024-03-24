export default class Playboard {
  constructor(element) {
    this._element = element;
  }

  generateRandom(cells, selectedCell) {
    let num = Math.floor(Math.random() * cells.length);
    return Number(selectedCell) == num
      ? this.generateRandom(cells, selectedCell)
      : num;
  }

  drawBoard() {
    let board = document.createElement("div");
    board.classList.add("board");
    for (let i = 0; i < 16; i += 1) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.index = i;
      board.appendChild(cell);
    }
    this._element.appendChild(board);
  }

  drawGoblin() {
    let cells = Array.from(this._element.querySelector(".board").children);
    let currentCell = this._element.querySelector(".cell_selected");
    let index = 0;
    if (currentCell) {
      index = this.generateRandom(cells, currentCell.dataset.index);
      cells.forEach((cell) => cell.classList.remove("cell_selected"));
    } else {
      index = Math.floor(Math.random() * cells.length);
    }
    cells[index].classList.add("cell_selected");
  }
}
