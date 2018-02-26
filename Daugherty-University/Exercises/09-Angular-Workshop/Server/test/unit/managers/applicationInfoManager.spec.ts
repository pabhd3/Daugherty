import { ApplicationInfoManager } from "../../../src/managers/applicationInfoManager";
import { ApplicationInfo } from "../../../src/models/applicationInfo";
import { PackageJson } from "../../../src/models/packageJson";
import { expect } from "chai";
import * as fs from "fs";

describe("ApplicationInfoManager Test", () => {

	let target: ApplicationInfoManager;

	beforeEach(() => {
		target = new ApplicationInfoManager();
	});

	describe("getApplicationInfo", () => {

		it("should return valid application information", () => {

			// Arrange
			const expected: PackageJson = 
				JSON.parse(fs.readFileSync("package.json", "utf8")) as PackageJson;
	
			// Act
			const actual: ApplicationInfo = target.getApplicationInfo();

			// Assert
			expect(actual.name).to.equal(expected.name);
			expect(actual.description).to.equal(expected.description);
			expect(actual.version).to.equal(expected.version);
			expect(actual.nodeVersion).to.equal(process.version);
			expect(actual.timestamp).to.not.equal(undefined);
			
		});

	});

});