import Pill from "app/components/common/pill/Pill"
import OfferLocation from "./OfferLocation";

export interface OfferInfoProps {

}

const OfferInfo: React.FC<OfferInfoProps> = () => {
    return (
        <div className={`flex flex-col items-stretch space-y-6 sm:space-y-2`}>
            <h1 className={`sm:text-3xl letter tracking-wider`}>Python Software Engineer</h1>
            <div className={`flex space-x-4`}>
                <OfferLocation location={`Centrum, Tel Aviv-Yafo`}></OfferLocation>
                <Pill>Fully Remote</Pill>
            </div>
            <div>
                <span className={`text-sm font-bold sm:text-lg`}>10 000 - 16 667 USD &nbsp;</span> 
                <span className={`text-xs font-thin sm:text-md`}>gross/month - Permanent&nbsp;</span> 
            </div>
        </div>
    );
}

export default OfferInfo;