import { PromotionInterface } from "./IPromotion";

export interface PackageInterface {
    ID?: number; 
    Name?: string;
    Detail?: string;
    Priceadult?: number;
    Pricechil?: number;
    PromotionID?: PromotionInterface;
    Highlights?: string;
}