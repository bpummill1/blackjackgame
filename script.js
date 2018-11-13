
// Blackjack Application v1.0


//Card Variables

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'],
    values = ['Ace', 'King', 'Queen', 'Jack', 'Ten',
              'Nine', 'Eight', 'Seven', 'Six', 'Five',
              'Four', 'Three', 'Two'];

//DOM Variables

/*let textArea = document.getElementById('text-area'),
    hitButton = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button'),
    newGameButton = document.getElementById('new-game-button');
*/

// Game Variables

let deck = [];
let playerCards = [];
let dealerCards = [];
let dealerCardString = '';
let playerCardString = '';

// Functions

function createDeck() {
    let deck = []
    for (suitsIdx = 0; suitsIdx < suits.length; suitsIdx++) {
        for (valuesIdx = 0; valuesIdx < values.length; valuesIdx++) {
            let card = {
                suit : suits[suitsIdx],
                value : values[valuesIdx]
            };
            deck.push(card)
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    for (let shuffledDeck = 0; shuffledDeck < deck.length; shuffledDeck++) {
         let swapIdx = Math.trunc(Math.random() * deck.length);
         let tmp = deck[swapIdx];
         deck[swapIdx] = deck[shuffledDeck];
         deck[shuffledDeck] = tmp;
    }
}

function getNextCard() {
    return deck.shift();
}

function getCardString(card) {
    return card.value + ' of ' + card.suit
}

function showDealerCards(dealerCards) {
    for (let i =0; i < dealerCards.length; i++) {
        dealerCardString += getCardString(dealerCards[i]);
    }
    return dealerCardString;
}

function showPlayerCards(playerCards) {
    for (let i =0; i < playerCards.length; i++) {
        playerCardString += getCardString(playerCards[i]);
    }
    return playerCardString;
}

// Game code

deck = createDeck();

shuffleDeck(deck);

console.log(deck.length);

dealerCards = [getNextCard(), getNextCard()];

playerCards = [getNextCard(), getNextCard()];

showDealerCards(dealerCards);

showPlayerCards(playerCards);

console.log(deck.length);

console.log(dealerCardString, ' ', playerCardString);