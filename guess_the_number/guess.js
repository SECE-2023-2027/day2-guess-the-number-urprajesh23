// Game state
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 0;
let highscore = 0;

// DOM elements
const againBtn = document.querySelector('.agian');
const checkBtn = document.querySelector('.check-btn');
const guessInput = document.getElementById('inputbox');
const messageEl = document.querySelector('.s-guess');
const scoreEl = document.getElementById('score');
const highscoreEl = document.getElementById('h-score');
const questionMark = document.querySelector('.q-mark');

// Initialize the game
function initGame() {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    score = 0;
    updateScore();
    messageEl.textContent = 'Start Guessing......';
    questionMark.textContent = '?';
    guessInput.value = '';
    document.body.style.backgroundColor = 'black';
}

// Update score display
function updateScore() {
    scoreEl.textContent = score;
    highscoreEl.textContent = highscore;
}

// Display message
function displayMessage(message) {
    messageEl.textContent = message;
}

// Check guess
function checkGuess() {
    const guess = Number(guessInput.value);
    
    // No input
    if (!guess || guess < 1 || guess > 20) {
        displayMessage(' Enter a number 1-20!');
        return;
    }
    
    // Correct guess
    if (guess === secretNumber) {
        displayMessage(' Correct Number!');
        questionMark.textContent = secretNumber;
        document.body.style.backgroundColor = '#60b347';
        
        // Update highscore
        if (score > highscore) {
            highscore = score;
            highscoreEl.textContent = highscore;
        }
    } 
    // Wrong guess
    else {
        score++;
        updateScore();
        displayMessage(guess > secretNumber ? ' Too high!' : ' Too low!');
    }
}

// Event listeners
checkBtn.addEventListener('click', checkGuess);
againBtn.addEventListener('click', initGame);

// Initialize on load
initGame();