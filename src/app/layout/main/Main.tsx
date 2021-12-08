import useScrollTop from "common/hooks/useScrollTop";
import Page from "common/page/Page";
import { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";

export interface MainProps {
  pages?: Page<any>[];
}

const Main: FunctionComponent<MainProps> = (props: MainProps) => {
  useScrollTop();

  return (
    <main>
      <Switch>
        {props.pages?.map((page: Page<any>) => (
          <Route key={page.route} exact path={page.route}>
            {page.Component(page.props)}
          </Route>
        ))}
      </Switch>
    </main>
  );
};

export default Main;
