import Page from "app/types/page/Page";
import React from "react";
import { Route } from "react-router-dom";
import PageWrapper from "../pages/PageWrapper";

export interface MainProps {
    pages: Page[];
}

const Main: React.FC<MainProps> = (props: MainProps) => {
    const getJSX = (Component: React.FC<any>) => <Component />;
    return (
        <main>
            {props.pages.map((page: Page, i: number) => (
                <Route key={i} path={page.route}>
                    <PageWrapper route={page.route} setLinkActive={() => {}}>{getJSX(page.component)}</PageWrapper>
                </Route>
            ))}
        </main>
    );
}

export default Main;