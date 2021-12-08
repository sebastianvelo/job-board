import Routes from "app/routes/Routes";
import { useEffect } from "react";

export interface PageWrapperProps {
  route: Routes;
  setLinkActive: (route: Routes) => void;
  children?: React.ReactNode;
}

const PageWrapper: React.FunctionComponent<PageWrapperProps> = (
  props: PageWrapperProps
) => {
  useEffect(() => props.setLinkActive(props.route), []);
  return <>{props.children}</>;
};

export default PageWrapper;
