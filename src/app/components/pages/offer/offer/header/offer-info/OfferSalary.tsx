export interface OfferSalaryProps {
    salary: {
        min: number;
        max: number;
        currency: string;
    };
}

const OfferSalary: React.FC<OfferSalaryProps> = (props: OfferSalaryProps) => {
    return (
        <div className={`block sm:flex items-baseline`}>
            <p className={`text-md font-bold sm:text-lg`}>
                {props.salary.min.toLocaleString()} - {props.salary.max.toLocaleString()} {props.salary.currency}
            </p>
            <span className={`sm:ml-2 text-sm font-thin sm:text-md`}>gross/month - Permanent</span>
        </div>
    );
}

export default OfferSalary;