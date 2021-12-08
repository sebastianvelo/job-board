import NavigationLink, { NavigationLinkProps } from "./NavigationLink";

export interface NavigationLinksProps {
  links: NavigationLinkProps[];
}

const NavigationLinks: React.FunctionComponent<NavigationLinksProps> = (
  props: NavigationLinksProps
) => (
  <div className={`hidden sm:block sm:space-x-2`}>
    {props.links.map((link, index) => (
      <NavigationLink {...link} key={index} />
    ))}
  </div>
);

export default NavigationLinks;
