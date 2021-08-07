import OfferCard, { OfferCardProps } from "./offer/OfferCard"

export interface OffersProps {
    offers: OfferCardProps[];
}
 
const Offers: React.FC<OffersProps> = (props: OffersProps) => {
    return ( 
        <div className={`px-4 py-2 border-r w-full border-gray-400 dark:border-gray-700 h-screen overflow-scroll`}>
            {props.offers.map((offer, i) => {
                return <OfferCard key={i} {...offer} />
            })}
        </div>
     );
}
 
export default Offers;