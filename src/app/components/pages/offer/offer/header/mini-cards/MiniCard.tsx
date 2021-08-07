export interface MiniCardProps {

}

const MiniCard: React.SFC<MiniCardProps> = () => {
    return (
        <div className={`bg-gray-800 px-10 rounded-md flex flex-col items-center w-40 relative h-full`}>
            <p className={`bg-black px-3 rounded-full absolute -top-2`}>i</p>
            <div className={`absolute bottom-0 text-center`}>
                <p>value</p>
                <p>key</p>
            </div>
        </div>
    );
}

export default MiniCard;