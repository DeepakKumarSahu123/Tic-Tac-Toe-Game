const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const newGameBtn = document.querySelector("#new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const status = document.querySelector("#status");

// Board indexes:
//  0 | 1 | 2
//  3 | 4 | 5
//  6 | 7 | 8
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6],            // diagonals
];

let board = Array(9).fill("");
let currentPlayer = "X";
let gameOver = false;

const getWinningPattern = () =>
    winPatterns.find(([a, b, c]) =>
        board[a] !== "" && board[a] === board[b] && board[b] === board[c]
    ) || null;

const isDraw = () => board.every((cell) => cell !== "");

const endGame = (message) => {
    gameOver = true;
    boxes.forEach((box) => (box.disabled = true));
    status.innerText = message;
    msg.innerText = message;
    // Brief delay so the winning line is visible before the overlay appears
    setTimeout(() => msgContainer.classList.remove("hide"), 700);
};

const handleMove = (index) => {
    if (gameOver || board[index] !== "") return;

    board[index] = currentPlayer;
    boxes[index].innerText = currentPlayer;
    boxes[index].classList.add(currentPlayer.toLowerCase());
    boxes[index].disabled = true;

    const pattern = getWinningPattern();
    if (pattern) {
        pattern.forEach((i) => boxes[i].classList.add("win"));
        endGame(`Congratulations, Winner is ${currentPlayer}!`);
        return;
    }

    if (isDraw()) {
        endGame("It's a draw!");
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.innerText = `Player ${currentPlayer}'s turn`;
};

const resetGame = () => {
    board = Array(9).fill("");
    currentPlayer = "X";
    gameOver = false;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.classList.remove("win", "x");
    });
    status.innerText = "Player X's turn";
    msgContainer.classList.add("hide");
};

boxes.forEach((box, index) => box.addEventListener("click", () => handleMove(index)));
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
