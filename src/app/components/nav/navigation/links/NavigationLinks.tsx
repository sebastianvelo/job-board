import NavigationLink, { NavigationLinkProps } from "./NavigationLink";

export interface NavigationLinksProps {
    links: NavigationLinkProps[];
}

const NavigationLinks: React.FC<NavigationLinksProps> = (props: NavigationLinksProps) => {
    return (
        <div className={`hidden sm:block`}>
            {props.links.map((link, index) => (
                <NavigationLink {...link} key={index} />
            ))}
        </div>
    );
}

export default NavigationLinks;