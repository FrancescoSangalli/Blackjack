let player = {
  name: "Gallo",
  chips: 1000
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
const start = document.querySelector(".start");
const newCard = document.querySelector(".new");
const msg = document.querySelector(".msg");
const tot = document.querySelector(".sum");
const cardsText = document.querySelector(".cards");
const playerEl = document.querySelector(".player");

playerEl.textContent = `${player.name}: ${player.chips}€`

function getRandomCard() {
  let randomNum = Math.ceil(Math.random() * 13);

  if (randomNum === 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else {
    return randomNum;
  }
}

start.addEventListener("click", startGame);

function startGame() {
  isAlive = true;
  hasBlackJack = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardsText.textContent = "Carte: ";

  for (let i = 0; i < cards.length; i++) {
    cardsText.textContent += `${cards[i]} `;
  }
  tot.textContent = `Tot: ${sum}`;

  if (sum <= 20) {
    message = "Vuoi pescare di nuovo?";
  } else if (sum === 21) {
    message = "Blackjack!!!";
    player.chips += 50;
    playerEl.textContent = `${player.name}: ${player.chips}€`
    hasBlackJack = true;
  } else {
    message = "Hai perso!";
    player.chips -= 5;
    playerEl.textContent = `${player.name}: ${player.chips}€`
    isAlive = false;
  }

  msg.textContent = message;
}

newCard.addEventListener("click", () => {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
});
