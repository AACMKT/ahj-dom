/**
 * @jest-environment jsdom
 */
import Playboard from "../playboard";

test("class Playgraund drawBoard() method test", () => {
  const element = document.createElement("div");
  const contentBuilder = new Playboard(element);
  contentBuilder.drawBoard();
  let cells = element.querySelectorAll(".cell");
  expect(cells.length).toEqual(16);
});

test("class Playgraund drawGoblin() method (first Goblin appearance case)  test", () => {
  const element = document.createElement("div");
  const contentBuilder = new Playboard(element);
  contentBuilder.drawBoard();
  contentBuilder.drawGoblin();
  let cellsWithGoblin = Array.from(element.querySelectorAll(".cell_selected"));
  expect(cellsWithGoblin.length).toEqual(1);
});

test("class Playgraund drawGoblin() method (redraw Goblin case) test", () => {
  const element = document.createElement("div");
  const contentBuilder = new Playboard(element);
  contentBuilder.drawBoard();
  let boardcCells = element.querySelectorAll(".cell");
  boardcCells[0].classList.add("cell_selected");
  let correctBehavior = true;
  for (let i = 0; i < boardcCells.length; i++) {
    let currentCellIndex =
      element.querySelector(".cell_selected").dataset.index;
    contentBuilder.drawGoblin();
    let newCellIndex = element.querySelector(".cell_selected").dataset.index;
    let cellsWithGoblin = Array.from(
      element.querySelectorAll(".cell_selected")
    );
    if (currentCellIndex == newCellIndex || cellsWithGoblin.length > 1) {
      correctBehavior = false;
    }
  }
  expect(correctBehavior).toBe(true);
});
