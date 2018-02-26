import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { User } from "../shared/user";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import { UserSearchParams } from "./models/userSearchParams";
import { Result } from "../shared/result";

@Injectable()
export class UserService {
  private http: HttpClient;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  public async getUsers(userSearchParams?: UserSearchParams): Promise<User[]> {
    let params: HttpParams = new HttpParams();
    if (userSearchParams) {
      params = params.append("filterProp", userSearchParams.filterProp);
      params = !userSearchParams.filterText ? params : params.append("filterText", userSearchParams.filterText);
      params = params.append("sortAsc", userSearchParams.sortAsc ? "true" : "false");
    }
    return this.http.get<Result<User[]>>("/api/users", { params }).map((response: Result<User[]>) => response._data)
      .toPromise()
      .catch(() => Promise.reject("Failed to get users"));
  }
}
