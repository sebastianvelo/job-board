import OfferBody, { OfferBodyProps } from "./body/OfferBody";
import OfferHeader, { OfferHeaderProps } from "./header/OfferHeader";

export interface OfferProps extends OfferHeaderProps, OfferBodyProps {}
 
const Offer: React.FC<OfferProps> = (props: OfferProps) => {
    return ( 
        <div className={`border-r w-full pb-20 border-gray-400 dark:border-gray-700 h-screen overflow-scroll col-span-6 lg:col-span-4 sm:space-y-14`}>
            <OfferHeader {...props} />
            <OfferBody {...props} />
        </div>
     );
}
 
export default Offer;