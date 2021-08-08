import offers from "app/mock/offers";
import Offers from "./offers/Offers";
import Map from "./map/Map";

export interface BodyProps {

}

const Body: React.FC<BodyProps> = () => {
    return (
        <div className="flex">
            <Offers offers={offers} />
            <Map />
        </div>
    );
}

export default Body;