import { PromotionInterface } from "./IPromotion";
import { AdminInterface } from "./IAdmin";

export interface PackageInterface {
    ID?: number; 
    Name?: string;
    Highlights?: string;
    Detail?: string;
    Priceadult?: number;
    Pricechil?: number;
    
    PromotionID?: PromotionInterface;
    AdminID?: AdminInterface;
}