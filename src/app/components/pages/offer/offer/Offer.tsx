import OfferHeader from "./header/OfferHeader";

export interface OfferProps {
    
}
 
const Offer: React.FC<OfferProps> = () => {
    return ( 
        <div className={`border-r w-full border-gray-400 dark:border-gray-700 h-screen overflow-scroll col-span-3 lg:col-span-2`}>
            <OfferHeader />
        </div>
     );
}
 
export default Offer;