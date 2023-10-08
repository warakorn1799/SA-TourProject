import { AdminInterface } from "./IAdmin";

export interface ITourist_attraction {
    ID?: number; 
    Name?: string;
    Location?: string;
    Image?: Blob;
    Map?: string;
    Opentime?: Date;
    Closetime?: Date;
    Fromdate?: Date;
    Todate?: Date;
    Price?: number;
    AdminID?: AdminInterface;
}