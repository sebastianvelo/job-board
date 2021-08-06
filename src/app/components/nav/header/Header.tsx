const headerStyle = `text-2xl font-bold px-6`;

export interface HeaderProps {
    header: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (<h2 className={headerStyle}>{props.header}</h2>);
}

export default Header;