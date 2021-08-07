import MiniCard from "./MiniCard";

export interface MiniCardsProps {

}

const MiniCards: React.FC<MiniCardsProps> = () => {
    return (
        <div className={`absolute -bottom-6 inset-x-0 flex justify-evenly h-16`}>
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
        </div>
    );
}

export default MiniCards;