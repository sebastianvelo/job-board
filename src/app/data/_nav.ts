import Routes from "app/types/enums/Routes";
import { NavProps } from "../components/nav/Nav";

const data: NavProps = {
    header: 'BestTemplate',
    links: [
        {
            pathname: Routes.HOME,
            label: "Home",
            active: false
        },
        {
            pathname: Routes.ABOUT,
            label: "About",
            active: false
        },
        {
            pathname: Routes.MORE,
            label: "More",
            active: false
        },
        {
            pathname: Routes.LOGIN,
            label: "Login",
            active: false
        },
    ],
    menu: {
        items: [
            {
                pathname: Routes.HOME,
                label: "Profile",
            },
            {
                pathname: Routes.HOME,
                label: "Settings",
            },
        ],
        toggler: {
            alt: 'Avatar',
            src: 'https://picsum.photos/200'
        }
    },
};

export default data;