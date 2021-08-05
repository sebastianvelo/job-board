import Routes from "app/types/enums/Routes";
import { FooterProps } from "../components/footer/Footer";

const data: FooterProps = {
    columns: [
        {
            title: 'Title 1',
            links: [
                {
                    pathname: Routes.HOME,
                    label: "Link 1"
                },
                {
                    pathname: Routes.ABOUT,
                    label: "Link 2"
                },
                {
                    pathname: Routes.MORE,
                    label: "Link 3"
                },
                {
                    pathname: Routes.LOGIN,
                    label: "Link 4"
                }
            ]
        },
        {
            title: 'Title 2',
            links: [
                {
                    pathname: Routes.HOME,
                    label: "Link 1"
                },
                {
                    pathname: Routes.ABOUT,
                    label: "Link 2"
                },
                {
                    pathname: Routes.MORE,
                    label: "Link 3"
                },
                {
                    pathname: Routes.LOGIN,
                    label: "Link 4"
                }
            ]
        },
        {
            title: 'Title 3',
            links: [
                {
                    pathname: Routes.HOME,
                    label: "Link 1"
                },
                {
                    pathname: Routes.ABOUT,
                    label: "Link 2"
                },
                {
                    pathname: Routes.MORE,
                    label: "Link 3"
                },
                {
                    pathname: Routes.LOGIN,
                    label: "Link 4"
                }
            ]
        },
        {
            title: 'Title 4',
            links: [
                {
                    pathname: Routes.HOME,
                    label: "Link 1"
                },
                {
                    pathname: Routes.ABOUT,
                    label: "Link 2"
                },
                {
                    pathname: Routes.MORE,
                    label: "Link 3"
                },
                {
                    pathname: Routes.LOGIN,
                    label: "Link 4"
                }
            ]
        }
    ],
    copyright: '© Copyright 1998 - 2021. All Rights Reserved.'
};

export default data;