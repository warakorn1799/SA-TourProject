import { CountryInterface } from "./ICountry";

export interface MemberInterface {
    ID?: number; 
    Firstname?: string;
    Lastname?: string;
    Country?: CountryInterface;
    CountryID?: number;
    Email?: string;
    Password?: string;
    Phone?: string;
    Profile?: string;
}