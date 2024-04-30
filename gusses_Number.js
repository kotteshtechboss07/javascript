if (myGuess === randomNumber){
    feedback.textContent = "You got it right!"
  }
  else if(myGuess > randomNumber) {
    console.log("Your guess was " + myGuess + ". That's too high. Try Again!")
  }
  else if(myGuess < randomNumber) {
    console.log("Your guess was " + myGuess + ". That's too low. Try Again!")
  }