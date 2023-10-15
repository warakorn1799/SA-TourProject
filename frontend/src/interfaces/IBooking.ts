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
<<<<<<< HEAD
    PackageID?: PackageInterface;
=======
    PackageID?: Number;
    Package?: PackageInterface;
>>>>>>> b1755057ec53bcb0a3ffcda23ab0b7ae3efb4961
    RoomTypeID?: RoomTypeInterface;
    MemberID?: MemberInterface;
}