import { BookingInterface } from "./IBooking";
import { MemberInterface } from "./IMember";

export interface Booking_MemberInterface {
    BookingID?: BookingInterface;
    MemberID?: MemberInterface;
}