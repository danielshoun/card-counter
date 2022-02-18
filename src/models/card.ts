import { Suit } from '../enums';

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