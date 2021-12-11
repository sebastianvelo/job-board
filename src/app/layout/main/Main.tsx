import Page from "common/page/Page";
import useScrollTop from "common/hooks/useScrollTop";
import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";

export interface MainProps {
  pages?: Page<any>[];
}

const Main: FunctionComponent<MainProps> = (props: MainProps) => {
  useScrollTop();

  return (
    <main>
      <Routes>
        {props.pages?.map((page: Page<any>) => (
          <Route
            key={page.route}
            path={page.route}
            element={page.Component(page.props)}
          ></Route>
        ))}
      </Routes>
    </main>
  );
};

export default Main;
