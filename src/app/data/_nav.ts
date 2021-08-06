import { NavProps } from "app/components/nav/Nav";
import Routes from "app/types/enums/Routes";

const data: NavProps = {
    header: 'JobBoardIT',
    links: [
        {
            path: `${Routes.HOME}`,
            children: `Offers`
        },
        {
            path: `${Routes.HOME}`,
            children: `Brand Stories`
        },
        {
            path: `${Routes.HOME}`,
            children: `Geek`
        },
        {
            path: `${Routes.HOME}`,
            children: `Matchmaking`
        },
    ]
}
export default data;