import { OfferCardProps } from "app/components/pages/home/body/offers/offer-card/OfferCard";
import { MiniCardProps } from "app/components/pages/offer/offer/header/mini-cards/MiniCard";
import { OfferHeaderProps } from "app/components/pages/offer/offer/header/OfferHeader";
import Offer from "app/entities/Offer";

const getDaysAgo = (date: string) =>  Math.floor((Date.now() - new Date(date).getTime()) / (1000 * 3600 * 24));

const offerToOfferCard = (offer: Offer): OfferCardProps => {
    return {
        daysAgo:getDaysAgo(offer.date),
        ...offer,
    };
}

export const offerToOfferCardList = (offers: Offer[]): OfferCardProps[] => {
    return offers.map(offerToOfferCard);
}

export const offerToMiniCards = (offer: OfferHeaderProps): MiniCardProps[] => {
    const daysAgo = getDaysAgo(offer.date);
    const added = `${daysAgo} ${daysAgo > 1 ? 'days' : 'day'} ago`;
    return [
        {
            name: 'Company name',
            value: offer.contractor.name
        },
        {
            name: 'Company size',
            value: offer.contractor.employees.toString()
        },
        {
            name: 'Seniority',
            value: offer.seniority
        },
        {
            name: 'Added',
            value: added
        },
    ];
}