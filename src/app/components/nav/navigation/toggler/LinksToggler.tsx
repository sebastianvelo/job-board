import { HamburgerSvg } from "app/components/common/svg/Svg";

export interface LinksTogglerProps {

}

const LinksToggler: React.FC<LinksTogglerProps> = () => {
    return (
        <div className={`block sm:hidden`}>
            <HamburgerSvg />
        </div>
    );
}

export default LinksToggler;