import { background } from "app/styles/Themes";
import ContractorLogo from "./contractor-logo/ContractorLogo";
import OfferCardInfo, { OfferCardInfoProps } from "./offer-info/OfferCardInfo";

export interface OfferCardProps extends OfferCardInfoProps {}

const OfferCard: React.FC<OfferCardProps> = (props: OfferCardProps) => {
    return (
        <div className={`${background.secondary.get()} flex items-center rounded-lg px-3 py-2 mb-2 shadow-md`}>
            <ContractorLogo src={props.contractor.logo} alt={props.contractor.name} />
            <OfferCardInfo {...props} />
        </div>
    );
}

export default OfferCard;