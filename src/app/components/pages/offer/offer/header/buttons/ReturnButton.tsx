import Link from "app/components/common/link/Link";
import { ArrowLeftSvg } from "app/components/common/svg/Svg";
import Routes from "app/types/enums/Routes";

export interface ReturnButtonProps {

}

const ReturnButton: React.FC<ReturnButtonProps> = () => {
    return (
    <Link pathname={`${Routes.HOME}`}>
        <button className={`bg-black bg-opacity-25 px-2 py-2 rounded-full`}><ArrowLeftSvg /></button>    
    </Link>);
}

export default ReturnButton;