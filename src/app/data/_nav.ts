import { NavProps } from "app/layout/nav/Nav";
import Routes from "app/routes/Routes";

const data: NavProps = {
  header: "JobBoardIT",
  links: [
    {
      pathname: `${Routes.HOME}`,
      children: `Offers`,
    },
    {
      pathname: `${Routes.LOGIN}`,
      children: `Login`,
    },
  ],
};
export default data;
