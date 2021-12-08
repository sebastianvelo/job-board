import Pill from "components/atom/pill/Pill";
import OfferLocation, { OfferLocationProps } from "./OfferLocation";
import OfferSalary, { OfferSalaryProps } from "./OfferSalary";
import OfferTitle, { OfferTitleProps } from "./OfferTitle";

export interface OfferInfoProps
  extends OfferTitleProps,
    OfferLocationProps,
    OfferSalaryProps {}

const OfferInfo: React.FunctionComponent<OfferInfoProps> = (
  props: OfferInfoProps
) => (
  <div className={`flex flex-col space-y-6 sm:space-y-2 w-full sm:w-max`}>
    <OfferTitle title={props.title} />
    <div className={`flex items-center justify-evenly sm:justify-between`}>
      <OfferLocation location={props.location}></OfferLocation>
      <Pill>Fully Remote</Pill>
    </div>
    <OfferSalary salary={props.salary} />
  </div>
);

export default OfferInfo;
