import { OfficeSvg } from "app/components/svg/Svg";
import SvgContainer from "app/components/svg/SvgContainer";

export interface OfferCardContractorNameProps {
  contractor: {
    name: string;
    logo: string;
  };
}

const OfferCardContractorName: React.FunctionComponent<
  OfferCardContractorNameProps
> = (props: OfferCardContractorNameProps) => (
  <SvgContainer svg={<OfficeSvg />} label={props.contractor.name} />
);

export default OfferCardContractorName;
