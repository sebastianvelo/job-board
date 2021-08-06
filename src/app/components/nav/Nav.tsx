import Header, { HeaderProps } from "./header/Header";
import Navigation, { NavigationProps } from "./navigation/Navigation";

const navStyle = `flex justify-between items-center border-b border-gray-700`;

export interface NavProps extends HeaderProps, NavigationProps {}

const Nav: React.FC<NavProps> = (props: NavProps) => {
    return (
        <nav className={navStyle}>
            <Header {...props} />
            <Navigation {...props} />
        </nav>
    );
}

export default Nav;