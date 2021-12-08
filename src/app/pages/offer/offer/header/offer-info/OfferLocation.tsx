import { LocationSvg } from "app/components/svg/Svg";
import SvgContainer from "app/components/svg/SvgContainer";

export interface OfferLocationProps {
  location: string;
}

const OfferLocation: React.FunctionComponent<OfferLocationProps> = (
  props: OfferLocationProps
) => <SvgContainer svg={<LocationSvg />} label={props.location} />;

export default OfferLocation;
