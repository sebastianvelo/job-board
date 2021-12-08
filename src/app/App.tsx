import { background, text } from "app/styles/Themes";
import { useState } from "react";
import data from "./data/AppData";
import Main from "./layout/main/Main";
import Nav from "./layout/nav/Nav";

const appStyle = `${background.primary.get()} ${text.primary.get()} h-screen overflow-hidden`;

const App: React.FunctionComponent = () => {
  const [nav, ] = useState(data.nav);
  const [main, ] = useState(data.main);

  return (
    <div className={appStyle}>
      <Nav {...nav} />
      <Main {...main} />
    </div>
  );
};

export default App;
