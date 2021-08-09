export interface CompanyLogoProps {
    src: string;
    alt: string;
}
 
const CompanyLogo: React.FC<CompanyLogoProps> = (props: CompanyLogoProps) => {
    return (<img className={`rounded-full shadow-xl h-32 sm:h-36  sm:self-start p-2 self-center mb-4`} src={props.src} alt={props.alt} />);
}
 
export default CompanyLogo;