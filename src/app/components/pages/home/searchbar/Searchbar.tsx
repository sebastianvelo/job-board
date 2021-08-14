import { background, transition } from "app/styles/Themes";

const searchbarStyle = `flex items-center w-full px-6 py-4 border-b border-gray-400 dark:border-gray-700 space-x-10 overflow-x-hidden`;
const inputStyle = `${background.secondary.get()} ${transition.default} transition-width rounded-md px-4 py-1 w-52 cursor-pointer
                    hover:outline-none hover:ring-pink-300 hover:ring-2
                    focus:outline-none focus:ring-pink-300 focus:ring-2 focus:w-full`;

export interface SearchbarProps {

}

const Searchbar: React.FC<SearchbarProps> = () => {
    return (
        <div className={searchbarStyle}>
            <input className={inputStyle} placeholder="Search..." />
            <div>
            </div>
        </div>
    );
}

export default Searchbar;