/* LOCAL STORAGE IMPLEMENTED */


let scorerps = JSON.parse(localStorage.getItem('scorerps'))||{
  wins: 0,
  losses: 0,
  ties: 0
  };


updateScoreElement();

function updateScoreElement(){
  document.querySelector('.js-score')
  .innerHTML=`Wins: ${scorerps.wins}, Losses: ${scorerps.losses}, Ties: ${scorerps.ties}`;
}


document.querySelector('.rock-button').
  addEventListener('click',() =>{
   computeResult('rock');
  });

document.querySelector('.reset-score-button').
addEventListener('click',() =>{
  resetScore();
});


document.querySelector('.paper-button')
  .addEventListener('click',() => {
  computeResult('paper');
});

document.querySelector('.scissors-button').
addEventListener('click',() => {
  computeResult('scissors');
});

document.body.addEventListener('keydown', (event)=>
{
  if (event.key === 'r'){
    computeResult('rock');
  }
  else if (event.key === 'p'){
    computeResult('paper');
  }

  else if (event.key === 's'){
    computeResult('scissors');
  }
  else if (event.key === 'c'){
    resetScore();
  }
})


function resetScore(){
  scorerps.wins = 0; 
  scorerps.losses = 0;
  scorerps.ties = 0;
  localStorage.removeItem('scorerps')
  updateScoreElement();
}

function computeResult(playerMove){
  const computerMove = pickComputerMove();
  let result ='';
  if(playerMove === 'rock'){
    if (computerMove === 'rock'){
      result = 'Tie.';  
    }
    else if (computerMove === 'paper'){
      result = 'You lose.';
    }
    else if (computerMove === 'scissors'){
      result = 'You win.';
    }
    
  }
  else if (playerMove === 'paper'){
    
    if (computerMove === 'rock'){
      result = 'You win.';
    }
    else if (computerMove === 'paper'){
      result = 'Tie.';
    }
    else if (computerMove === 'scissors'){
      result = 'You lose.';
    }
    
  }
  else if (playerMove==='scissors'){
    if (computerMove === 'rock'){
      result = 'You lose.';
    }
    else if (computerMove === 'paper'){
      result = 'You win.'
    }
    else if (computerMove === 'scissors'){
      result = 'Tie.';
    }
  }
  if (result === 'You win.') {
    scorerps.wins += 1;
  } else if (result === 'You lose.') {
    scorerps.losses += 1;
  } else if (result === 'Tie.') {
    scorerps.ties += 1;
  }
  localStorage.setItem('scorerps', JSON.stringify(scorerps));
  updateScoreElement();
  document.querySelector('.js-result')
  .innerHTML=`${result}`;

  document.querySelector('.js-move').
  innerHTML=` You <img class="move-icon" src="${playerMove}-emoji.png"> <img class="move-icon" src="${computerMove}-emoji.png"> Computer`;
}
function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove= '';
  
  if (randomNumber>=0 && randomNumber <1/3){
    computerMove = 'rock';
  }
  else if ((randomNumber>=1/3 && randomNumber <2/3)){
    computerMove = 'paper';
  }
  else if ((randomNumber>=2/3 && randomNumber < 1)){
    computerMove = 'scissors';
  }
  return computerMove
}

let intervalId;

let isAutoPlaying = false;
function autoPlay(){
  if (!isAutoPlaying){
    intervalId = setInterval(()=>{
      const playerMove = pickComputerMove();
      computeResult(playerMove);
    },1000);
    isAutoPlaying = true;
    }
    
  else {
    clearInterval(intervalId);
    isAutoPlaying=false;
  }
}