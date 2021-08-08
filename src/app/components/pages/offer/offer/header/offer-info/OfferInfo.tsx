import Pill from "app/components/common/pill/Pill"
import OfferLocation from "./OfferLocation";
import OfferSalary from "./OfferSalary";
import OfferTitle from "./OfferTitle";

export interface OfferInfoProps {

}

const OfferInfo: React.FC<OfferInfoProps> = () => {
    return (
        <div className={`flex flex-col items-stretch space-y-6 sm:space-y-2 `}>
            <OfferTitle title={`Python Software Engineer`} />
            <div className={`flex sm:space-x-4 space-y-2 flex-col sm:flex-row items-baseline`}>
                <OfferLocation location={`Centrum, Tel Aviv-Yafo`}></OfferLocation>
                <Pill>Fully Remote</Pill>
            </div>
            <div className={`flex flex-col`}>
                <OfferSalary salary={{min:'10000', max:'16667', currency:`USD` }} />
            </div>
        </div>
    );
}

export default OfferInfo;