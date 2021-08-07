import OfferPage from "app/components/pages/offer/OfferPage";
import Routes from "app/types/enums/Routes";
import { MainProps } from "../components/main/Main";
import HomePage from "../components/pages/home/HomePage";
import LoginPage from "../components/pages/login/LoginPage";

const data: MainProps = {
    pages: [
        {
            route: Routes.HOME,
            component: HomePage
        },
        {
            route: Routes.LOGIN,
            component: LoginPage
        },
        {
            route: Routes.OFFER,
            component: OfferPage
        },
    ]

};

export default data;