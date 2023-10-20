import { BookingInterface } from "./IBooking";
import { MemberInterface } from "./IMember";
import { RateInterface } from "./IRate";


export interface ReviewInterface {
    ID?: number; 
    Companion?: string;
    Comment?: string;
    Image?: string;
    MemberID?: Number;
    Member?: MemberInterface;
    RateID?: Number;
    Rate?: RateInterface;
    BookingID?: Number;
    Booking?: BookingInterface;
}