import { background } from "app/styles/Themes";
import CompanyLogo from "./company-logo/CompanyLogo";
import OfferInfo, { OfferDataProps } from "./offer-info/OfferInfo";

export interface OfferCardProps extends OfferDataProps {}

const OfferCard: React.FC<OfferCardProps> = (props: OfferCardProps) => {
    return (
        <div className={`${background.secondary.get()} flex items-center rounded-lg px-3 py-2 mb-2 shadow-md`}>
            <CompanyLogo src={props.contractor.logo} alt={props.contractor.name} />
            <OfferInfo {...props} />
        </div>
    );
}

export default OfferCard;