import OfferCard, { OfferCardProps } from "./offer-card/OfferCard"

export interface OfferCardsProps {
    offers: OfferCardProps[];
}
 
const OfferCards: React.FC<OfferCardsProps> = (props: OfferCardsProps) => {
    return ( 
        <div className={`px-4 py-2 border-r w-full border-gray-400 dark:border-gray-700 h-screen overflow-scroll`}>
            {props.offers.map((offer, i) => {
                return <OfferCard key={i} {...offer} />
            })}
        </div>
     );
}
 
export default OfferCards;