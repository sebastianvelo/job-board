import Container from "./common/Container";
import OfferContractor, { OfferContractorProps } from "./OfferContractor";
import OfferDate, { OfferDateProps } from "./OfferDate";
import OfferLocation, { OfferLocationProps } from "./OfferLocation";
import OfferSalary, { OfferSalaryProps } from "./OfferSalary";
import OfferTitle, { OfferTitleProps } from "./OfferTitle";
import OfferTags, { OfferTagsProps } from "./OfferTags";

export interface OfferDataProps extends OfferTitleProps, OfferContractorProps,
    OfferLocationProps, OfferDateProps, OfferSalaryProps, OfferTagsProps {
    id: number;
    description: string;
}

const OfferData: React.FC<OfferDataProps> = (props: OfferDataProps) => {
    return (
        <div className={`pl-6 flex justify-between items-baseline w-full flex-col space-y-2.5`}>
            <Container>
                <OfferTitle {...props} />
                <div className={`flex items-baseline`}>
                    <OfferSalary {...props} />
                    <OfferDate {...props} />
                </div>
            </Container>
            <Container>
                <div className={`flex items-baseline space-x-8`}>
                    <OfferContractor {...props} />
                    <OfferLocation {...props} />
                </div>
                <OfferTags {...props} />
            </Container>
        </div>
    );
}

export default OfferData;