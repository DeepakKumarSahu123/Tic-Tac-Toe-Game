# 🎮 Tic Tac Toe Game

A simple and interactive **Tic Tac Toe game** built using **HTML, CSS, and JavaScript**. The game allows two players to play against each other on a 3×3 board, automatically detects winners and draws, and provides a reset/new game option.

## 📌 Project Overview

This project is a browser-based Tic Tac Toe game where two players take turns placing **X** and **O** on a 3×3 game board.

The game automatically:

* Tracks the current player's turn
* Detects winning combinations
* Highlights the winning boxes
* Detects a draw when all boxes are filled
* Disables the board after the game ends
* Displays the winner or draw message
* Allows players to start a new game or reset the current game

## ✨ Features

* 🎯 Two-player gameplay
* ❌ Player X and ⭕ Player O
* 🏆 Automatic winner detection
* 🤝 Automatic draw detection
* 🟢 Highlights the winning combination
* 🔄 Reset Game functionality
* 🆕 New Game functionality
* 📱 Responsive design
* ♿ Accessible buttons and status messages
* 🎨 Simple and clean user interface
* 🖱️ Hover and focus effects

## 🛠️ Technologies Used

* **HTML5** – Structure of the game
* **CSS3** – Styling, layout, responsiveness, and animations
* **JavaScript** – Game logic and user interactions

## 📂 Project Structure

```text
Tic-Tac-Toe/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

## 🎮 How to Play

1. Open the game in your web browser.
2. Player **X** starts the game.
3. Click on any empty box to place your mark.
4. Player **O** takes the next turn.
5. Players continue taking turns.
6. The first player to get three marks in a row wins.

A player can win by completing:

* A horizontal row
* A vertical column
* A diagonal

If all nine boxes are filled without a winner, the game ends in a **draw**.

## 🏆 Winning Patterns

The game checks the following eight winning combinations:

```text
[0, 1, 2]   [3, 4, 5]   [6, 7, 8]

[0, 3, 6]   [1, 4, 7]   [2, 5, 8]

[0, 4, 8]   [2, 4, 6]
```

These represent:

```text
 X | X | X
---+---+---
 O | O | -
---+---+---
 - | - | -
```

A player wins when their symbol occupies all three positions in any winning pattern.

## ⚙️ Game Logic

The JavaScript maintains the game state using:

```javascript
let board = Array(9).fill("");
let currentPlayer = "X";
let gameOver = false;
```

### Winner Detection

The `getWinningPattern()` function checks whether the current board contains a winning combination.

```javascript
const getWinningPattern = () =>
    winPatterns.find(([a, b, c]) =>
        board[a] !== "" &&
        board[a] === board[b] &&
        board[b] === board[c]
    ) || null;
```

### Draw Detection

The game checks whether every board position is occupied:

```javascript
const isDraw = () => board.every((cell) => cell !== "");
```

### Player Switching

After every valid move, the current player changes:

```javascript
currentPlayer = currentPlayer === "X" ? "O" : "X";
```

## 🚀 How to Run the Project

### Method 1: Open Directly

1. Download or clone this repository.
2. Open the project folder.
3. Double-click `index.html`.
4. The game will open in your default browser.

### Method 2: Using VS Code

1. Open the project folder in **Visual Studio Code**.
2. Open `index.html`.
3. Use the **Live Server** extension to launch the project.
4. The game will open in your browser.

## 🔄 Reset and New Game

The project provides two options:

### Reset Game

The **Reset Game** button clears the current board and starts a new game with Player X.

### New Game

After a player wins or the game ends in a draw, the **New Game** button allows players to start another game.

## 🎨 User Interface

The game includes:

* Responsive 3×3 grid
* Player turn indicator
* Winning box highlighting
* Result overlay
* Interactive buttons
* Hover effects
* Keyboard focus indicators

## 📱 Responsive Design

The game uses CSS viewport units such as `vmin` and a responsive grid layout, allowing the game board to adapt to different screen sizes.

## 🔮 Future Improvements

Possible improvements for future versions:

* 🤖 Add a **Player vs Computer** mode
* 🎚️ Add difficulty levels
* 🏆 Add score tracking
* 🔊 Add sound effects
* 🌙 Add dark/light mode
* 💾 Store scores using Local Storage
* 📊 Add game statistics
* 🎨 Add different themes
* 📱 Improve mobile-sp
