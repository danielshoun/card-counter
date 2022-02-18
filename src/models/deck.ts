import { CountingSystem, Suit } from "../enums";
import Card from "./card";

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
    const cards = []

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
        cards.push(card);
    }
    return cards;
}

function createDeck(system: CountingSystem) {
    switch (system) {
        default:
            return createHiLoDeck()
    }
}

export default class Deck {
    cards: Card[];
    drawnCards: Card[];

    constructor(system: CountingSystem) {
        this.cards = createDeck(system);
        this.drawnCards = [];
    }

    draw() {
        const i = Math.floor(Math.random() * this.cards.length);
        const card = this.cards.splice(i, 1)[0]
        this.drawnCards.push(card);
        return card;
    }
}