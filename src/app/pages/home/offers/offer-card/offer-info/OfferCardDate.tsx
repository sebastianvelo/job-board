import Pill from "components/atom/pill/Pill";

export interface OfferCardDateProps {
  daysAgo: number;
}

const OfferCardDate: React.FunctionComponent<OfferCardDateProps> = (
  props: OfferCardDateProps
) => (
  <div className={`hidden md:block`}>
    <Pill>{props.daysAgo}d ago</Pill>
  </div>
);

export default OfferCardDate;
