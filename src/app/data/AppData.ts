import { MainData } from "app/components/main/Main";
import { FooterProps } from "../components/footer/Footer";
import { NavProps } from "../components/nav/Nav";
import footer from "./_footer";
import main from "./_main";
import nav from "./_nav";

interface AppWidgetData {
    nav: NavProps;
    main: MainData;
    footer: FooterProps
}

const data: AppWidgetData = {
    nav: nav,
    main: main,
    footer: footer,
};

export default data;