import { MainProps } from "app/components/main/Main";
import { NavProps } from "app/components/nav/Nav";
import main from "./_main";
import nav from "./_nav";

interface AppWidgetData {
    nav: NavProps;
    main: MainProps;
}

const data: AppWidgetData = {
    nav: nav,
    main: main,
};

export default data;