import { MemberInterface } from "./IMember";
import {RateInterface} from "./IRate";


export interface RevireInterface {
    ID?: number; 
    Companion?: string;
    Comment?: string;
    Image?: Blob;
    MemberID?: MemberInterface;
    RateID?: RateInterface;
}