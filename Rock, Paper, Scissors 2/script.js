const choices = document.querySelectorAll('.choice-btn');
const playerHand = document.getElementById('player-hand');
const computerHand = document.getElementById('computer-hand');
const resultText = document.getElementById('result');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const resetBtn = document.getElementById('reset-btn');

let playerScore = 0;
let computerScore = 0;

const emojis = {
  rock: '✊',
  paper: '✋',
  scissors: '✌️'
};

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * 3)];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "It's a Draw! 🤝";
  
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You Win! 🎉";
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "Computer Wins! 😢";
  }
}

function playGame(playerChoice) {
  // Disable buttons during animation
  choices.forEach(btn => btn.disabled = true);
  
  const computerChoice = getComputerChoice();
  
  // Show hands with shake animation
  playerHand.classList.add('shake');
  computerHand.classList.add('shake');
  
  playerHand.textContent = emojis[playerChoice];
  computerHand.textContent = '❔';
  
  setTimeout(() => {
    computerHand.textContent = emojis[computerChoice];
    playerHand.classList.remove('shake');
    computerHand.classList.remove('shake');
    
    const result = determineWinner(playerChoice, computerChoice);
    resultText.textContent = result;
    
    // Add color to result
    if (result.includes("Win")) {
      resultText.style.color = "#2ed573";
    } else if (result.includes("Computer")) {
      resultText.style.color = "#ff4757";
    } else {
      resultText.style.color = "#ffa502";
    }
    
    // Re-enable buttons
    choices.forEach(btn => btn.disabled = false);
  }, 800);
}

// Event listeners
choices.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.getAttribute('data-choice');
    playGame(playerChoice);
  });
});

resetBtn.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = '0';
  computerScoreEl.textContent = '0';
  resultText.textContent = "Scores reset! Make your choice!";
  resultText.style.color = "#fff";
  playerHand.textContent = '❔';
  computerHand.textContent = '❔';
});

// Keyboard support (optional)
document.addEventListener('keydown', (e) => {
  if (e.key === 'r' || e.key === 'R') playGame('rock');
  if (e.key === 'p' || e.key === 'P') playGame('paper');
  if (e.key === 's' || e.key === 'S') playGame('scissors');
});