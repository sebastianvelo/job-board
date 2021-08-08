import Link from "app/components/common/link/Link";
import Routes from "app/types/enums/Routes";

export interface OfferTitleProps {
    title: string;
    id: number;
}
 
const OfferTitle: React.FC<OfferTitleProps> = (props: OfferTitleProps) => {
    return ( 
        <Link pathname={`${`${Routes.OFFER}`.replace(`:id`, props.id.toString())}`} className={`md:text-xl tracking-wider`}>{props.title}</Link>
     );
}
 
export default OfferTitle;