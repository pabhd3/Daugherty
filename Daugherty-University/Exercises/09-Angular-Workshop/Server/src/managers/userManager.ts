import { Service } from "typedi";
import { filter, find, findIndex, last, pullAt, reverse, slice, sortBy } from "lodash";
import { User } from "../models/user";
import { dataStore } from "../data/dataStore";

@Service()
export class UserManager {
  public findById(id: number): User | undefined {
    const users: User[] = this.getCachedUsers();
    return find(users, {id});
  }

  public findByUsername(username: string): User | undefined {
    const users: User[] | undefined = dataStore.cache.get("users");
    return find(users, {username});
  }

  public findMany(filterProp: string, filterText: string, sortAsc: boolean, max: number, offset: number): User[] {
    let users: User[] = this.getCachedUsers();
    users = sortBy(users, filterProp);

    if (!sortAsc) {
      reverse(users);
    }

    if (filterText) {
      users = filter(users, (user: User) => {
        if (filterProp === "id") {
          return parseInt(user[filterProp].toString()) === parseInt(filterText);
        } else {
          return user[filterProp].toLowerCase().includes(filterText.toLowerCase());
        }
      });
    }

    let endPosition: number = offset + max;
    if (endPosition > users.length) {
      endPosition = users.length;
    }
    users = slice(users, offset, endPosition);

    return users;
  }

  public create(user: User): User {
    if (user.isValid()) {
      const users: User[] = this.getCachedUsers();
      const lastUser: User | undefined = last(sortBy(users, "id"));
      user.id = lastUser ? lastUser.id + 1 : 0;
      users.push(user);
      dataStore.cache.set("users", users);
      return user;
    } else {
      throw new Error("User is not valid");
    }
  }

  public update(user: User): User {
    if (user.id >= 0 && user.isValid()) {
      const users: User[] = this.getCachedUsers();
      const userIndex: number = findIndex(users, {id: user.id});
      if (userIndex < 0) {
        throw new Error("Cannot update user that does not exist");
      }
      users.splice(userIndex, 1, user);
      dataStore.cache.set("users", users);
      return user;
    }

    throw new Error("User is not valid");
  }

  public remove(id: number): void {
    const users: User[] = this.getCachedUsers();
    const userIndex: number = findIndex(users, {id});
    if (userIndex < 0) {
      throw new Error("Cannot delete user that does not exist");
    }

    pullAt(users, userIndex);
    dataStore.cache.set("users", users);
  }

  private getCachedUsers(): User[] {
    let users: User[] | undefined = dataStore.cache.get("users");
    if (!users) {
      users = [];
    }

    return users;
  }
}