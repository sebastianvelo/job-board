export interface CompanyLogoProps {
    src: string;
    alt: string;
}
 
const CompanyLogo: React.FC<CompanyLogoProps> = (props: CompanyLogoProps) => {
    return (<img className={`rounded-full shadow-xl h-36`} src={props.src} alt={props.alt} />);
}
 
export default CompanyLogo;