export interface OfferTitleProps {
  title: string;
}

const OfferTitle: React.FunctionComponent<OfferTitleProps> = (
  props: OfferTitleProps
) => (
  <h1
    className={`text-2xl sm:text-3xl letter tracking-wider text-center sm:text-left`}
  >
    {props.title}
  </h1>
);

export default OfferTitle;
