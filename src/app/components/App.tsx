import { background, text } from "app/styles/Themes";
import { useState } from "react";
import data from "../data/AppData";
import Main from "./main/Main";
import Nav from "./nav/Nav";

const appStyle = `${background.primary.get()} ${text.primary.get()} h-screen overflow-hidden`;

const App: React.FC = () => {
    const [nav, setNav] = useState(data.nav);
    const [main, setMain] = useState(data.main);

    return (
        <div className={appStyle}>
            <Nav {...nav} />
            <Main {...main} />
        </div>
    );
}

export default App;