const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restart-button');
let currentPlayer = 'X';
let gameActive = true;
const gameBoard = ['', '', '', '', '', '', '', '', ''];

cells.forEach((cell, index) => {
	cell.addEventListener('click', () => {
		if (gameActive && gameBoard[index] === '') {
			gameBoard[index] = currentPlayer;
			cell.innerText = currentPlayer;
			currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		}
	});
});

const handleWin = (player) => {
	gameActive = false;
	alert(`${player} has won!`);
};

const handleDraw = () => {
	gameActive = false;
	alert('It\'s a draw!');
};

const checkWin = () => {
	const winningCombinations = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
		[1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
	];
	for (const combination of winningCombinations) {
		const [a, b, c] = combination;
		if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
			handleWin(gameBoard[a]);
			return;
		}
	}

	if (!gameBoard.includes('')) {
		handleDraw();
	}
};

const restart = () => {
	gameActive = true;
	gameBoard.fill('');
	cells.forEach((cell) => {
		cell.innerText = '';
	});
	currentPlayer = 'X';
};