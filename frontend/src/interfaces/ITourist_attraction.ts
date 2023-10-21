import { AdminInterface } from "./IAdmin";

export interface Tourist_attractionInterface {
    ID?: number; 
    Name?: string;
    Location?: string;
    Image1?: string;
    Image2?: string;
    Image3?: string;
    Map?: string;
   
    AdminID?: AdminInterface;
}