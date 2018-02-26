import { User } from "../models/user";
import { Address } from "../models/address";

/*tslint:disable:no-magic-numbers*/
const users: User[] = [
  new User(0, "test", "Bobby", "Fischer", true, "bobbyfischer@whereishe.com", "555-555-5555", "M", new Date(1985, 7, 25),
      new Address("1600 Pennsylvania Ave NW", "", "Washington", "DC", 20500)),
  new User(1, "abobwhite", "Alex", "White", true, "alex.white@daugherty.com", "314-910-8606", "M", new Date(1989, 1, 14),
      new Address("1621 Brett Ridge Dr", "", "Dardenne Prairie", "MO", 63368)),
  new User(2, "bossman", "Mike", "Taylor", true, "michael.taylor@daugherty.com", "816-867-5309", "M", new Date(1990, 5, 8),
      new Address("555 Heritage Ln", "Apt A", "Saint Charles", "MO", 63304)),
  new User(3, "garyLazer", "Gary", "Lazereyes", false, "gary.lazor@eyes.com", "412-645-1234", "M", new Date(1975, 10, 8),
      new Address("123 Pine St", "", "Columbia", "MO", 65432)),
  new User(4, "jimmyJohn", "Jim", "Drewes", true, "jim.drewes@daugherty.com", "314-922-0456", "M", new Date(1980, 3, 15),
      new Address("8585 Bryan Rd", "", "O\"Fallon", "MO", 63366)),
  new User(5, "jan", "Jan", "Daugherty", true, "jan.daugherty@daughery.com", "314-861-4200", "F", new Date(1958, 7, 11),
      new Address("3 CityPlace Dr", "", "Creve Couer", "MO", 64121)),
  new User(6, "timmy", "Tim", "Craig", false, "tim.craig@daughery.com", "314-855-1234", "M", new Date(1962, 5, 26),
      new Address("422 Hwy N", "", "Lake Saint Louis", "MO", 63367)),
  new User(7, "hillz", "Hillary", "Clinton", true, "hillz@privateServer.com", "567-890-1234", "F", new Date(1947, 9, 26),
      new Address("120 West 45th St", "Suite 2700", "New York", "NY", 10036)),
  new User(8, "trump", "Donald", "Trump", true, "donnie@makeDonaldDrumpfAgain.com", "123-456-7890", "M", new Date(1946, 5, 14),
      new Address("725 5th Ave", "", "New York", "NY", 10022))
];

const loggedInUser: User | null = null;

export {
  users,
  loggedInUser
};