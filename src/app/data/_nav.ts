import { NavProps } from "app/components/nav/Nav";
import Routes from "app/types/enums/Routes";

const data: NavProps = {
    header: 'JobBoardIT',
    links: [
        {
            pathname: `${Routes.HOME}`,
            children: `Offers`
        },
        {
            pathname: `${Routes.LOGIN}`,
            children: `Login`
        },
    ]
}
export default data;