import { background } from "app/styles/Themes";
import Link, { LinkProps } from "../../common/link/Link";

const navigationStyle = `space-x-2 border-l-2 border-r-2  border-gray-700  px-3 py-5`;
const linkStyle = `${background.hoverable.get()} px-5 py-3 rounded-md`;

export interface NavigationProps {
    links: LinkProps[];
}

const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
    return (
        <div className={navigationStyle}>
            {props.links.map((link, index) => (
                <Link className={linkStyle} key={index} {...link} />
            ))}
        </div>
    );
}

export default Navigation;