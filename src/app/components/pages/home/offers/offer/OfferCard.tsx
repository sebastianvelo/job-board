import { background } from "app/styles/Themes";
import CompanyLogo from "./company-logo/CompanyLogo";
import OfferData, { OfferDataProps } from "./offer-data/OfferData";

export interface OfferCardProps extends OfferDataProps {}

const OfferCard: React.FC<OfferCardProps> = (props: OfferCardProps) => {
    return (
        <div className={`${background.secondary.get()} flex items-center rounded-lg px-3 py-2 mb-2 shadow-md`}>
            <CompanyLogo src={`https://picsum.photos/200`} alt={props.company} />
            <OfferData {...props} />
        </div>
    );
}

export default OfferCard;