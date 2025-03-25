//This is the format of the object we are going to store
// score = {
//     wins: 0,
//     losses: 0,
//     ties: 0
// }


//Start of program. Load from localstorage if it exists, otherwise initialize default object
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties:0
};


function startGame(playerMove) {

    if (playerMove === 'reset') {
        resetGame();
    }
    else{
        
        const computerMove = pickMove();
        let result = ''
        if (playerMove === 'rock'){
            if (computerMove === 'paper'){
                result = 'You lose.';
            }
            else if (computerMove === 'scissors'){
                result = 'You win.';
            }
            else {
                result = 'Tie.';
            }
        }
        else if (playerMove === 'paper'){
            if (computerMove === 'paper'){
                result = 'Tie.';
            }
            else if (computerMove === 'scissors'){
                result = 'You lose.';
            }
            else {
                result = 'You win.';
            }
        }
        else {
            if (computerMove === 'paper'){
                result = 'You win.';
            }
            else if (computerMove === 'scissors'){
                result = 'Tie.';
            }
            else {
                result = 'You lose.';
            }
        }
        
        if (result === 'You win.'){
            score.wins += 1;
        }
        else if (result === 'You lose.'){
            score.losses += 1;
        }
        else if (result === 'Tie.') {
            score.ties += 1;
        }

        //Display to screen
        alert(`${result} You chose ${playerMove} and computer chose ${computerMove}.
            Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)

    }
    
    
    //Save to localstorage after every round
    localStorage.setItem('score', JSON.stringify(score))


}

function resetGame () {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
}

function pickMove() {
    const moves = ['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random() * 3)]
}