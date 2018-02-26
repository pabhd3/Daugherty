import { Request } from "express";
import { Link } from "../models/response/link";

export class BaseController {
	public selfLink(req: Request): Link {
		return new Link("self", `${req.protocol}://${req.get("Host")}${req.originalUrl}`);
	}
}