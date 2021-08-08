export interface MiniCardProps {

}

const MiniCard: React.FC<MiniCardProps> = () => {
    return (
        <div className={`bg-gray-800 px-10 rounded-md flex flex-col items-center justify-center sm:w-40 relative h-full col-span-6 border border-gray-900`}>
            <p className={`bg-black px-3 rounded-full absolute -top-2`}>i</p>
            <div className={`sm:absolute bottom-0 text-center`}>
                <p>value</p>
                <p>key</p>
            </div>
        </div>
    );
}

export default MiniCard;