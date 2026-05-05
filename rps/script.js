function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function rps(rpsChoice) {
  let printResult = document.querySelector('h2');
  let choice = getRandomInt(3);
  if (rpsChoice == "rock") {
    if (choice == 2) {
      printResult.innerHTML = "The robot guessed rock. You tied foolingli, try again";
    } else if (choice == 1) {
      printResult.innerHTML = "The robot guessed paper. You lost fella, fool";
    } else {
      printResult.innerHTML = "The robot guessed scissors. You won broski";
    }
  }
  if (rpsChoice == "paper") {
    if (choice == 2) {
      printResult.innerHTML = "The robot guessed rock. You won bro!";
    } else if (choice == 1) {
      printResult.innerHTML = "The robot guessed paper. You tied broski, try again";
    } else {
      printResult.innerHTML = "The robot guessed scissors. lost, fella";
    }
  }
  if (rpsChoice == "scissors") {
    if (choice == 2) {
      printResult.innerHTML = "The robot guessed rock. You lsot fella ";
    } else if (choice == 1) {
      printResult.innerHTML = "The robot guessed paper. You won broski";
    } else {
      printResult.innerHTML = "The robot guessed scissors. You tied fella , try again";
    }
  }
}
