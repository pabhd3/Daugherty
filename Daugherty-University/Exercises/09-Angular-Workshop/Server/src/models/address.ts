export class Address {
  public line1: string;
  public line2: string;
  public city: string;
  public state: string;
  public zip: number;

  constructor(line1: string, line2: string, city: string, state: string, zip: number) {
    this.line1 = line1;
    this.line2 = line2;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }

  public isValid(): boolean {
    return !!this.line1 && !!this.city && !!this.state && !!this.zip;
  }
}
