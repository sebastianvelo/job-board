import { LocationSvg } from "app/components/common/svg/Svg";
import SvgContainer from "./common/SvgContainer";

export interface OfferLocationProps {
    location: string;
}
 
const OfferLocation: React.FC<OfferLocationProps> = (props: OfferLocationProps) => {
    return ( 
        <SvgContainer svg={<LocationSvg />} label={props.location} />
     );
}
 
export default OfferLocation;