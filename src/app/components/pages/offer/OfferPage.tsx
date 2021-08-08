import { useParams } from "react-router-dom";
import Offer from "./offer/Offer";

export interface OfferPageProps {

}

const OfferPage: React.FC<OfferPageProps> = (props: OfferPageProps) => {
    const { id }: { id: string } = useParams();
    return (
        <div className={`grid grid-cols-3`}>
            <Offer />
        </div>
    );
}

export default OfferPage;