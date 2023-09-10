// function generateRandomDealerCard() {
//     const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
//     const randomIndex = Math.floor(Math.random() * cards.length);
//     const randomCard = cards[randomIndex];

//     const cardnameElement = document.querySelector(".dealercardname");
//     cardnameElement.textContent = randomCard;
//     console.log(randomCard);
// }

// function generateRandomPlayerCard() {
//     const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
//     const randomIndex = Math.floor(Math.random() * cards.length);
//     const randomCard = cards[randomIndex];

//     const cardnameElement = document.querySelector(".playercardname");
//     cardnameElement.textContent = randomCard;
//     console.log(randomCard);
// }

const cards = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

function howMuchProfit(playerMoney) {
  if (playerMoney < 500) {
    return "Paisa Leke aa";
  }

  let betAmount = 500;

  const playerCard = cards[Math.floor(Math.random() * cards.length)];
  const dealerCard = cards[Math.floor(Math.random() * cards.length)];

  const playerCardValue = cards.indexOf(playerCard);
  const dealerCardValue = cards.indexOf(dealerCard);

  console.log("PCV", playerCardValue);
  console.log("DCV", dealerCardValue);

  if (playerCardValue > dealerCardValue) {
    console.log("You Won");

    playerMoney += betAmount;

  } else if (playerCardValue < dealerCardValue) {
    console.log("You Lost");

    playerMoney -= betAmount;

  } else if (playerCardValue === dealerCardValue) {

    // Tie Scenario

    console.log("There's a Tie");

    // Change Bet Amount

    let betAmount = 500;
    console.log("Tie Bet Amount is now", betAmount);

    //In a Tie Scenario draws card Again

    const playerSecondDrawnCard =
      cards[Math.floor(Math.random() * cards.length)];
    const dealerSecondDrawnCard =
      cards[Math.floor(Math.random() * cards.length)];

    const playerSecondDrawnCardValue = cards.indexOf(playerSecondDrawnCard);
    const dealerSecondDrawnCardValue = cards.indexOf(dealerSecondDrawnCard);

    console.log("PCV", playerSecondDrawnCardValue);
    console.log("DCV", dealerSecondDrawnCardValue);

    if (playerSecondDrawnCardValue > dealerSecondDrawnCardValue) {
      console.log("Tie Won");
      playerMoney += betAmount;
    } else if (playerSecondDrawnCardValue < dealerSecondDrawnCardValue) {
      console.log("Tie Lost");
      playerMoney -= betAmount;
    } else if (playerSecondDrawnCardValue === dealerSecondDrawnCardValue) {
      console.log("This is a Double Tie Lol");
    }

  return playerMoney;
}
}

// Logging the Results in Console

result = howMuchProfit(2000);
console.log(result);

// Running an Simulation for given number of rounds

// function runSimulation(playerMoney) {
//   let currentMoney = playerMoney;

//   for (i = 0; i < 20; i++) {
//     currentMoney = howMuchProfit(currentMoney);
//   }

//   return currentMoney;
// }

//Logging Simulation Results

// const simulationResult = runSimulation(10000);
// console.log("Remaining Money after 20 Rounds", simulationResult);
