'use strict';
/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = "Correct Number!";
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').textContent = 10; 
console.log(document.querySelector('.guess').textContent); */

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function()
{
  const guess= Number((document.querySelector('.guess').value));
  console.log(guess, typeof guess);

  if (!guess)
  {
    document.querySelector('.message').textContent = "No Number!";
  }

  else if (guess === secretNum)
  {
    document.querySelector('.message').textContent = "Correct Number!";
    
    document.querySelector('.number').textContent = secretNum;


    document.querySelector('body').style.backgroundColor = "#60b347";
    document.querySelector('.number').style.width = "30rem";

    if (score > highScore)
    {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  else if (guess !== secretNum)
  {
    if (score > 1)
    {
        document.querySelector('.message').textContent = guess>secretNum? "Too high!" : "Too Low" ;
       
        score--;
        document.querySelector('.score').textContent = score;
    }
    else
    {
        document.querySelector('.message').textContent = "You lost the game!";
        document.querySelector('.score').textContent = 0;
    }
  }
  
});

document.querySelector('.again').addEventListener('click', function()
{
   score = 20;
   secretNum = Math.trunc(Math.random() * 20) + 1;
   
   document.querySelector('.message').textContent = 'Start guessing...';
  

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = "#222";
  document.querySelector('.number').style.width = "15rem";
});