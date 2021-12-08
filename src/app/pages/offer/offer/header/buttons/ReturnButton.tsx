import Link from "components/atom/link/Link";
import { ArrowLeftSvg } from "app/components/svg/Svg";
import Routes from "app/routes/Routes";

export interface ReturnButtonProps {}

const ReturnButton: React.FunctionComponent<ReturnButtonProps> = () => (
  <Link pathname={`${Routes.HOME}`}>
    <button className={`bg-black bg-opacity-25 px-2 py-2 rounded-md`}>
      <ArrowLeftSvg />
    </button>
  </Link>
);

export default ReturnButton;
