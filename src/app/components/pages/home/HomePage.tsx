import Map from "./map/Map"
import Offers from "./offers/Offers"
import Searchbar from "./searchbar/Searchbar"
import offers from "app/mock/offers";

export interface HomePageProps {
}

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
    return (
        <div className="flex flex-col">
            <Searchbar />
            <div className="flex">
                <Offers offers={offers} />
                <Map />
            </div>
        </div>
    );
}

export default HomePage;