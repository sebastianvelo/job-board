import Map from "app/components/common/map/Map";
import Searchbar, { SearchbarProps } from "./searchbar/Searchbar";
import OfferCards, { OfferCardsProps } from "./offers/OfferCards";

export interface BodyProps extends OfferCardsProps, SearchbarProps {}

const Body: React.FC<BodyProps> = (props: BodyProps) => {
    return (
        <div className="grid grid-cols-3">
            <div className="col-span-3 lg:col-span-2 border-r border-gray-400 dark:border-gray-700">
                <Searchbar {...props} />
                <OfferCards {...props} />
            </div>
            <Map />
        </div>
    );
}

export default Body;