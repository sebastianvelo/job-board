export interface ContractorLogoProps {
    src: string;
    alt: string;
}
 
const ContractorLogo: React.FC<ContractorLogoProps> = (props: ContractorLogoProps) => {
    return (<img className={`rounded-md shadow-xl h-32 w-32 sm:self-start self-center mb-4`} src={props.src} alt={props.alt} />);
}
 
export default ContractorLogo;