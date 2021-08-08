import { OfficeSvg } from "app/components/common/svg/Svg";
import SvgContainer from "app/components/common/svg/SvgContainer";

export interface OfferContractorProps {
    contractor: string;
}
 
const OfferContractor: React.FC<OfferContractorProps> = (props: OfferContractorProps) => {
    return (<SvgContainer svg={<OfficeSvg />} label={props.contractor} />);
}
 
export default OfferContractor;