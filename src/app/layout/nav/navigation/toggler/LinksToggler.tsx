import { HamburgerSvg } from "app/components/svg/Svg";

export interface LinksTogglerProps {}

const LinksToggler: React.FunctionComponent<LinksTogglerProps> = () => (
  <div className={`block sm:hidden`}>
    <HamburgerSvg />
  </div>
);

export default LinksToggler;
