import { background, transition } from "app/styles/Themes";

const inputStyle = `${background.secondary.get()} ${
  transition.default
} transition-width rounded-md px-4 py-1 w-52 cursor-pointer
                    hover:outline-none hover:ring-pink-300 hover:ring-2
                    focus:outline-none focus:ring-pink-300 focus:ring-2 focus:w-full`;

export interface SearchbarProps {
  onSearch: (value: string) => void;
}

const Searchbar: React.FunctionComponent<SearchbarProps> = (
  props: SearchbarProps
) => (
  <div
    className={`flex col-span-3 items-center w-full px-4 py-3 border-b border-gray-400 dark:border-gray-700 space-x-10 overflow-x-hidden`}
  >
    <input
      className={inputStyle}
      placeholder="Search..."
      onChange={(e) => props.onSearch(e.target.value)}
    />
    <div></div>
  </div>
);

export default Searchbar;
