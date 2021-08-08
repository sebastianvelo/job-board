import Pill from "app/components/common/pill/Pill";

export interface OfferTagsProps {
    tags: string[];
}

const OfferTags: React.FC<OfferTagsProps> = (props: OfferTagsProps) => {
    return (
        <div className={`hidden sm:flex flex-wrap space-x-2.5`}>
            {props.tags.map((tag, index) =>
                <Pill key={index}>{tag}</Pill>
            )}
        </div>
    );
}

export default OfferTags;