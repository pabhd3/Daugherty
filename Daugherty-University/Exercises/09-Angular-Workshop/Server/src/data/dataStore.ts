import * as NodeCache from "node-cache";
import { users, loggedInUser } from "./seed-data";

class DataStore {
  public cache: NodeCache;

  public initialize(cache: NodeCache): void {
    this.cache = cache;
    this.cache.set("users", users);
    this.cache.set("loggedInUser", loggedInUser);
  }
}

export const dataStore: DataStore = new DataStore();