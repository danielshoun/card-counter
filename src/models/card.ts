class Card {
    suit: String;
    rank: String;
    blackjackValue: Number;
    countValue: Number;

    constructor(
        suit: String,
        rank: String,
        blackjackValue: Number,
        countValue: Number
    ) {
        this.suit = suit;
        this.rank = rank;
        this.blackjackValue = blackjackValue;
        this.countValue = countValue;
    }
}

const card = new Card();