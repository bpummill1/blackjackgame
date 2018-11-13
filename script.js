
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
let dealerScore = 0;
let playerScore = 0;

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
    for (let i = 0; i < deck.length; i++) {
         let swapIdx = Math.trunc(Math.random() * deck.length);
         let tmp = deck[swapIdx];
         deck[swapIdx] = deck[i];
         deck[i] = tmp;
    }
}

function getNextCard() {
    return deck.shift();
}

function getCardString(card) {
    return card.value + ' of ' + card.suit + ' '
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

function getCardNumericValue(card) {
    switch(card.value) {
        case 'Ace':
            return 1;
        case 'Two':
            return 2;
        case 'Three':
            return 3;
        case 'Four':
            return 4;
        case 'Five':
            return 5;
        case 'Six':
            return 6;
        case 'Seven':
            return 7;
        case 'Eight':
            return 8;
        case 'Nine':
            return 9;
        default:
            return 10;
    }
}

function getScore (cardArray) {
    let score = 0;
    let hasAce = false;
    for (let i=0; i < cardArray.length; i++) {
       let card = cardArray [i];
       score += getCardNumericValue(card);
       if (card.value === 'Ace') {
           hasAce = true;
       }
    }
    if (hasAce=true && score + 10 <= 21) {
        return score + 10;
    }
    return score;
}

// Game code

deck = createDeck();

shuffleDeck(deck);

dealerCards = [getNextCard(), getNextCard()];

playerCards = [getNextCard(), getNextCard()];

showDealerCards(dealerCards);

showPlayerCards(playerCards);

console.log('Dealer has: ', dealerCardString, ' ','You have: ', playerCardString);