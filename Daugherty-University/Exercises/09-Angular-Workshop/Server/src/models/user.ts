import { Type } from "class-transformer";
import { filter, flatten, split } from "lodash";
import { Address } from "./address";

export class User {
  public id: number;
  public username: string;
  public firstName: string;
  public lastName: string;
  public active: boolean;
  public email: string;
  public phone: string;
  public gender: string;
  public dob: Date;

  @Type(() => Address)
  public address: Address;

  [key: string]: any;

  constructor(id: number, username: string, firstName: string, lastName: string, active: boolean, email: string, phone: string, gender: string,
              dob: Date, address: Address) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.active = active;
    this.email = email;
    this.phone = phone;
    this.gender = gender;
    this.dob = dob;
    this.address = address;
  }

  private static PHONE_NUM_PARTS: number = 3;
  private static PHONE_PART_1_LENGTH: number = 3;
  private static PHONE_PART_2_LENGTH: number = 3;
  private static PHONE_PART_3_LENGTH: number = 4;

  public isValid(): boolean {
    return !!this.username && !!this.firstName && !!this.lastName && !!this.email && this.phoneIsValid() &&
        this.genderIsValid() && !!this.dob && this.address.isValid();
  }

  private phoneIsValid(): boolean {
    let valid: boolean = false;
    const phoneParts: string[] = split(this.phone, "-");
    if (phoneParts.length === User.PHONE_NUM_PARTS) {
      if (filter(flatten(phoneParts), (part: any) => isNaN(part)).length === 0) {
        /* tslint:disable:no-magic-numbers*/
        valid = phoneParts[0].length === User.PHONE_PART_1_LENGTH && phoneParts[1].length === User.PHONE_PART_2_LENGTH &&
            phoneParts[2].length === User.PHONE_PART_3_LENGTH;
      }
    }

    return valid;
  }

  private genderIsValid(): boolean {
    return this.gender === "M" || this.gender === "F";
  }
}
