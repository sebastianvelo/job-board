import Pill from "app/components/common/pill/Pill";

export interface OfferDateProps {
    daysAgo: number;
}

const OfferDate: React.FC<OfferDateProps> = (props: OfferDateProps) => {
    return (
        <div className={`hidden md:block`}>
            <Pill>{props.daysAgo}d ago</Pill>
        </div>
    );
}

export default OfferDate;