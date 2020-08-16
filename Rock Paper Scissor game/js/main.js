// TO UPPERCASE THE FIRST LETTER ONLY:computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const playerResult = document.getElementById('player-result')
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close-btn')
const scoreboard = {
  player: 0,
  computer: 0
};

//play game
function play(e) {
  restart.style.play = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice, playerChoice);
}

//get computer choice
function getComputerChoice() {
  let rand = Math.random() ;
  if (rand <= 0.34) {
    return 'rock';
  } else if (rand < 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

//get game winner
function getWinner(p, c) {
  if (p === c) {
    return 'draw';
  } else if (p === 'rock') {
    if (c === 'paper') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'paper') {
    if (c === 'scissors') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'scissors') {
    if (c === 'rock') {
      return 'computer';
    } else {
      return 'player';
    }
  }
}

function showWinner(winner, computerChoice, playerChoice) {
  if (winner === 'player' && scoreboard.player < 5 && scoreboard.computer < 5) {
    //increment the player score
    scoreboard.player++;
    //show modal result
    playerResult.innerHTML = `
        <h1 style="color: #d5678f;"> PLAYER </h1>
        <h1 class="text-win"> You Win! </h1>
         <i class="fas fa-hand-${playerChoice} fa-10x"></i>
         <p>Player Chose <strong>${playerChoice.charAt(0).toUpperCase() +
      playerChoice.slice(1)}</strong>
         </p>`
    result.innerHTML = ` 
        <h1 style="color: #8c4c10;"> COMPUTER </h1> 
        <h1 class="text-lose"> Computer Lose! </h1>
         <i class="fas fa-hand-${computerChoice} fa-10x"></i>
         <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1)}</strong>
         </p>`;

  } else if (scoreboard.computer === 5) {
    playerResult.innerHTML = `
    <h1 style="color: #d5678f;"> PLAYER </h1>
    <h2 class="text-lose">HARD LUCK!</h2>
    <i class="fas fa-thumbs-down fa-10x"></i>
     <h2><strong>Player Lose!</strong><h2>
    `
    result.innerHTML = `
        <h1 style="color: #8c4c10;"> COMPUTER </h1>
        <h1 class="text-win">Winner!</h1>
        <i class="fas fa-trophy fa-10x"></i>
        <h2><strong>Computer Win!</strong></h2>`;
    restartGame();

  } else if (scoreboard.player === 5) {
    playerResult.innerHTML = `
    <h1 style="color: #d5678f;"> PLAYER </h1>
    <h2 class="text-win">CONGRATULATIONS! WINNER!</h2>
    <i class="fas fa-trophy fa-10x"></i>
    <h2><strong>Player Win!</strong><h2>
    `
    result.innerHTML = `
        <h1 style="color: #8c4c10;"> COMPUTER </h1>
        <h2 class="text-lose">OPPS!</h2>
        <i class="fas fa-thumbs-down fa-10x"></i>
         <h2><strong>Computer Lose!</strong><h2>`;

    restartGame();

  } else if (winner === 'computer' && scoreboard.computer < 5) {
    //increment the computer score
    scoreboard.computer++;

    //show modal result
    
  playerResult.innerHTML = `
     <h1 style="color: #d5678f;"> PLAYER </h1>
     <h1 class="text-lose">You Lose!</h1>
     <i class="fas fa-hand-${playerChoice} fa-10x"></i>
     <p>Player Chose <strong>${playerChoice.charAt(0).toUpperCase() +
  playerChoice.slice(1)}</strong>
     </p>`
    result.innerHTML = `
        <h1 style="color: #8c4c10;"> COMPUTER </h1>
        <h1 class="text-win">Computer Win!</h1>
         <i class="fas fa-hand-${computerChoice} fa-10x"></i>
         <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1)}</strong>
         </p>`;
  } else {
  playerResult.innerHTML = `
    <h1 style="color: #d5678f;"> PLAYER </h1>
    <h1>It's a Draw!</h1>
     <i class="fas fa-hand-${playerChoice} fa-10x"></i>
     <p>Player Chose <strong>${playerChoice.charAt(0).toUpperCase() +
  playerChoice.slice(1)}</strong>
     </p>`
    result.innerHTML = `
         <h1 style="color: #8c4c10;"> COMPUTER </h1>
         <h1>It's a Draw!</h1>
         <i class="fas fa-hand-${computerChoice} fa-10x"></i>
         <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1)}</strong>
         </p>`;
  }

  //show score
  score.innerHTML = `<p>Player:${scoreboard.player}</p>
        <p>Computer:${scoreboard.computer}</p>`;

  modal.style.display = 'flex';
}

//restart game
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
   <p>Player: 0 </p>
   <p>Computer: 0 </p>
   `;
}

//clear modal
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
  close.addEventListener("click", function () {
    modal.style.display = 'none';
  });

//event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
