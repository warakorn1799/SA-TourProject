import { BookingInterface } from "./IBooking";
import { MemberInterface } from "./IMember";
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
    Booking?: BookingInterface;
    BookingID?: number;

}