import { LocationSvg } from "app/components/common/svg/Svg";
import SvgContainer from "app/components/common/svg/SvgContainer";

export interface OfferLocationProps {
    location: string;
}
 
const OfferLocation: React.FC<OfferLocationProps> = (props: OfferLocationProps) => {
    return (<SvgContainer svg={<LocationSvg />} label={props.location} />);
}
 
export default OfferLocation;