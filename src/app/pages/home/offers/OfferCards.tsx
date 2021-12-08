import OfferCard, { OfferCardProps } from "./offer-card/OfferCard";

export interface OfferCardsProps {
  offers: OfferCardProps[];
}

const OfferCards: React.FunctionComponent<OfferCardsProps> = (
  props: OfferCardsProps
) => (
  <div className={`px-4 py-2 w-full h-screen overflow-scroll`}>
    {props.offers.map((offer, i) => (
      <OfferCard key={i} {...offer} />
    ))}
  </div>
);

export default OfferCards;
