import { JsonController, Req, Res, Post, HttpError } from "routing-controllers";
import { Request, Response } from "express";
import { BaseController } from "./baseController";
import { Result } from "../models/response/result";
import { UserManager } from "../managers/userManager";
import { User } from "../models/user";
import * as httpStatus from "http-status-codes";
import { Credentials } from "../models/credentials";
import { dataStore } from "../data/dataStore";

@JsonController()
export class AuthController extends BaseController {
  private readonly userManager: UserManager;

  constructor(userManager: UserManager) {
    super();
    this.userManager = userManager;
  }

  @Post("/login")
  public login(@Req() req: Request, @Res() res: Response): Result<User | object> {
    const credentials: Credentials = req.body;
    if (credentials.username && credentials.password) {
      const user: User | undefined = this.userManager.findByUsername(credentials.username);
      if (user) {
        dataStore.cache.set("loggedInUser", user);
        return Result.ok(user);
      } else {
        throw new HttpError(httpStatus.NOT_FOUND, "User not found");
      }
    } else {
      throw new HttpError(httpStatus.UNPROCESSABLE_ENTITY, "Username and password are required");
    }
  }

  @Post("/logout")
  public logout(@Req() req: Request, @Res() res: Response): Result<object> {
    dataStore.cache.del("loggedInUser");
    return Result.deleted();
  }
}
