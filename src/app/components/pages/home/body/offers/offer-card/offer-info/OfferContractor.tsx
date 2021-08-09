import { OfficeSvg } from "app/components/common/svg/Svg";
import SvgContainer from "app/components/common/svg/SvgContainer";

export interface OfferContractorProps {
    contractor: {
        name: string;
        logo: string;
    };
}
 
const OfferContractor: React.FC<OfferContractorProps> = (props: OfferContractorProps) => {
    return (<SvgContainer svg={<OfficeSvg />} label={props.contractor.name} />);
}
 
export default OfferContractor;