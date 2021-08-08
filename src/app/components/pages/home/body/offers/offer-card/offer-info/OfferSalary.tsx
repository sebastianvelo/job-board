export interface OfferSalaryProps {
    salary: {
        min: string;
        max: string;
        currency: string;
    };
}

const OfferSalary: React.FC<OfferSalaryProps> = (props: OfferSalaryProps) => {
    return (
        <p className={`text-green-500 md:text-lg px-0 md:px-6`}>
            {props.salary.min} - {props.salary.max} {props.salary.currency}
        </p>
    );
}

export default OfferSalary;