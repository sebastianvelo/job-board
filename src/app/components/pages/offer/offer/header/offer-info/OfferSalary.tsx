export interface OfferSalaryProps {
    salary: {
        min: string;
        max: string;
        currency: string;
    };
}

const OfferSalary: React.FC<OfferSalaryProps> = (props: OfferSalaryProps) => {
    return (
        <p className={`text-md font-bold sm:text-lg`}>
            {props.salary.min} - {props.salary.max} {props.salary.currency}
            <span className={`ml-2 text-sm font-thin sm:text-md`}>gross/month - Permanent</span> 
        </p>
    );
}

export default OfferSalary;