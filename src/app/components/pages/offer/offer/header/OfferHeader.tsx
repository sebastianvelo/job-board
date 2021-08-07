import CompanyLogo from "./CompanyLogo";
import MiniCard from "./mini-cards/MiniCard";
import MiniCards from "./mini-cards/MiniCards";
import OfferInfo from "./offer-info/OfferInfo";

export interface OfferHeaderProps {

}

const OfferHeader: React.SFC<OfferHeaderProps> = () => {
    return (
        <div className="relative">
            <div className={`flex bg-blue-900 items-center px-8 py-4 rounded-md space-x-10 h-56`}>
                <CompanyLogo src={'https://picsum.photos/200'} alt={'Pepe'} />
                <OfferInfo />
            </div>
            <MiniCards /> 
        </div>

    );
}

export default OfferHeader;