import { Link } from "./link";
import { Href } from "./href";
import { LinksObject } from "./linksObject";

/* tslint:disable:variable-name */
export class Result<T> {
  _statusCode: number;
  _data?: T;
  _links?: LinksObject;
  _errors: string[];
}
