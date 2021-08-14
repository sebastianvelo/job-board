export interface ContractorLogoProps {
    src: string;
    alt: string;
}

const ContractorLogo: React.FC<ContractorLogoProps> = (props: ContractorLogoProps) => {
    return (
        <div className={`h-20 w-20`}>
            <img className={`h-full w-full rounded-md`} src={props.src} alt={props.alt} />
        </div>
    );
}

export default ContractorLogo;