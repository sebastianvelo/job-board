import { LocationSvg } from "app/components/svg/Svg";
import SvgContainer from "app/components/svg/SvgContainer";

export interface OfferCardLocationProps {
  location: string;
}

const OfferCardLocation: React.FunctionComponent<OfferCardLocationProps> = (
  props: OfferCardLocationProps
) => <SvgContainer svg={<LocationSvg />} label={props.location} />;

export default OfferCardLocation;
