import { MemberInterface } from "./IMember";
import { PackageInterface } from "./IPackage";
import { RoomTypeInterface } from "./IRoomType";

export interface BookingInterface {
    ID?: number; 
    Fromdate?: Date;
    Todate?: Date;
    Adult?: number;
    Chil?: number;
    Price?: number;
    Package?: PackageInterface;
    PackageID?: PackageInterface;
    RoomTypeID?: RoomTypeInterface;
    MemberID?: MemberInterface;
}