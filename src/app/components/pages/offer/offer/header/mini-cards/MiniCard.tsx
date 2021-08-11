import { background } from "app/styles/Themes";

export interface MiniCardProps {
    name: string;
    value: string;
}

const MiniCard: React.FC<MiniCardProps> = (props: MiniCardProps) => {
    return (
        <div className={`${background.secondary.get()} ring-blue-400 ring-2 shadow-lg rounded-sm flex flex-col items-center justify-center sm:w-40 relative h-full col-span-6 border border-gray-900 sm:border-0`}>
            <p className={`bg-black flex items-center justify-center rounded-full w-6 h-6 absolute -top-3`}>i</p>
            <div className={`text-center text-sm flex flex-col items-center`}>
                <p>{props.value}</p>
                <p className={`text-xs`}>{props.name}</p>
            </div>
        </div>
    );
}

export default MiniCard;