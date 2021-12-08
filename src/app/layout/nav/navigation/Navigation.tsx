import NavigationLinks, { NavigationLinksProps } from "./links/NavigationLinks";
import LinksToggler from "./toggler/LinksToggler";

export interface NavigationProps extends NavigationLinksProps {}

const Navigation: React.FunctionComponent<NavigationProps> = (
  props: NavigationProps
) => (
  <div className={`space-x-2 px-3 py-5`}>
    <LinksToggler />
    <NavigationLinks {...props} />
  </div>
);

export default Navigation;
