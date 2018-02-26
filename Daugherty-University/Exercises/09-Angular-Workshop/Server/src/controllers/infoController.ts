import { JsonController, Req, Res, Get } from "routing-controllers";
import { Request, Response } from "express";
import { BaseController } from "./baseController";
import { Result } from "../models/response/result";
import { ApplicationInfo } from "../models/applicationInfo";
import { ApplicationInfoManager } from "../managers/applicationInfoManager";
import { log } from "../log";

@JsonController()
export class InfoController extends BaseController {

  private readonly applicationInfoManager: ApplicationInfoManager;

  constructor(applicationInfoManager: ApplicationInfoManager) {
    super();
    this.applicationInfoManager = applicationInfoManager;
  }

  @Get("/info")
  getInfo( @Req() req: Request, @Res() res: Response): Result<ApplicationInfo> {
    log.info("Requesting for information.");
    return Result.ok(this.applicationInfoManager.getApplicationInfo(), this.selfLink(req));
  }

}
