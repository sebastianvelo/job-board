import { LocationSvg } from "app/components/common/svg/Svg";
import SvgContainer from "app/components/common/svg/SvgContainer";

export interface OfferCardLocationProps {
    location: string;
}
 
const OfferCardLocation: React.FC<OfferCardLocationProps> = (props: OfferCardLocationProps) => {
    return (<SvgContainer svg={<LocationSvg />} label={props.location} />);
}
 
export default OfferCardLocation;