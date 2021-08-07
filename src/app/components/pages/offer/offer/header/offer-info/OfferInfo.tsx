export interface OfferInfoProps {

}

const OfferInfo: React.FC<OfferInfoProps> = () => {
    return (
        <div>
            <h1 className={`text-3xl letter tracking-wider`}>Offer</h1>
            <div className={`flex space-x-4`}>
                <h1>Location</h1>
                <h1>Type (Fully Remote) una pill</h1>
            </div>
            <div>
                10 000 - 16 667 USD <span>gross/month</span> - <span>Permanent</span>
            </div>
        </div>
    );
}

export default OfferInfo;