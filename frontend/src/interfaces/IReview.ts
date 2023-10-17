import { MemberInterface } from "./IMember";
import { RateInterface } from "./IRate";


export interface ReviewInterface {
    ID?: number; 
    Companion?: string;
    Comment?: string;
    Image?: string;
<<<<<<< HEAD
    MemberID?: Number;
    RateID?: Number;
    Member?: MemberInterface;
    Rate?: RateInterface;
   
    
=======
    MemberID?: MemberInterface;
    RateID?: RateInterface;
>>>>>>> b09c2c2e9cd67c4495d4315c66737976df9ab862
}