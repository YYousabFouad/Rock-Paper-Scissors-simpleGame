const score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'Scissors';
  }
  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  if (computerMove === playerMove) {
    result = 'Tie';
  } else if (computerMove === 'Rock' && playerMove === 'paper') {
    result = 'You Win';
  } else if (computerMove === 'Rock' && playerMove === 'Scissors') {
    result = 'You Lose';
  } else if (computerMove === 'paper' && playerMove === 'Rock') {
    result = 'You Lose';
  } else if (computerMove === 'paper' && playerMove === 'Scissors') {
    result = 'You Win';
  } else if (computerMove === 'Scissors' && playerMove === 'Rock') {
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
  if (computerMove === 'paper' && playerMove === 'paper') {
   document.querySelector(
      '.game-result',
    ).innerHTML = `You <img src="../IMG/${playerMove}.jpg"></img>&nbsp;&nbsp; Computer <img src="../IMG/${computerMove}.jpg">
<br>
Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}`;
  } else if (computerMove === 'paper') {
    document.querySelector(
      '.game-result',
    ).innerHTML = `You <img src="../IMG/${playerMove}.png"></img>&nbsp;&nbsp; Computer <img src="../IMG/${computerMove}.jpg">
<br>
Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}`;
  } else if (playerMove === 'paper') {
    document.querySelector(
      '.game-result',
    ).innerHTML = `You <img src="../IMG/${playerMove}.jpg"></img>&nbsp;&nbsp; Computer <img src="../IMG/${computerMove}.png">
<br>
Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}`;
  } else {
    document.querySelector(
      '.game-result',
    ).innerHTML = `You <img src="../IMG/${playerMove}.png"></img>&nbsp;&nbsp; Computer <img src="../IMG/${computerMove}.png">
<br>
Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}`;
  }
}
