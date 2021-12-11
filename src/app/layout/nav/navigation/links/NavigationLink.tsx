import Link, { LinkProps } from "common/components/atom/link/Link";
import { background, transition } from "app/styles/Themes";

export interface NavigationLinkProps extends LinkProps {}

const NavigationLink: React.FunctionComponent<NavigationLinkProps> = (
  props: NavigationLinkProps
) => (
  <Link
    className={`${background.hoverable.get()} ${
      transition.default
    } px-5 py-3 rounded-md`}
    {...props}
  />
);

export default NavigationLink;
