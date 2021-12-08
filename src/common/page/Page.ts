import Routes from "app/routes/Routes";
import { FunctionComponent } from "react";

interface Page<T> {
  route: Routes;
  props?: T;
  Component: FunctionComponent<any>;
}
export default Page;
