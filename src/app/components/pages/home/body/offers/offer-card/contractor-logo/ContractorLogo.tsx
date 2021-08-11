export interface ContractorLogoProps {
    src: string;
    alt: string;
}

const ContractorLogo: React.FC<ContractorLogoProps> = (props: ContractorLogoProps) => {
    return (
        <div className={`h-20 w-28`}>
            <img className={`h-full w-full  rounded-lg`} src={props.src} alt={props.alt} />
        </div>
    );
}

export default ContractorLogo;