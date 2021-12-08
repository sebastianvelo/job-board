import { MainProps } from "app/layout/main/Main";
import HomePage from "app/pages/home/HomePage";
import LoginPage from "app/pages/login/LoginPage";
import OfferPage from "app/pages/offer/OfferPage";
import Routes from "app/routes/Routes";

const data: MainProps = {
  pages: [
    {
      route: Routes.HOME,
      Component: HomePage,
      props: {},
    },
    {
      route: Routes.LOGIN,
      Component: LoginPage,
      props: {},
    },
    {
      route: Routes.OFFER,
      Component: OfferPage,
    },
  ],
};

export default data;
