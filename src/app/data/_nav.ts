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
            pathname: `${Routes.HOME}`,
            children: `Brand Stories`
        },
        {
            pathname: `${Routes.HOME}`,
            children: `Geek`
        },
        {
            pathname: `${Routes.HOME}`,
            children: `Matchmaking`
        },
    ]
}
export default data;