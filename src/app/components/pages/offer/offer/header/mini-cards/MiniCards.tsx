import MiniCard from "./MiniCard";

export interface MiniCardsProps {

}

const MiniCards: React.FC<MiniCardsProps> = () => {
    return (
        <div className={`sm:absolute -bottom-6 inset-x-0 sm:flex justify-evenly h-44 sm:h-16 grid grid-cols-12`}>
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
        </div>
    );
}

export default MiniCards;