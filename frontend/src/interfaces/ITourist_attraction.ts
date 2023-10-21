import { AdminInterface } from "./IAdmin";

export interface Tourist_attractionInterface {
    ID?: number; 
    Name?: string;
    Location?: string;
    Image?: string;
    Map?: string;
    Opentime?: Date;
    Closetime?: Date;
    Fromdate?: Date;
    Todate?: Date;
    Price?: number;
    AdminID?: AdminInterface;
}