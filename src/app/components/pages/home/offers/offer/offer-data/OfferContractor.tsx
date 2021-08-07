import { OfficeSvg } from "app/components/common/svg/Svg";
import SvgContainer from "./common/SvgContainer";

export interface OfferContractorProps {
    company: string;
}
 
const OfferContractor: React.FC<OfferContractorProps> = (props: OfferContractorProps) => {
    return ( 
        <SvgContainer svg={<OfficeSvg />} label={props.company} />
     );
}
 
export default OfferContractor;