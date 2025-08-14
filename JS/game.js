const score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }
  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  if (computerMove === playerMove) {
    result = 'Tie';
  } else if (computerMove === 'rock' && playerMove === 'paper') {
    result = 'You Win';
  } else if (computerMove === 'rock' && playerMove === 'scissors') {
    result = 'You Lose';
  } else if (computerMove === 'paper' && playerMove === 'rock') {
    result = 'You Lose';
  } else if (computerMove === 'paper' && playerMove === 'scissors') {
    result = 'You Win';
  } else if (computerMove === 'scissors' && playerMove === 'rock') {
    result = 'You Win';
  } else {
    result = 'You Lose';
  }

  if (result === 'You Win') {
    score.Wins += 1;
  } else if (result === 'You Lose') {
    score.Losses += 1;
  } else {
    score.Ties += 1;
  }
  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector(
    '.game-result',
  ).innerHTML = `You Picked ${playerMove},The Computer Picked ${computerMove}

Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}`;
}
