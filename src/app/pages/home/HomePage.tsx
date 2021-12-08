import GoogleMap from "app/components/map/GoogleMap";
import Offer from "app/entities/Offer";
import offersMock from "app/mock/offers";
import { offerToOfferCardList } from "app/transformer/Transformer";
import { useEffect, useState } from "react";
import OfferCards from "./offers/OfferCards";
import Searchbar from "./searchbar/Searchbar";

export interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const [query, setQuery] = useState("");
  const [offers, setOffers] = useState<Offer[]>(offersMock);

  const getOffers = () => offerToOfferCardList(offers);

  const searchInTitles = (offer: Offer) =>
    offer.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;

  const searchInTags = (offer: Offer) =>
    offer.tags.some(
      (tag) => tag.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

  useEffect(() => {
    setOffers(
      offersMock.filter((offer) => searchInTitles(offer) || searchInTags(offer))
    );
  }, [query]);

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3">
        <div className="col-span-3 lg:col-span-2 border-r border-gray-400 dark:border-gray-700">
          <Searchbar onSearch={setQuery} />
          <OfferCards offers={getOffers()} />
        </div>
        <GoogleMap />
      </div>
    </div>
  );
};

export default HomePage;
