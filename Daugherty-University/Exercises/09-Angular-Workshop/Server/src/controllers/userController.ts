import { JsonController, Req, Body, Res, Param, QueryParam, Get, Post, Put, Delete, HttpError } from "routing-controllers";
import { Request, Response } from "express";
import { BaseController } from "./baseController";
import { Result } from "../models/response/result";
import { UserManager } from "../managers/userManager";
import { User } from "../models/user";
import * as httpStatus from "http-status-codes";

@JsonController()
export class UserController extends BaseController {

  private readonly userManager: UserManager;
  private static DEFAULT_MAX_USERS: number = 10;

  constructor(userManager: UserManager) {
    super();
    this.userManager = userManager;
  }

  @Get("/users")
  public getUsers(@QueryParam("filterProp") filterProp: string = "", @QueryParam("filterText") filterText: string = "",
                  @QueryParam("sortAsc") sortAsc: boolean = true, @QueryParam("max") max: number = UserController.DEFAULT_MAX_USERS, 
                  @QueryParam("offset") offset: number = 0, @Req() req: Request, @Res() res: Response): Result<User[]> {
    return Result.ok(this.userManager.findMany(filterProp, filterText, sortAsc, max, offset), this.selfLink(req));
  }

  @Get("/users/:id")
  public getUser(@Param("id") id: number, @Req() req: Request, @Res() res: Response): Result<User | object> {
    const user: User | undefined = this.userManager.findById(id);

    if (user) {
      return Result.ok(user, this.selfLink(req));
    } else {
      throw new HttpError(httpStatus.NOT_FOUND);
    }
  }

  @Post("/users")
  public createUser(@Body() user: User, @Req() req: Request, @Res() res: Response): Result<User | object> {
    user.id = -1;

    try {
      return Result.created(this.userManager.create(user));
    } catch (e) {
      throw new HttpError(httpStatus.UNPROCESSABLE_ENTITY, e.message);
    }
  }

  @Put("/users/:id")
  public updateUser(@Body() user: User, @Req() req: Request, @Res() res: Response): Result<User | object> {
    try {
      return Result.ok(this.userManager.update(user));
    } catch (e) {
      throw new HttpError(httpStatus.UNPROCESSABLE_ENTITY, e.message);
    }
  }

  @Delete("/users/:id")
  public deleteUser(@Param("id") id: number, @Req() req: Request, @Res() res: Response): Result<object> {
    try {
      this.userManager.remove(id);
      return Result.deleted();
    } catch (e) {
      throw new HttpError(httpStatus.BAD_REQUEST, e.message);
    }
  }
}
