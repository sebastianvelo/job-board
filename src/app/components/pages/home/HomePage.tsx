import Offer from "app/entities/Offer";
import offersMock from "app/mock/offers";
import { offerToOfferCardList } from "app/transformer/Transformer";
import { useState } from "react";
import Body from "./body/Body";

export interface HomePageProps {
}

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
    const [offers, setOffers] = useState<Offer[]>(offersMock);

    const searchInTitles = (query: string, offer: Offer) => {
        return offer.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    }

    const searchInTags = (query: string, offer: Offer) => {
        return offer.tags.some(tag => tag.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    
    const filterOffers = (input: string) => {
        if (!input) setOffers(offersMock);

        setOffers(offersMock.filter(offer => {
            return searchInTitles(input, offer) || searchInTags(input, offer);
        }));
    }

    const getOffers = () => offerToOfferCardList(offers);

    return (
        <div className="flex flex-col">
            <Body offers={getOffers()} onSearch={filterOffers} />
        </div>
    );
}

export default HomePage;