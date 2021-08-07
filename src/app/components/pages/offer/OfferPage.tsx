import { useParams } from "react-router-dom";
import Offer from "./offer/Offer";

export interface OfferPageProps {

}

const OfferPage: React.FC<OfferPageProps> = (props: OfferPageProps) => {
    const { id }: { id: string } = useParams();
    return (
        <div className={`px-4 py-2 border-r w-full border-gray-400 dark:border-gray-700 h-screen overflow-scroll`}>
            <Offer />
        </div>
    );
}

export default OfferPage;