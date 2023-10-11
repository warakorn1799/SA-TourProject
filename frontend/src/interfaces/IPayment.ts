import { MemberInterface } from "./IMember";
import { BookingInterface } from "./IBooking";

export interface PaymentInterface {
    ID?: number; 
    Receipt?: Blob;
    Date?: Date;
    MemberID?: MemberInterface;
    BookingID?: BookingInterface;
}