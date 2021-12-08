import Header, { HeaderProps } from "./header/Header";
import Navigation, { NavigationProps } from "./navigation/Navigation";
import ThemeSwitcher from "./navigation/theme-switcher/ThemeSwitcher";

export interface NavProps extends HeaderProps, NavigationProps {}

const Nav: React.FunctionComponent<NavProps> = (props: NavProps) => (
  <nav
    className={`flex justify-between items-center border-b border-gray-400 dark:border-gray-700`}
  >
    <div className={`flex items-center space-x-2`}>
      <Header {...props} />
      <ThemeSwitcher />
    </div>
    <Navigation {...props} />
  </nav>
);

export default Nav;
