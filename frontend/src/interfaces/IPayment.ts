import { MemberInterface } from "./IMember";
import { BookingInterface } from "./IBooking";

export interface PaymentInterface {
    ID?: number; 
    Receipt?: string;
    Date?: Date;
    Member?: MemberInterface;
    MemberID?: Number;
    Booking?: BookingInterface;
    BookingID?: Number;
}