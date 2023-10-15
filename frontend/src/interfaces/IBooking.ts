import { MemberInterface } from "./IMember";
import { PackageInterface } from "./IPackage";
import { RoomTypeInterface } from "./IRoomType";
import { MemberInterface } from "./IMember";

export interface BookingInterface {
    ID?: number; 
    Fromdate?: Date;
    Todate?: Date;
    Adult?: number;
    Chil?: number;
    Price?: number;
    PackageID?: PackageInterface;
    RoomTypeID?: RoomTypeInterface;
    MemberID?: MemberInterface;
}