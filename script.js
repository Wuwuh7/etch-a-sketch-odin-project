function renderBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  let amount = size * size;
  for (let index = 0; index < amount; index++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });
    square.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", square);
  }
}

renderBoard(16);

function changeSize(size) {
  if (size >= 2 && size <= 80) {
    renderBoard(size);
  } else if (size > 80) {
    console.log("to many squares");
  } else {
    console.log("to few squares");
  }
}
