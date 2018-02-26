import { Link } from "./link";
import { Href } from "./href";
import { LinksObject } from "./linksObject";
import * as httpStatus from "http-status-codes";

/* tslint:disable:variable-name */
export class Result<T> {
	_statusCode: number;
	_data?: T;
	_links?: LinksObject;
	_errors: string[];

	protected constructor(statusCode: number, data?: T, links?: Link | Link[]) {
		this._statusCode = statusCode;
		this._data = data;
		this._links = this.createLinks(links);
	}

	static ok<T>(data?: T, links?: Link | Link[]): Result<T> {
		return new Result<T>(httpStatus.OK, data, links);
	}

	static created<T>(data?: T, links?: Link | Link[]): Result<T> {
		return new Result<T>(httpStatus.CREATED, data, links);
	}

	static deleted(): Result<object> {
	  return new Result<object>(httpStatus.NO_CONTENT);
  }

	static error(statusCode: number, errors?: string | string[]): Result<object> {

		const result: Result<object> = new Result<object>(statusCode);

		if (errors !== undefined) {
			if (Array.isArray(errors)) {
				result._errors = errors;
			} else {
				result._errors = [];
				result._errors.push(errors);
			}
		}

		return result;
	}

	private createLinks(links?: Link | Link[]): LinksObject | undefined {
		let linksObj: LinksObject;

		if (!links) {
			return undefined;
		}
		linksObj = new LinksObject();
		if (Array.isArray(links)) {
			for (const link of links) {
				this.createLink(linksObj, link);
			}
		}
		else {
			this.createLink(linksObj, links);
		}
		return linksObj;
	}

	private createLink(linksObject: LinksObject, link: Link): void {
		linksObject[link.ref] = new Href();
		linksObject[link.ref].href = link.href;
	}
}
