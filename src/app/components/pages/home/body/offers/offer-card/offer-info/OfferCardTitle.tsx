import Link from "app/components/common/link/Link";
import Routes from "app/types/enums/Routes";

export interface OfferCardTitleProps {
    title: string;
    id: string;
}
 
const OfferCardTitle: React.FC<OfferCardTitleProps> = (props: OfferCardTitleProps) => {
    const path = `${Routes.OFFER}`.replace(`:id`, props.id.toString());
    return (<Link pathname={path} className={`text-lg md:text-xl tracking-wider`}>{props.title}</Link>);
}
 
export default OfferCardTitle;