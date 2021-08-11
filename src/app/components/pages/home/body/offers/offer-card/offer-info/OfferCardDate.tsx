import Pill from "app/components/common/pill/Pill";

export interface OfferCardDateProps {
    daysAgo: number;
}

const OfferCardDate: React.FC<OfferCardDateProps> = (props: OfferCardDateProps) => {
    return (
        <div className={`hidden md:block`}>
            <Pill>{props.daysAgo}d ago</Pill>
        </div>
    );
}

export default OfferCardDate;