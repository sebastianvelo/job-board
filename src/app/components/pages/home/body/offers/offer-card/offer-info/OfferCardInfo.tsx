import Container from "./common/Container";
import OfferCardContractorName, { OfferCardContractorNameProps } from "./OfferCardContractorName";
import OfferCardDate, { OfferCardDateProps } from "./OfferCardDate";
import OfferCardLocation, { OfferCardLocationProps } from "./OfferCardLocation";
import OfferCardSalary, { OfferCardSalaryProps } from "./OfferCardSalary";
import OfferCardTitle, { OfferCardTitleProps } from "./OfferCardTitle";
import OfferCardTags, { OfferCardTagsProps } from "./OfferCardTags";

export interface OfferCardInfoProps extends OfferCardTitleProps, OfferCardContractorNameProps,
    OfferCardLocationProps, OfferCardDateProps, OfferCardSalaryProps, OfferCardTagsProps {}

const OfferCardInfo: React.FC<OfferCardInfoProps> = (props: OfferCardInfoProps) => {
    return (
        <div className={`pl-6 flex justify-between w-full flex-col space-y-2.5`}>
            <Container>
                <OfferCardTitle {...props} />
                <div className={`flex items-center`}>
                    <OfferCardSalary {...props} />
                    <OfferCardDate {...props} />
                </div>
            </Container>
            <Container>
                <div className={`flex items-baseline space-x-8`}>
                    <OfferCardContractorName {...props} />
                    <OfferCardLocation {...props} />
                </div>
                <OfferCardTags {...props} />
            </Container>
        </div>
    );
}

export default OfferCardInfo;