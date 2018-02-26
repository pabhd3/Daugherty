import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../shared/user";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import { Result } from "../shared/result";

@Injectable()
export class UserService {
  private http: HttpClient;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  public async getUsers(): Promise<User[]> {
    return this.http.get<Result<User[]>>("/api/users").map((response: Result<User[]>) => response._data)
      .toPromise()
      .catch(() => Promise.reject("Failed to get users"));
  }
}