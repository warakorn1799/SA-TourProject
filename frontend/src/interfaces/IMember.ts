import { CountryInterface } from "./ICountry";

export interface MemberInterface {
    ID?: number; 
    Firstname?: string;
    Lastname?: string;
    country?: CountryInterface;
    Email?: string;
    Password?: string;
    Phone?: string;
}