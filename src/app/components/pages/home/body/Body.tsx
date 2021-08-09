import offers from "app/mock/offers";
import OfferCards from "./offers/Offers";
import Map from "./map/Map";
import { offerToOfferCardList } from "app/transformer/Transformer";

export interface BodyProps {

}

const Body: React.FC<BodyProps> = () => {
    return (
        <div className="flex">
            <OfferCards offers={offerToOfferCardList(offers)} />
            <Map />
        </div>
    );
}

export default Body;