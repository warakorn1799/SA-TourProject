import { PromotionInterface } from "./IPromotion";

export interface PackageInterface {
    ID?: number; 
    Name?: string;
    Type?: string;
    Fromdate?: Date;
    Todate?: Date;
    Day?: string;
    Status?: string;
    Person?: number;
    Detail?: string;
    Price?: number;
    Priceadult?: number;
    Pricechil?: number;
    PromotionID?: PromotionInterface;
}