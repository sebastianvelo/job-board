export interface ContractorLogoProps {
    src: string;
    alt: string;
}
 
const ContractorLogo: React.FC<ContractorLogoProps> = (props: ContractorLogoProps) => {
    return (<img className={`rounded-full shadow-xl h-32 w-32 sm:h-36 sm:w-36 sm:self-start self-center mb-4`} src={props.src} alt={props.alt} />);
}
 
export default ContractorLogo;