var hasPlayer1Rolled = false;
var hasPlayer2Rolled = false;

function rollDice(playerNumber) {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var randomImageSource = "images/dice" + randomNumber + ".png";

  // Update the dice image
  document.querySelector(".img" + playerNumber).setAttribute("src", randomImageSource);

  // Update the player names
  var playerName = document.getElementById("player" + playerNumber + "Name").value;
  document.getElementById("name" + playerNumber).innerText = playerName ? playerName : "Player " + playerNumber;

  // Set the roll flag for the player
  if (playerNumber === 1) {
    hasPlayer1Rolled = true;
  } else if (playerNumber === 2) {
    hasPlayer2Rolled = true;
  }

  // Compare dice if both players have rolled
  if (hasPlayer1Rolled && hasPlayer2Rolled) {
    compareDice();
  }
}

function compareDice() {
  var randomNumber1 = parseInt(document.querySelector(".img1").getAttribute("src").charAt(11));
  var randomNumber2 = parseInt(document.querySelector(".img2").getAttribute("src").charAt(11));

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 " + (document.getElementById("name1").innerText || "Player 1") + " Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = (document.getElementById("name2").innerText || "Player 2") + " Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }

  // Reset the roll flags
  hasPlayer1Rolled = false;
  hasPlayer2Rolled = false;
}
