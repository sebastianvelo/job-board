import Routes from "app/types/enums/Routes";
import { MainData } from "../components/main/Main";
import HomePage from "../components/main/pages/home/HomePage";
import LoginPage from "../components/main/pages/login/LoginPage";

const data: MainData = {
    pages: [
        {
            route: Routes.HOME,
            component: HomePage
        },
        {
            route: Routes.LOGIN,
            component: LoginPage
        },
    ]

};

export default data;