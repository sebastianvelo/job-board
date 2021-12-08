import Pill from "components/atom/pill/Pill";

export interface OfferCardTagsProps {
  tags: string[];
}

const OfferCardTags: React.FunctionComponent<OfferCardTagsProps> = (
  props: OfferCardTagsProps
) => (
  <div className={`hidden sm:flex flex-wrap space-x-2.5`}>
    {props.tags.map((tag, index) => (
      <Pill key={index}>{tag}</Pill>
    ))}
  </div>
);

export default OfferCardTags;
