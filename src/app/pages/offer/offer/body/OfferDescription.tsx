import Card from "app/components/card/Card";

export interface OfferDescriptionProps {
  description: string;
}

const OfferDescription: React.FunctionComponent<OfferDescriptionProps> = (
  props: OfferDescriptionProps
) => (
  <Card>
    <p>Description</p>
    <p>{props.description}</p>
  </Card>
);

export default OfferDescription;
