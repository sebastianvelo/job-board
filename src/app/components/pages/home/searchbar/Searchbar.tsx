const searchbarStyle = `flex`;

export interface SearchbarProps {
    
}
 
const Searchbar: React.FC<SearchbarProps> = () => {
    return ( 
        <div className={searchbarStyle}>
            <input />
            <div>
                JS
                333#
            </div>
        </div>
     );
}
 
export default Searchbar;