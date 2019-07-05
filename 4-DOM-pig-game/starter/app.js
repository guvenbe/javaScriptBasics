/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, previousDice1, previousDice2;


init();

//btn is the callBack function. This is a function called by another function
document.querySelector('.btn-roll').addEventListener('click', function () {


    if (gamePlaying) {

        // 1. Random number
        // var dice1 = Math.floor(Math.random() * 6) + 1;
        // var dice2 = Math.floor(Math.random() * 6) + 1;
        var dice1 =6;
        var dice2 =6;

        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';

        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        if ((previousDice1 === 6) && (previousDice2 === 6) && (dice1 === 6) && (dice2 === 6)) {
                 scores[activePlayer]=0;
                 document.querySelector('#score-' + activePlayer).innerHTML = '<em><strong>'
                     + scores[activePlayer] + '</strong></em>';
                 nextPlayer();
        } else {
            //Update the round score If the rolled number was not a 1
            if (dice1 !== 1 && dice2 !== 1) {
                //Add score
                roundScore += dice1 + dice2;
                if((dice1===6) &&(dice2===6)){
                    console.log('here' + activePlayer)
                    document.getElementById('player-Last-Sixes-' + activePlayer).style.visibility='true';
                }else {
                    document.getElementById('player-Last-Sixes-' + activePlayer).style.display='none';
                }

                document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + roundScore + '</em>';
            } else {
                //Next player
                nextPlayer();
            }

            previousDice1 = dice1;
            previousDice2 = dice2;

        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).innerHTML = '<em><strong>'
            + scores[activePlayer] + '</strong></em>';

        var scoreInput = document.querySelector('.final-score').value;
        var winningScore;
        console.log(scoreInput);

        if (scoreInput) {
            winningScore = scoreInput;
        } else {
            winningScore = 100;
        }
        //Check if the player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).innerHTML = 'WINNER!'
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        } else {
            //console.log('going to next player');
            nextPlayer();
        }

    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    roundScore = 0;
    previousDice1 = 0;
    previousDice2 = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.getElementById('current-0').innerHTML = '<em><strong>' + 0 + '</strong></em>';
    document.getElementById('current-1').innerHTML = '<em><strong>' + 0 + '</strong></em>';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
//    document.querySelector('.player-0-panel').classList.remove('active');
//    document.querySelector('.player-0-panel').classList.add('active');
   document.getElementById('dice-1').style.display = 'none';
   document.getElementById('dice-2').style.display = 'none';

}

function init() {

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.getElementById('player-Last-Sixes-0').style.display='none';
    document.getElementById('player-Last-Sixes-1').style.display='none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').innerHTML = 'Player 1'
    document.getElementById('name-1').innerHTML = 'Player 2'
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.final-score').value=100;


}


