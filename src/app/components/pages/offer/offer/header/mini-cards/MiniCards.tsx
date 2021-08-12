import MiniCard, { MiniCardProps } from "./MiniCard";

export interface MiniCardsProps {
    cards: MiniCardProps[];
}

const MiniCards: React.FC<MiniCardsProps> = (props: MiniCardsProps) => {
    return (
        <div className={`sm:absolute -bottom-8 inset-x-0 sm:flex justify-between sm:px-4 h-44 sm:h-20 grid grid-cols-12`}>
            {props.cards.map((card) => (
                <MiniCard {...card} />
            ))}
        </div>
    );
}

export default MiniCards;