import OfferDescription, { OfferDescriptionProps } from "./OfferDescription";
import TechStack from "./TechStack";

export interface OfferBodyProps extends OfferDescriptionProps {}

const OfferBody: React.FunctionComponent<OfferBodyProps> = (
  props: OfferBodyProps
) => (
  <div className={`space-y-4 px-4`}>
    <TechStack />
    <OfferDescription {...props} />
  </div>
);

export default OfferBody;
