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
      
