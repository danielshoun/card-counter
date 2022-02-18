interface CardProps {
    suit: String;
    rank: String;
}

function Card({ suit, rank }: CardProps) {
    return (
        <div>
            {`${rank}${suit}`}
        </div>
    )
}