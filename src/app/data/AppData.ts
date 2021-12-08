import { MainProps } from "app/layout/main/Main";
import { NavProps } from "app/layout/nav/Nav";
import main from "./_main";
import nav from "./_nav";

interface AppWidgetData {
  nav: NavProps;
  main: MainProps;
}

const data: AppWidgetData = {
  nav,
  main,
};

export default data;
