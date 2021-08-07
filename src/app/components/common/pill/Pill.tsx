import { background } from "app/styles/Themes";

const pillStyle = `${background.accent.get()} rounded-full px-4 py-1 text-xs flex items-center`;

export interface PillProps {
    children: React.ReactNode;
}
 
const Pill: React.FC<PillProps> = (props: PillProps) => {
    return ( 
        <div className={pillStyle}>
            {props.children}
        </div>
     );
}
 
export default Pill;