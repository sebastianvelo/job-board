import Body from "./body/Body";
import Searchbar from "./searchbar/Searchbar";

export interface HomePageProps {
}

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
    return (
        <div className="flex flex-col">
            <Searchbar />
            <Body />
        </div>
    );
}

export default HomePage;