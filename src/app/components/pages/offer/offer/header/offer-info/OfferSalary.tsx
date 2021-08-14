export interface OfferSalaryProps {
    salary: {
        min: number;
        max: number;
        currency: string;
        paymentTime: string;
        type: string;
    };
}

const OfferSalary: React.FC<OfferSalaryProps> = (props: OfferSalaryProps) => {
    return (
        <div className={`flex items-baseline justify-center sm:justify-start`}>
            <p className={`font-bold text-lg`}>
                {props.salary.min.toLocaleString()} - {props.salary.max.toLocaleString()} {props.salary.currency}
            </p>
            <span className={`ml-2 font-thin text-md`}>{props.salary.paymentTime} - {props.salary.type}</span>
        </div>
    );
}

export default OfferSalary;