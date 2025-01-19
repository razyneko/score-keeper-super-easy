const player1Score = document.querySelector('#player1Score');
const player2Score = document.querySelector('#player2Score');
const player1Button = document.querySelector('#player1Btn');
const player2Button = document.querySelector('#player2Btn');
const resetButton = document.querySelector('#resetBtn');
const options = document.querySelector('#options');



let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

options.addEventListener('change', (e) => {
    winningScore = parseInt(e.target.value);
})

player1Button.addEventListener('click', function() {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
        isGameOver = true;
        player1Score.style.color = 'green';
        player2Score.style.color = 'red';
        }
        player1Score.textContent = p1Score;
    }
});

player2Button.addEventListener('click', function() {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
        isGameOver = true;
        player2Score.style.color = 'green';
        player1Score.style.color = 'red';
        }
        player2Score.textContent = p2Score;
    }
});

resetButton.addEventListener('click', function() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    player1Score.style.color = '';
    player2Score.style.color = '';
});

