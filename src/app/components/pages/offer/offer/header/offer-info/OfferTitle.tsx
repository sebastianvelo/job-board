export interface OfferTitleProps {
    title: string;
}
 
const OfferTitle: React.FC<OfferTitleProps> = (props: OfferTitleProps) => {
    return (<h1 className={`text-xl sm:text-2xl letter tracking-wider`}>{props.title}</h1>);
}
 
export default OfferTitle;