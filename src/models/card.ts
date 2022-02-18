import { CountingSystem, Suit } from '../enums';

export default class Card {
    suit: Suit;
    rank: string;
    blackjackValue: number;
    countValue: number;

    constructor(
        suit: Suit,
        rank: string,
        blackjackValue: number,
        countValue: number
    ) {
        this.suit = suit;
        this.rank = rank;
        this.blackjackValue = blackjackValue;
        this.countValue = countValue;
    }
}

function calculateSuit(i: number) {
    switch (Math.floor((i - 1) / 13)) {
        case 0:
            return Suit.Spades;
        case 1:
            return Suit.Diamonds;
        case 2:
            return Suit.Hearts;
        default:
            return Suit.Clubs;
    }
}

function calculateRank(i: number) {
    switch (i % 13) {
        case 1:
            return 'A';
        case 11:
            return 'J';
        case 12:
            return 'Q';
        case 0:
            return 'K';
        default:
            return String(i % 13);
    }
}

function createHiLoDeck() {
    const deck = []

    for(let i = 1; i <= 52; i++) {
        let suit = calculateSuit(i);
        let rank = calculateRank(i);
        const blackjackValue = i % 13 > 10 || i % 13 == 0 ? 10 : i % 13;
        let countValue;
        switch(i % 13) {
            case 0:
            case 1:
            case 10:
            case 11:
            case 12:
                countValue = -1;
                break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                countValue = 1;
                break;
            case 7:
            case 8:
            default:
                countValue = 0;
                break;
        }
        const card = new Card(suit, rank, blackjackValue, countValue);
        deck.push(card);
    }
    return deck;
}

export function createDeck(system: CountingSystem) {
    switch (system) {
        case CountingSystem.HiLo:
            return createHiLoDeck()
    }
}

console.log(createDeck(CountingSystem.HiLo));