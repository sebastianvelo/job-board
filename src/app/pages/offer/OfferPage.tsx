import GoogleMap from "app/components/map/GoogleMap";
import offers from "app/mock/offers";
import { useParams } from "react-router-dom";
import Offer from "./offer/Offer";

export interface OfferPageProps {}

const OfferPage: React.FunctionComponent<OfferPageProps> = () => {
  const { id }: { id: string } = useParams();
  const offer = offers.find((o) => o.id === id);
  console.log(id)
  return (
    <div className={`grid grid-cols-6`}>
      {offer && <Offer {...offer} />}
      <div className="hidden lg:inline-block lg:col-span-2">
        <GoogleMap />
      </div>
    </div>
  );
};

export default OfferPage;
