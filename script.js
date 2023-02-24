let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let score = document.getElementById("score");
// button.addEventListener("click", shuffle);
shuffle();

function shuffle() {
  const random1 = Math.floor(Math.random() * 6) + 1;
  player1.innerHTML = `<div>
                        <img src="./assets/Dice-${random1}-b.svg.png"></img>
                      </div>`;

  const random2 = Math.floor(Math.random() * 6) + 1;
  player2.innerHTML = `<div>
                        <img src="./assets/Dice-${random2}-b.svg.png"></img>
                      </div>`;

  if (random1 > random2) {
    score.innerHTML = "Player 1 wins!!!";
  } else if (random1 < random2) {
    score.innerHTML = "Player 2 wins!!!";
  } else {
    score.innerHTML = "It's a draw!!!";
  }
}
