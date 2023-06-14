const score= {
  wins: 0,
  losses: 0,
  ties: 0
};
 
updateScoreElement();

    console.log(JSON.parse(localStorage.getItem('score')));
function playGame(playerMove){
  const computerMove= pickComputerMove();
  let result = ' ';
  if(playerMove==='scissors')
  {if(computerMove==='rock'){result='You lose.';}
  else if(computerMove==='paper'){
    result = 'You win.';
  }
else if(computerMove==='scissors'){result='Tie.';}}
else if(playerMove==='paper'){
  if(computerMove==='rock'){
    result='You win.';
  }
  else if(computerMove==='paper'){
    result='Tie.';
  }
  else if(computerMove==='scissors'){result='You lose.';}
}
else if(playerMove==='rock'){
  if(computerMove==='rock'){
    result='Tie.';
  }
  else if(computerMove==='paper'){
    result='You lose.';
  }
  else if(computerMove==='scissors'){result='You win.';}
}

        if(result==='You win.'){
          score.wins+=1;
        }
        else if(result==='You lose.'){score.losses+=1;}
        else if(result==='Tie.'){score.ties+=1;}


        
        localStorage.setItem('score', JSON.stringify(score));
updateScoreElement();

        document.querySelector('.moves').innerHTML = result;
        
        document.querySelector('.rezultat').innerHTML = `You <img src="images/${playerMove}-emoji.png"class="move-icon" >
        <img src="images/${computerMove}-emoji.png"
        class="move-icon">
        Computer
        `;

   
    return [computerMove,result];
}
function updateScoreElement(){
  document.querySelector('.result').innerHTML = `Wins:${score.wins} Losses:${score.losses} Ties${score.ties}`;
}

function resetscore(){
score.wins=0;
score.ties=0;
score.losses=0;
localStorage.removeItem('score');

}
document.querySelector('.reset-button').addEventListener(('click'),()=>{
  
  document.querySelector('.are').innerHTML = 
  `Are you sure you want to reset the score?<button class="yes" onclick=" document.querySelector('.are').innerHTML = 
  ' ';
  resetscore();updateScoreElement();">Yes</button>
  <button class="no" onclick=" document.querySelector('.are').innerHTML = 
  ' ';">No</button>`
  
})



let computerMove= '';
      function pickComputerMove()
      {
        const randomNumber = Math.random();
        if(randomNumber>=0&&randomNumber<1/3){computerMove= 'rock';}
        else if(randomNumber>=1/3&&randomNumber<=2/3){computerMove = 'paper';}
        else if(randomNumber>2/3&&randomNumber<1){computerMove='scissors';}
        return computerMove;
       
      }
      let intervalId;
      let isAutoPlaying=false;
let auto;
      document.querySelector('.auto-play').addEventListener(('click'),auto=()=>{
                if(!isAutoPlaying){intervalId=setInterval(()=>{
          const playerMove=pickComputerMove();
          playGame(playerMove);
         },1000)
         document.querySelector('.auto-play').innerHTML='Stop Playing';
         isAutoPlaying=true;
        }
        else{
          clearInterval(intervalId);
          document.querySelector('.auto-play').innerHTML='Auto Play';
          isAutoPlaying=false;
        }
      })

      document.body.addEventListener('keydown',(event)=>{
        if(event.key==='r'){
          playGame('rock')
        }
        else if(event.key==='p'){
          playGame('paper')
        }
        else if(event.key==='s'){
          playGame('scissors')
        }
        else if(event.key==='a'){
          auto();  
        }
        else if(event.key==="Backspace"){
      resetscore();

        }
      });