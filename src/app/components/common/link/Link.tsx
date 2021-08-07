import { Link as LinkReact } from "react-router-dom";

export interface LinkProps {
    pathname: string;
    children: React.ReactNode;
    search?: string;
    hash?: string;
    state?: object;
    className?: string;
}
 
const Link: React.FC<LinkProps> = (props: LinkProps) => {
    return (<LinkReact to={{...props}} className={props.className}>{props.children}</LinkReact>);
}
 
export default Link;