import { PackageInterface } from "./IPackage";
import { RoomTypeInterface } from "./IRoomType";

export interface BookingInterface {
    ID?: number; 
    Fromdate?: Date;
    Todate?: Date;
    Adult?: number;
    Chil?: number;
    PackageID?: PackageInterface;
    RoomTypeID?: RoomTypeInterface;
}