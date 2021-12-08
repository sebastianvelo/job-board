export interface OfferCardSalaryProps {
  salary: {
    min: number;
    max: number;
    currency: string;
  };
}

const OfferCardSalary: React.FunctionComponent<OfferCardSalaryProps> = (
  props: OfferCardSalaryProps
) => (
  <p className={`text-green-500 md:text-lg px-0 md:px-6`}>
    {props.salary.min.toLocaleString()} - {props.salary.max.toLocaleString()}{" "}
    {props.salary.currency}
  </p>
);

export default OfferCardSalary;
