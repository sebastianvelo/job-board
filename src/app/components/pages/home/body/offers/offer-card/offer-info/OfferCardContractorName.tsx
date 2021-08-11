import { OfficeSvg } from "app/components/common/svg/Svg";
import SvgContainer from "app/components/common/svg/SvgContainer";

export interface OfferCardContractorNameProps {
    contractor: {
        name: string;
        logo: string;
    };
}
 
const OfferCardContractorName: React.FC<OfferCardContractorNameProps> = (props: OfferCardContractorNameProps) => {
    return (<SvgContainer svg={<OfficeSvg />} label={props.contractor.name} />);
}
 
export default OfferCardContractorName;