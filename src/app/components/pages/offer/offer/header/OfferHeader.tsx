import { offerToMiniCards } from "app/transformer/Transformer";
import ReturnButton from "./buttons/ReturnButton";
import ContractorLogo from "./contractor-logo/ContractorLogo";
import MiniCards from "./mini-cards/MiniCards";
import OfferInfo, { OfferInfoProps } from "./offer-info/OfferInfo";

export interface OfferHeaderProps extends OfferInfoProps {
    contractor: {
        name: string;
        logo: string;
        employees: number;
    },
    seniority: string;
    date: string;
    location: string;
}

const OfferHeader: React.FC<OfferHeaderProps> = (props: OfferHeaderProps) => {
    return (
        <div className="relative mb-12 sm:px-4">
            <div className={`bg-opacity-20 bg-pink-500 px-4 py-2 space-y-4 pb-10 h-auto sm:h-72`}>
                <ReturnButton />
                <div className={`flex flex-col sm:flex-row sm:space-x-10 space-y-2 items-baseline`}>
                    <ContractorLogo src={props.contractor.logo} alt={props.contractor.name} />
                    <OfferInfo {...props} />
                </div>
            </div>
            <MiniCards cards={offerToMiniCards({ ...props })} />
        </div>

    );
}

export default OfferHeader;