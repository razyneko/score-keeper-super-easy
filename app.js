const p1 = {
    value: 0,
    score : document.querySelector('#player1Score'),
    button: document.querySelector('#player1Btn'),
}

const p2 = {
    value: 0,
    score: document.querySelector('#player2Score'),
    button: document.querySelector('#player2Btn'),
}

// const player1Score = document.querySelector('#player1Score');
// const player2Score = document.querySelector('#player2Score');
// const player1Button = document.querySelector('#player1Btn');
// const player2Button = document.querySelector('#player2Btn');

const resetButton = document.querySelector('#resetBtn');
const options = document.querySelector('#options');




let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {
     if (!isGameOver) {
        player.value += 1;
        if (player.value === winningScore) {
        isGameOver = true;
        player.score.style.color = 'green';
        opponent.score.style.color = 'red';
        }
        player.score.textContent = player.value;
    }
}

p1.button.addEventListener('click', function() {
    
    updateScores(p1,p2);
    // if (!isGameOver) {
    //     p1Score += 1;
    //     if (p1Score === winningScore) {
    //     isGameOver = true;
    //     player1Score.style.color = 'green';
    //     player2Score.style.color = 'red';
    //     }
    //     player1Score.textContent = p1Score;
    // }
});

p2.button.addEventListener('click', function() {
    updateScores(p2,p1);
    // if (!isGameOver) {
    //     p2Score += 1;
    //     if (p2Score === winningScore) {
    //     isGameOver = true;
    //     player2Score.style.color = 'green';
    //     player1Score.style.color = 'red';
    //     }
    //     player2Score.textContent = p2Score;
    // }
});

options.addEventListener('change', (e) => {
    winningScore = parseInt(e.target.value);
    reset();
})


function reset() {
    isGameOver = false;

    for (let p of [p1,p2]) {
        p.value = 0;
        p.score.textContent = 0;
        p.score.style.color = '';
    }
    // p1.value = 0;
    // p2.value = 0;
    // p1.score.textContent = 0;
    // p2.score.textContent = 0;
    // p1.score.style.color = '';
    // p2.score.style.color = '';
}

resetButton.addEventListener('click', reset)
