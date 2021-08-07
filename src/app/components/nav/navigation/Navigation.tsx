import NavigationLinks, { NavigationLinksProps } from "./links/NavigationLinks";
import LinksToggler from "./toggler/LinksToggler";

export interface NavigationProps extends NavigationLinksProps {}

const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
    return (
        <div className={`space-x-2 border-l border-gray-400 dark:border-gray-700 px-3 py-5`}>
            <LinksToggler />
            <NavigationLinks {...props} />
        </div>
    );
}

export default Navigation;