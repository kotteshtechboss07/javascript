// 'use strict';
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click'), function () {
//   const guess = Number
//   console.log(guess, typeof guess);

  // When there is no input
// 
'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click'), function (){
  
}

if (guess === randomNumber){
    feedback.textContent = "You got it right!"
  }
  else if(guess > randomNumber) {
    console.log("Your guess was " + guess + ". That's too high. Try Again!")
  }
  else if(guess < randomNumber) {
    console.log("Your guess was " + guess + ". That's too low. Try Again!")
  };