// Write a program that lets users play a game of tic-tac-toe;
// You should do this as OOP.
// Player one is X, player two is O
// If player one makes a move, mark the square with an X and switch the active player to player two
// If player two makes a move, do the opposite
// // Check the moves against all possible win conditions. If either player has a matching win condition, the game is over and the winner should be displayed in the DOM
class Player {
	constructor(mark) {
		this.mark = mark;
	}
}

const playerOne = new Player('x');
const playerTwo = new Player('o');

let currentPlayer = playerOne;

function handlePlayer() {
	currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
}

const winConditions = new Map([
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[3, 4, 6],
]);

document.querySelector('#board').addEventListener('click', (e) => {
	e.target.innerText = currentPlayer === 1 ? 'X' : 'O';
	handlePlayer();
});

function checkForWin() {
	let roundWon = false;
}
