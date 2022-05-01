// Player initializes game as marker X
// Computer goes next as marker O
// Apply marker class to player input, and then choose a random tile for computer
// Player or computer must match 3 markers in a row to win the game
// Once win condition is met, alert who won

const gameBoard = document.querySelector('#board');
const tiles = [...gameBoard.querySelectorAll('.tile')];
const currentGameMoves = [null, null, null, null, null, null, null, null, null];
const playerMark = 'X';
const computerMark = 'O';
let currentPlayer = playerMark;

const winConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[3, 4, 6],
];

const checkForWin = () => {
	let gameWon = false;
	for (let i = 0; i < winConditions.length; i++) {
		let winCondition = winConditions[i];
		let a = currentGameMoves[winCondition[0]];
		let b = currentGameMoves[winCondition[1]];
		let c = currentGameMoves[winCondition[2]];

		if (a && b && c) {
			if (a === b && b === c) {
				gameWon = true;
			}
		}
	}
	if (gameWon) {
		alert('Game over!');
		handleReset();
	}
};

const handlePlayerMove = (e) => {
	const i = e.target.dataset.id;
	if (!currentGameMoves[i] && currentPlayer === playerMark) {
		currentGameMoves[i] = playerMark;
		tiles[i].textContent = playerMark;
		currentPlayer = computerMark;
	}
	checkForWin();
};

const handleComputerMove = () => {
	let i = Math.floor(Math.random() * currentGameMoves.length);

	if (currentPlayer === computerMark) {
		if (!currentGameMoves[i]) {
			currentGameMoves[i] = computerMark;
			tiles[i].innerText = computerMark;
			currentPlayer = playerMark;
		} else {
			handleComputerMove();
		}
	}
	checkForWin();
};

gameBoard.addEventListener('click', (e) => {
	if (e.target.classList.contains('tile') && e.target.textContent === '') {
		handlePlayerMove(e);
		setTimeout(() => handleComputerMove(), 800);
	}
});

const handleReset = () => {
	tiles.forEach((tile) => (tile.textContent = ''));
	currentGameMoves.forEach((_, i) => (currentGameMoves[i] = null));
	currentPlayer = playerMark;
};

document.querySelector('#reset-btn').addEventListener('click', () => handleReset());
