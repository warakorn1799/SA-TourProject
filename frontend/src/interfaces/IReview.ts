import { BookingInterface } from "./IBooking";
import { MemberInterface } from "./IMember";
import { PackageInterface } from "./IPackage";
import { RateInterface } from "./IRate";


export interface ReviewInterface {
    ID?: number; 
    Companion?: string;
    Comment?: string;
    Image?: string;
    Member?: MemberInterface;
    MemberID?: number
    Rate?: RateInterface;
    RateID?: number;
    Package?: PackageInterface;
    PackageID?: number;
   
}