import CompanyLogo from "./CompanyLogo";
import MiniCards from "./mini-cards/MiniCards";
import OfferInfo from "./offer-info/OfferInfo";

export interface OfferHeaderProps {

}

const OfferHeader: React.FC<OfferHeaderProps> = () => {
    return (
        <div className="relative">
            <div className={`flex bg-blue-900 px-8 py-4 rounded-sm space-x-10 sm:h-56 pb-10`}>
                <CompanyLogo src={'https://picsum.photos/200'} alt={'Pepe'} />
                <OfferInfo />
            </div>
            <MiniCards /> 
        </div>

    );
}

export default OfferHeader;