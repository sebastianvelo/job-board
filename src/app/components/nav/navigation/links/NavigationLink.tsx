import Link, { LinkProps } from "app/components/common/link/Link";
import { background, transition } from "app/styles/Themes";

export interface NavigationLinkProps extends LinkProps {}

const NavigationLink: React.FC<NavigationLinkProps> = (props: NavigationLinkProps) => {
    return (
        <Link className={`${background.hoverable.get()} ${transition.default} px-5 py-3 rounded-md`} {...props} />
    );
}

export default NavigationLink;