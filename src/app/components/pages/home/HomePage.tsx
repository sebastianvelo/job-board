import offers from "app/mock/offers";
import { offerToOfferCardList } from "app/transformer/Transformer";
import Body from "./body/Body";
import Searchbar from "./searchbar/Searchbar";

export interface HomePageProps {
}

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
    return (
        <div className="flex flex-col">
            <Searchbar />
            <Body offers={offerToOfferCardList(offers)} />
        </div>
    );
}

export default HomePage;