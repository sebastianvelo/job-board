export interface CompanyLogoProps {
    src: string;
    alt: string;
}

const CompanyLogo: React.FC<CompanyLogoProps> = (props: CompanyLogoProps) => {
    return (<img className={`h-20 w-32 rounded-lg`} src={props.src} alt={props.alt} />);
}

export default CompanyLogo;