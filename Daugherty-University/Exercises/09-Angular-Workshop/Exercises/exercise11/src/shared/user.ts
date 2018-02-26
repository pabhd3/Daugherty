import { Address } from "./address";

export class User {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    phone: string;
    dob: Date;
    active: boolean;
    password: string;
    address: Address;
}