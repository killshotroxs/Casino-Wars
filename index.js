function generateRandomDealerCard() {
    const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];

    const cardnameElement = document.querySelector(".dealercardname");
    cardnameElement.textContent = randomCard;
    console.log(randomCard);
}

function generateRandomPlayerCard() {
    const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];

    const cardnameElement = document.querySelector(".playercardname");
    cardnameElement.textContent = randomCard;
    console.log(randomCard);
}
