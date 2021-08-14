import Map from "../../../common/map/Map";
import { OfferCardProps } from "./offers/offer-card/OfferCard";
import OfferCards from "./offers/OfferCards";

export interface BodyProps {
    offers: OfferCardProps[];
}

const Body: React.FC<BodyProps> = (props: BodyProps) => {
    return (
        <div className="grid grid-cols-3">
            <OfferCards offers={props.offers} />
            <Map />
        </div>
    );
}

export default Body;