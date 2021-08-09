import Card from "app/components/common/card/Card";

export interface OfferDescriptionProps {
    description: string;
}

const OfferDescription: React.FC<OfferDescriptionProps> = (props: OfferDescriptionProps) => {
    return (
        <Card>
            <p>Description</p>
            <p>{props.description}</p>
        </Card>
    );
}

export default OfferDescription;