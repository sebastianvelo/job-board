import offers from "app/mock/offers";
import { useParams } from "react-router-dom";
import Offer from "./offer/Offer";

export interface OfferPageProps {

}

const OfferPage: React.FC<OfferPageProps> = (props: OfferPageProps) => {
    const { id }: { id: string } = useParams();
    const offer = offers.find(offer => offer.id === id);
    return (
        <div className={`grid grid-cols-3`}>
            {offer && <Offer {...offer} />}
        </div>
    );
}

export default OfferPage;