'use strict';

const player0El= document.querySelector('.player--0');
const player1El= document.querySelector('.player--1')
const score1=document.getElementById('score--0').textContent = 0;
const score2= document.getElementById('score--1').textcontent = 0;
const btnNew=document.querySelector('.btn--new');
const btnRoll =document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const current0El= document.getElementById('current--0');
const current1El= document.getElementById('current--1');
const diceEl =document.querySelector('.dice');
diceEl.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer= function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    activePlayer= activePlayer=== 0? 1: 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active'); 
}

btnRoll.addEventListener("click", function () {

    
   
    // generating dice roll
   
    const dice= Math.trunc(Math.random()*6) +1;

    //display dice
   
    diceEl.classList.remove('hidden');
   
    diceEl.src= `dice-${dice}.png`;

    //check if rolled 1
    if (dice !==1) 
    
    {//add dice to current score
        currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        current0El.textContent= currentScore;
         }
else{

    //switchto next player
    switchPlayer();
}

});

btnHold.addEventListener('click', function(){
    //add current score to active player
    scores[activePlayer] += currentScore;
    Document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //check if players score>=100


    //switch to next player
    switchPlayer();
})
