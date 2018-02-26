import * as request from "supertest";
import { expect } from "chai";
import * as httpStatus from "http-status-codes";
import { server } from "./../../../src/server";
import * as fs from "fs";
import { PackageJson } from "../../../src/models/packageJson";

/* tslint:disable:no-unsafe-any */
describe("/info Integration Tests ->", () => {
	it("should return 200 for /info", (done: MochaDone) => {

		const expected: PackageJson = JSON.parse(fs.readFileSync("package.json", "utf8")) as PackageJson;
		
		request(server)
			.get("/info")
			.end((err: {}, response: request.Response) => {
				expect(response.status).to.equal(httpStatus.OK);
				expect(response.body._statusCode).to.equal(httpStatus.OK);
				expect(response.body._data.name).to.equal(expected.name);
				expect(response.body._data.description).to.equal(expected.description);
				expect(response.body._data.version).to.equal(expected.version);
				expect(response.body._data.nodeVersion).to.equal(process.version);
				expect(response.body._links.self.href).to.contain("/info");
				done();
			});
	});
});