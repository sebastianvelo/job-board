import Header, { HeaderProps } from "./header/Header";
import Navigation, { NavigationProps } from "./navigation/Navigation";

export interface NavProps extends HeaderProps, NavigationProps {}

const Nav: React.FC<NavProps> = (props: NavProps) => {
    return (
        <nav className={`flex justify-between items-center border-b border-gray-400 dark:border-gray-700`}>
            <Header {...props} />
            <Navigation {...props} />
        </nav>
    );
}

export default Nav;