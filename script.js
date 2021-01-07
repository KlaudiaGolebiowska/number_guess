'use strict';
// console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = '🥳 CORRECT!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no number given
  if (!guess) {
    document.querySelector('.message').textContent = ' 🚫 No number!';
  }

  // When player win the game
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 CORRECT!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }

  // When number given is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '🤦 Ups, you lost my simple game...';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FB3640';
      document.querySelector('.number').style.width = '30rem';
    }
  }

  //When number given is too small
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '🤦  Oh no, you lost my simple game...';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FB3640';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});
