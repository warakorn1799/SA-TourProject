import { CountryInterface } from "./ICountry";

export interface MemberInterface {
    ID?: number; 
    FirstName?: string;
    LastName?: string;
    country?: CountryInterface;
    Email?: string;
    Password?: string;
    Phone?: string;
}