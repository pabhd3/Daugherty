import { ApplicationInfo } from "../models/applicationInfo";
import { PackageJson } from "../models/packageJson";
import { Service } from "typedi";
import * as fs from "fs";

@Service()
export class ApplicationInfoManager {
	
	getApplicationInfo(): ApplicationInfo {

		const packageJson: PackageJson = 
			JSON.parse(fs.readFileSync("package.json", "utf8")) as PackageJson;
		const currentDateTime: Date = new Date();

		return {
			name: packageJson.name,
			description: packageJson.description,
			version: packageJson.version,
			nodeVersion: process.version,
			timestamp: currentDateTime,
			processPid: process.pid,
			platform: process.platform,
			uptimeInSeconds: process.uptime()
		};

	}
}