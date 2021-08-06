import Searchbar from "./searchbar/Searchbar"

export interface HomePageProps {
}
 
const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
    return ( 
        <div>
            <Searchbar />
        </div>
     );
}
 
export default HomePage;