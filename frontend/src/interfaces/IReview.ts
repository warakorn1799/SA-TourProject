import { MemberInterface } from "./IMember";
import { RateInterface } from "./IRate";


export interface ReviewInterface {
    ID?: number; 
    Companion?: string;
    Comment?: string;
    Image?: string;
    MemberID?: Number;
    RateID?: Number;
    Rate?: RateInterface;
}